(function() {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('course');
    const mi = parseInt(params.get('module') || '0', 10);
    const ti = parseInt(params.get('topic') || '0', 10);

    if (!courseId || !window.COURSES[courseId] || !window.LESSONS || !window.LESSONS[courseId]) {
        document.getElementById('lessonTitle').textContent = 'Content Not Found';
        document.getElementById('lessonBody').innerHTML = '<p>Sorry, this lesson could not be loaded. Please return to the course page.</p>';
        return;
    }

    const course = window.COURSES[courseId];
    const lessonData = window.LESSONS[courseId][mi][ti];
    const storageKey = 'efh_progress_' + courseId;
    
    // Load progress
    function loadProgress() {
        try { return JSON.parse(localStorage.getItem(storageKey)) || {}; } catch(e) { return {}; }
    }
    function saveProgress(p) { localStorage.setItem(storageKey, JSON.stringify(p)); }
    let progress = loadProgress();

    // Populate Headers
    document.getElementById('backToCourse').href = 'course.html?id=' + courseId;
    document.getElementById('sidebarCourseTitle').textContent = course.title;
    document.getElementById('moduleLabel').textContent = course.modules[mi].name;
    document.getElementById('lessonTitle').textContent = lessonData.title;
    document.title = lessonData.title + ' - EduFreeHub';

    // Populate Video
    if (lessonData.videoId) {
        document.getElementById('lessonVideo').src = 'https://www.youtube-nocookie.com/embed/' + lessonData.videoId;
        document.getElementById('videoSection').style.display = 'block';
        
        // Add requested description details
        const topicObj = course.modules[mi].topics[ti];
        document.getElementById('videoDescTitle').textContent = `Module: ${course.modules[mi].name} — ${topicObj.title}`;
        document.getElementById('videoDescText').textContent = topicObj.desc || "Dive deep into this topic and grasp the fundamentals presented in the lecture.";
    }

    // Populate Body
    document.getElementById('lessonBody').innerHTML = lessonData.content;

    // Generate Table of Contents
    const tocContainer = document.getElementById('tocContainer');
    let tocHtml = '';
    
    // Array to easily find prev/next topic
    const flatTopics = [];

    course.modules.forEach((mod, mIndex) => {
        let topicsHtml = '';
        mod.topics.forEach((topic, tIndex) => {
            const isCurrent = (mIndex === mi && tIndex === ti);
            const isDone = !!progress[mIndex + '_' + tIndex];
            
            flatTopics.push({ m: mIndex, t: tIndex });

            topicsHtml += `
                <a href="lesson.html?course=${courseId}&module=${mIndex}&topic=${tIndex}" 
                   class="toc-topic ${isCurrent ? 'active' : ''} ${isDone ? 'completed' : ''}">
                    <div class="toc-icon"></div>
                    ${topic.title}
                </a>
            `;
        });

        tocHtml += `
            <div class="toc-module">
                <div class="toc-module-header" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display==='none' ? 'block' : 'none'">
                    ${mod.name}
                </div>
                <div class="toc-module-list" style="display:${mIndex === mi ? 'block' : 'none'};">
                    ${topicsHtml}
                </div>
            </div>
        `;
    });
    tocContainer.innerHTML = tocHtml;

    // Prev / Next Navigation
    const currentIndex = flatTopics.findIndex(ft => ft.m === mi && ft.t === ti);
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (currentIndex > 0) {
        const p = flatTopics[currentIndex - 1];
        prevBtn.href = `lesson.html?course=${courseId}&module=${p.m}&topic=${p.t}`;
    } else {
        prevBtn.style.visibility = 'hidden';
    }

    let nextLink = `course.html?id=${courseId}`; // Default to course home if last lesson
    if (currentIndex < flatTopics.length - 1) {
        const n = flatTopics[currentIndex + 1];
        nextLink = `lesson.html?course=${courseId}&module=${n.m}&topic=${n.t}`;
    }
    nextBtn.href = nextLink;

    // Check if already completed
    const currentKey = mi + '_' + ti;
    if (progress[currentKey]) {
        // Unhide Next button if already completed
        nextBtn.style.display = 'flex';
        if (currentIndex === flatTopics.length - 1) {
             nextBtn.textContent = 'Finish Course \u2192';
        }
    }

    // Build Quiz form
    const quizContainer = document.getElementById('quizContainer');
    let currentQuizState = []; // [{qId, correctIndex, selected: null}]
    let quizHtml = '';

    if (lessonData.quiz) {
        const qKeys = Object.keys(lessonData.quiz);
        qKeys.forEach((key, qIndex) => {
            const qData = lessonData.quiz[key];
            currentQuizState.push({ id: key, correct: qData.correctIndex, selected: null });
            
            let optionsHtml = '';
            qData.options.forEach((opt, oIndex) => {
                optionsHtml += `
                    <label class="option-label" id="label_${key}_${oIndex}">
                        <input type="radio" name="${key}" value="${oIndex}" onchange="window.__selectOption('${key}', ${oIndex})">
                        <span>${opt}</span>
                    </label>
                `;
            });

            quizHtml += `
                <div class="question-block" id="block_${key}">
                    <div class="question-text">${qIndex + 1}. ${qData.q}</div>
                    <div class="options">
                        ${optionsHtml}
                    </div>
                </div>
            `;
        });
        quizContainer.innerHTML = quizHtml;
    } else {
        document.getElementById('quizSection').style.display = 'none';
        nextBtn.style.display = 'flex';
    }

    // Global hooks
    window.__selectOption = function(qId, selectedIndex) {
        const qObj = currentQuizState.find(q => q.id === qId);
        if (qObj) qObj.selected = selectedIndex;
        // reset visuals for this block
        const block = document.getElementById('block_' + qId);
        block.querySelectorAll('.option-label').forEach(lbl => {
            lbl.classList.remove('wrong', 'correct');
            lbl.style.borderColor = 'transparent';
        });
        document.getElementById('quizFeedback').style.display = 'none';
    };

    window.__submitQuiz = function() {
        let allAnswered = true;
        let allCorrect = true;

        currentQuizState.forEach(q => {
            if (q.selected === null) allAnswered = false;
        });

        if (!allAnswered) {
            alert('Please answer all questions before submitting.');
            return;
        }

        // Validate
        currentQuizState.forEach(q => {
            const lbl = document.getElementById(`label_${q.id}_${q.selected}`);
            if (q.selected === q.correct) {
                lbl.classList.add('correct');
            } else {
                lbl.classList.add('wrong');
                allCorrect = false;
                // Highlight correct one
                document.getElementById(`label_${q.id}_${q.correct}`).classList.add('correct');
            }
        });

        const fb = document.getElementById('quizFeedback');
        const submitBtn = document.getElementById('submitQuizBtn');
        
        if (allCorrect) {
            fb.textContent = "Perfect! You passed the assignment.";
            fb.className = "feedback-msg success";
            submitBtn.disabled = true;
            submitBtn.textContent = "Passed \u2714";
            
            // Save to localStorage
            progress[currentKey] = true;
            saveProgress(progress);
            
            // Mark TOC
            const activeToc = document.querySelector('.toc-topic.active');
            if (activeToc) activeToc.classList.add('completed');
            
            // Reveal Next
            nextBtn.style.display = 'flex';
            if (currentIndex === flatTopics.length - 1) {
                 nextBtn.textContent = 'Finish Course \u2192';
            }
            
            // Auto scroll to next
            setTimeout(() => {
                nextBtn.scrollIntoView({behavior: 'smooth', block: 'center'});
            }, 800);
        } else {
            fb.textContent = "Some answers were incorrect. Review the lesson and try again.";
            fb.className = "feedback-msg error";
            
            // Reset state
            setTimeout(() => {
                currentQuizState.forEach(q => {
                     q.selected = null;
                     const radios = document.getElementsByName(q.id);
                     for(let r of radios) r.checked = false;
                     document.getElementById('block_' + q.id).querySelectorAll('.option-label').forEach(lbl => {
                        lbl.classList.remove('wrong', 'correct');
                     });
                });
                fb.style.display = 'none';
            }, 3000);
        }
    };
})();
