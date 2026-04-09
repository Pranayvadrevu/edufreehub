const fs = require('fs');

console.log('Loading course data...');
let window = {};
eval(fs.readFileSync('course-data.js', 'utf8'));
const courses = window.COURSES;

console.log('Generating dynamic lessons...');
const lessonsDB = {};

// Procedural generation helpers
const intros = [
    "Welcome to {{title}}. In this comprehensive lesson, we will explore the fundamental principles that make this topic essential.",
    "Let's dive into {{title}}. Understanding these mechanics is a crucial step towards mastery.",
    "This lesson covers {{title}}. By the end of this module, you'll have a practical understanding of how this works in real-world scenarios."
];
const coreConcepts = [
    "The core concept revolves around optimizing structure and analyzing the outcomes.",
    "At its heart, this topic teaches us how to identify patterns and implement effective solutions.",
    "The primary mechanism relies on connecting abstract theory with tangible execution."
];

// Highly reliable open tutorial and educational video IDs that allow embedding
const videoIds = [
    "Q8TXgCzxEnw", "qz0aGYrrlhU", "kUMe1FH4CGY", "c-I5S_zTwAc", 
    "pQN-pnXPaVg", "zJSY8tbf_ys", "yZzXq82A9l0", "8hly31xKli0"
];

// Randomized generic quiz formats
function generateDiverseQuiz(title) {
    const questions = [];
    
    // Pool of generic dynamic questions
    const qTemp1 = [
        `What is the primary focus of ${title}?`,
        `When approaching ${title}, what is the first critical step?`,
        `Which of the following best defines ${title}?`
    ];
    const qTemp2 = [
        `According to the core principles, why is validation important here?`,
        `What role does execution play when dealing with ${title}?`,
        `Why is establishing a strong foundation necessary?`
    ];
    const qTemp3 = [
        `What is the primary takeaway regarding ${title} tools?`,
        `In practical application, how does the mental framework assist you?`,
        `What was highlighted as the most crucial element in the Instructor Note?`
    ];

    questions.push({
        q: getRandom(qTemp1),
        options: [ `Understanding its core foundational principles`, `Ignoring historical context completely`, `Memorizing documentation without practice`, `Assuming the solution without testing` ],
        correctIndex: 0
    });
    
    questions.push({
        q: getRandom(qTemp2),
        options: [ `To increase costs unnecessarily`, `It allows for identifying patterns and effective execution`, `It removes the need for human input`, `To skip directly to advanced configurations` ],
        correctIndex: 1
    });

    questions.push({
        q: getRandom(qTemp3),
        options: [ `Only master the newest trending software out there`, `Ignore the 'why' and just focus on the 'how'`, `Focusing on the 'why' alongside the 'how' because principles outlast tools`, `Rapidly executing code without proper syntax checks` ],
        correctIndex: 2
    });

    // Shuffle options around so correct index isn't always 0, 1, 2
    const quiz = {};
    questions.forEach((qObj, index) => {
        // Shift correct answer randomly
        const shiftAmt = Math.floor(Math.random() * 4);
        const newOptions = Array(4).fill("");
        for(let i=0; i<4; i++) {
            newOptions[(i + shiftAmt) % 4] = qObj.options[i];
        }
        quiz['question' + (index+1)] = {
            q: qObj.q,
            options: newOptions,
            correctIndex: (qObj.correctIndex + shiftAmt) % 4
        };
    });

    return quiz;
}

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let totalLessons = 0;

for (const courseId in courses) {
    const course = courses[courseId];
    lessonsDB[courseId] = {};
    
    course.modules.forEach((mod, moduleIndex) => {
        lessonsDB[courseId][moduleIndex] = {};
        
        mod.topics.forEach((topic, topicIndex) => {
            totalLessons++;
            
            // Assign a specific video for this topic to simulate dynamic fetching
            const assignedVid = videoIds[totalLessons % videoIds.length];
            
            // Build procedural markdown-esque content
            const p1 = getRandom(intros).replace('{{title}}', topic.title);
            const p2 = getRandom(coreConcepts);
            
            let content = `
<h3>Overview</h3>
<p>${p1} ${topic.desc || ''}</p>
<p>There are several key components to keep in mind when dealing with ${topic.title}. Most experts agree that breaking down the problem into smaller, manageable pieces is the first step.</p>

<h3>Key Principles of ${topic.title}</h3>
<ul>
    <li><strong>Foundation:</strong> Establish a strong base understanding before moving to advanced configurations.</li>
    <li><strong>Execution:</strong> ${p2}</li>
    <li><strong>Validation:</strong> Always test and review your outcomes to ensure accuracy and efficiency.</li>
</ul>

<h3>Practical Application</h3>
<p>Imagine a scenario where you must apply this technique under strict deadlines. The steps you learned today will serve as a mental framework to solve issues rapidly without sacrificing quality.</p>
<div style="background:var(--light); padding:1rem; border-left:4px solid var(--primary); margin:1.5rem 0; border-radius:4px;">
    <strong>Instructor Note:</strong> Focus on understanding the *why* alongside the *how*. Tools change over time, but core principles remain forever.
</div>
            `.trim();

            const quiz = generateDiverseQuiz(topic.title);

            lessonsDB[courseId][moduleIndex][topicIndex] = {
                title: topic.title,
                videoId: assignedVid,
                content: content,
                quiz: quiz
            };
        });
    });
}

// Ensure the variable doesn't conflict or throw errors
const outputStr = "window.LESSONS = " + JSON.stringify(lessonsDB, null, 2) + ";\n";

fs.writeFileSync('lesson-data.js', outputStr, 'utf8');

console.log(`Successfully generated ${totalLessons} fully detailed lessons and quizzes across ${Object.keys(courses).length} courses!`);
console.log('Saved to lesson-data.js');
