// Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
document.body.setAttribute('data-theme', localStorage.getItem('theme') || 'light');

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Hover Effects for Project Cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});
// Animate progress bars on scroll
document.addEventListener('DOMContentLoaded', () => {
    const progressFill = document.querySelectorAll('.progress-fill');
    
    const animateProgress = () => {
        progressFill.forEach(bar => {
            const skillLevel = bar.parentElement.getAttribute('data-level');
            bar.style.width = skillLevel;
        });
    };

    // Trigger animation when section is in view
    window.addEventListener('scroll', () => {
        const languagesSection = document.getElementById('languages');
        const sectionTop = languagesSection.offsetTop;
        const sectionHeight = languagesSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > sectionTop + sectionHeight / 2) {
            animateProgress();
        }
    });
});