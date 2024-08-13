window.addEventListener('load', function() {
    const skills = document.querySelectorAll('.progress');

    skills.forEach(skill => {
        skill.style.width = skill.classList.contains('html') ? '90%' :
                            skill.classList.contains('css') ? '90%' :
                            skill.classList.contains('js') ? '80%' :
                            skill.classList.contains('python') ? '80%' :
                            skill.classList.contains('c') ? '80%' :
                            '0%';
    });
});
