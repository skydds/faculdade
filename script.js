function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
        activeSection.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
