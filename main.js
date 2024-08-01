document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('.footer h3');
    const submenus = document.querySelectorAll('.footer ul');

    function showAllSubmenus() {
        submenus.forEach(submenu => submenu.style.display = 'block');
    }

    function hideAllSubmenus() {
        submenus.forEach(submenu => submenu.style.display = 'none');
    }

    function enableClick() {
        headings.forEach(heading => {
            heading.addEventListener('click', toggleSubmenu);
        });
    }

    function disableClick() {
        headings.forEach(heading => {
            heading.removeEventListener('click', toggleSubmenu);
        });
    }

    function toggleSubmenu() {
        const ul = this.nextElementSibling;
        ul.style.display = ul.style.display === 'block' ? 'none' : 'block';
    }

    function checkScreenSize() {
        if (window.innerWidth > 768) {
            showAllSubmenus();
            disableClick();
        } else {
            hideAllSubmenus();
            enableClick();
        }
    }

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();  // Initial check
});