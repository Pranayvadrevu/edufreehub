const fs = require('fs');
// Map course titles to their IDs in course-data.js
const courseIdMap = {
  "Full-Stack Web Development Bootcamp": "fullstack-web-dev",
  "Python Programming Masterclass": "python-masterclass",
  "JavaScript: The Complete Guide": "javascript-complete",
  "Data Structures &amp; Algorithms": "dsa",
  "React &amp; Next.js Complete Course": "react-nextjs",
  "Git &amp; GitHub for Developers": "git-github",
  "Introduction to Machine Learning": "intro-ml",
  "Python for Data Analysis": "python-data-analysis",
  "Deep Learning Specialization": "deep-learning",
  "Statistics &amp; Probability Foundations": "statistics-probability",
  "SQL for Data Science": "sql-data-science",
  "Data Visualization Mastery": "data-viz",
  "UI/UX Design Fundamentals": "uiux-design",
  "Graphic Design Masterclass": "graphic-design",
  "Motion Graphics &amp; Animation": "motion-graphics",
  "Web Design with CSS &amp; HTML": "web-design-css",
  "Digital Photography Essentials": "photography",
  "Illustration &amp; Digital Art": "illustration",
  "Digital Marketing Complete Guide": "digital-marketing",
  "Startup Launch &amp; Growth": "startup-launch",
  "Financial Literacy &amp; Investing": "financial-literacy",
  "Project Management Essentials": "project-management",
  "Business Strategy &amp; Analysis": "business-strategy",
  "Leadership &amp; Team Management": "leadership",
  "English for Global Communication": "english-global",
  "Spanish from Zero to Fluency": "spanish-fluency",
  "Mandarin Chinese Fundamentals": "mandarin-chinese",
  "French Conversation Mastery": "french-conversation",
  "Japanese Language &amp; Culture": "japanese-language",
  "Public Speaking &amp; Presentation": "public-speaking",
  "Calculus I &amp; II Complete Course": "calculus",
  "Introduction to Physics": "intro-physics",
  "Organic Chemistry Fundamentals": "organic-chemistry",
  "Biology: From Cells to Ecosystems": "biology",
  "Linear Algebra &amp; Applications": "linear-algebra",
  "World History: Civilizations": "world-history",
  "Productivity &amp; Time Management": "productivity",
  "Emotional Intelligence Mastery": "emotional-intelligence",
  "Mindfulness &amp; Meditation": "mindfulness",
  "Critical Thinking &amp; Problem Solving": "critical-thinking",
  "Goal Setting &amp; Achievement": "goal-setting",
  "Effective Communication Skills": "communication-skills"
};

const files = ['programming.html','data-science.html','design.html','business.html','language-learning.html','academic.html','personal-development.html'];

files.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');
  // Wrap each resource-card in an <a> link by finding the title and adding onclick
  for (const [title, id] of Object.entries(courseIdMap)) {
    // Add a clickable link to each card's title
    const titleTag = `<h3 class="resource-title">${title}</h3>`;
    const linkedTitle = `<h3 class="resource-title"><a href="course.html?id=${id}" style="color:inherit;text-decoration:none;">${title}</a></h3>`;
    html = html.replace(titleTag, linkedTitle);
  }
  // Also make the resource-card divs clickable by adding cursor and onclick
  html = html.replace(/<div class="resource-card">/g, '<div class="resource-card" style="cursor:pointer;" onclick="if(event.target.tagName!==\'A\')this.querySelector(\'.resource-title a\').click()">');
  
  fs.writeFileSync(file, html, 'utf8');
  console.log('Updated: ' + file);
});

console.log('All category pages updated with course links!');
