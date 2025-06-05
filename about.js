function showContent(id) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));
    
    const activeContent = document.getElementById(id);
    if (activeContent) {
        activeContent.classList.add('active');
    }
}

// Show default content (name) when page loads
window.addEventListener('load', () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection && aboutSection.style.display === 'block') {
        showContent('name');
    }
});
