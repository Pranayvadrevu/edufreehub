// course-app.js — Renders the course page and handles progress
(function() {
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get('id');
  if (!courseId || !window.COURSES || !window.COURSES[courseId]) {
    document.getElementById('courseTitle').textContent = 'Course Not Found';
    document.getElementById('courseDesc').textContent = 'Sorry, we could not find the course you are looking for.';
    return;
  }
  const course = window.COURSES[courseId];
  const storageKey = 'efh_progress_' + courseId;

  // Load progress
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(storageKey)) || {}; } catch(e) { return {}; }
  }
  function saveProgress(p) { localStorage.setItem(storageKey, JSON.stringify(p)); }
  let progress = loadProgress();

  // Set page info
  document.title = course.title + ' - EduFreeHub';
  document.getElementById('courseTitle').textContent = course.title;
  document.getElementById('courseDesc').textContent = course.description;
  document.getElementById('breadcrumb-cat').textContent = course.category;
  document.getElementById('breadcrumb-cat').href = course.categoryPage;
  document.getElementById('breadcrumb-course').textContent = course.title;

  // Meta row
  const metaHtml = [
    {icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>', text:course.duration},
    {icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>', text:course.level},
    {icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ffd166" stroke="#ffd166" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>', text:course.rating + ' rating'},
    {icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>', text:course.learners + ' learners'}
  ].map(m => '<div class="course-meta-item">' + m.icon + ' ' + m.text + '</div>').join('');
  document.getElementById('courseMeta').innerHTML = metaHtml;

  // Tags
  document.getElementById('courseTags').innerHTML = course.topics.map(t => '<span class="course-tag">' + t + '</span>').join('');

  // Sidebar
  document.getElementById('courseSidebar').innerHTML =
    '<div class="sidebar-provider"><div class="provider-avatar">' + course.provider.charAt(0) + '</div><div><div class="provider-name">' + course.provider + '</div><div class="provider-label">Course Provider</div></div></div>' +
    '<div class="sidebar-stat"><span class="sidebar-stat-label">Modules</span><span class="sidebar-stat-value">' + course.modules.length + '</span></div>' +
    '<div class="sidebar-stat"><span class="sidebar-stat-label">Topics</span><span class="sidebar-stat-value">' + course.modules.reduce((s,m) => s + m.topics.length, 0) + '</span></div>' +
    '<div class="sidebar-stat"><span class="sidebar-stat-label">Duration</span><span class="sidebar-stat-value">' + course.duration + '</span></div>' +
    '<div class="sidebar-stat"><span class="sidebar-stat-label">Level</span><span class="sidebar-stat-value">' + course.level + '</span></div>' +
    '<div class="sidebar-stat"><span class="sidebar-stat-label">Certificate</span><span class="sidebar-stat-value">Free</span></div>' +
    '<a href="#" id="startLearningBtn" class="sidebar-btn" style="text-decoration:none;">Start Learning</a>' +
    '<button class="sidebar-btn outline" id="resetBtn">Reset Progress</button>';

  document.getElementById('resetBtn').addEventListener('click', function() {
    if (confirm('Reset all progress for this course?')) {
      progress = {};
      saveProgress(progress);
      renderModules();
      updateProgress();
    }
  });

  // Count totals
  function countTopics() {
    let total = 0, done = 0, timeLeft = 0;
    course.modules.forEach((mod, mi) => {
      mod.topics.forEach((topic, ti) => {
        total++;
        const key = mi + '_' + ti;
        if (progress[key]) done++;
        else timeLeft += (topic.minutes || 15);
      });
    });
    return { total, done, timeLeft };
  }

  function getFirstUnfinishedLesson() {
    for (let mi = 0; mi < course.modules.length; mi++) {
      for (let ti = 0; ti < course.modules[mi].topics.length; ti++) {
        if (!progress[mi + '_' + ti]) return `lesson.html?course=${courseId}&module=${mi}&topic=${ti}`;
      }
    }
    return `lesson.html?course=${courseId}&module=0&topic=0`;
  }

  function updateProgress() {
    const { total, done, timeLeft } = countTopics();
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    document.getElementById('progressPercent').textContent = pct + '%';
    document.getElementById('progressBar').style.width = pct + '%';
    document.getElementById('completedCount').textContent = done;
    document.getElementById('totalCount').textContent = total;
    const hrs = Math.round(timeLeft / 60);
    document.getElementById('timeRemaining').textContent = hrs > 0 ? hrs + ' hrs' : (timeLeft + ' min');

    const startBtn = document.getElementById('startLearningBtn');
    if (startBtn) {
        startBtn.href = getFirstUnfinishedLesson();
        startBtn.textContent = (done > 0 && done < total) ? 'Continue Learning' : (done === total ? 'Review Course' : 'Start Learning');
    }

    // Update module mini progress bars & numbers
    course.modules.forEach((mod, mi) => {
      let modTotal = mod.topics.length, modDone = 0;
      mod.topics.forEach((t, ti) => { if (progress[mi + '_' + ti]) modDone++; });
      const bar = document.getElementById('mod-prog-' + mi);
      const num = document.getElementById('mod-num-' + mi);
      if (bar) bar.style.width = (modTotal > 0 ? Math.round((modDone/modTotal)*100) : 0) + '%';
      if (num && modDone === modTotal && modTotal > 0) num.classList.add('completed');
      else if (num) num.classList.remove('completed');
    });
  }

  function toggleTopic(mi, ti) {
    const key = mi + '_' + ti;
    progress[key] = !progress[key];
    if (!progress[key]) delete progress[key];
    saveProgress(progress);

    const cb = document.getElementById('cb-' + mi + '-' + ti);
    const row = document.getElementById('topic-' + mi + '-' + ti);
    if (cb) cb.classList.toggle('checked', !!progress[key]);
    if (row) row.classList.toggle('completed', !!progress[key]);
    updateProgress();
  }

  function renderModules() {
    const container = document.getElementById('modulesContainer');
    container.innerHTML = '';
    course.modules.forEach((mod, mi) => {
      const modEl = document.createElement('div');
      modEl.className = 'module';
      if (mi === 0) modEl.classList.add('open');

      let topicsHtml = '';
      mod.topics.forEach((topic, ti) => {
        const key = mi + '_' + ti;
        const done = !!progress[key];
        topicsHtml +=
          '<div class="topic' + (done ? ' completed' : '') + '" id="topic-' + mi + '-' + ti + '">' +
            '<div class="topic-checkbox' + (done ? ' checked' : '') + '" id="cb-' + mi + '-' + ti + '" title="Read lesson and pass assignment to complete">' +
              '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>' +
            '</div>' +
            '<a href="lesson.html?course=' + courseId + '&module=' + mi + '&topic=' + ti + '" class="topic-text" style="color:inherit;text-decoration:none;"><div class="topic-title" style="cursor:pointer;" onmouseover="this.style.color=\'var(--primary)\'" onmouseout="this.style.color=\'var(--dark)\'">' + topic.title + ' <span style="font-size:0.75rem; color:var(--primary); padding-left:0.5rem; opacity:0.8;">(Read Lesson)</span></div><div class="topic-desc">' + (topic.desc || '') + '</div></a>' +
            '<div class="topic-duration">' + (topic.minutes || 15) + ' min</div>' +
          '</div>';
      });

      modEl.innerHTML =
        '<div class="module-header" onclick="this.parentElement.classList.toggle(\'open\')">' +
          '<div class="module-number" id="mod-num-' + mi + '">' + (mi + 1) + '</div>' +
          '<div class="module-header-text"><div class="module-name">' + mod.name + '</div><div class="module-info">' + mod.topics.length + ' topics &bull; ' + mod.topics.reduce((s,t) => s + (t.minutes||15), 0) + ' min</div></div>' +
          '<div class="module-progress-mini"><div class="module-progress-mini-fill" id="mod-prog-' + mi + '" style="width:0%"></div></div>' +
          '<svg class="module-chevron" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>' +
        '</div>' +
        '<div class="module-body"><div class="module-content">' + topicsHtml + '</div></div>';

      container.appendChild(modEl);
    });
  }

  window.__toggleTopic = toggleTopic;
  renderModules();
  updateProgress();

  // Subtitle
  const { total } = countTopics();
  document.getElementById('modulesSubtitle').textContent = course.modules.length + ' modules &bull; ' + total + ' topics to master this course';
})();
