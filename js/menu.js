document.addEventListener('DOMContentLoaded', (event) => {
    const refs = {
        openMenuBtn: document.querySelector("[data-menu-open]"),
        closeMenuBtn: document.querySelector("[data-menu-close]"),
        menu: document.querySelector("[data-menu]"),
    };

    if (refs.openMenuBtn && refs.closeMenuBtn && refs.menu) {
        refs.openMenuBtn.addEventListener("click", toggleMenu);
        refs.closeMenuBtn.addEventListener("click", toggleMenu);

        function toggleMenu() {
            refs.menu.classList.toggle("is-hidden");
            document.body.classList.toggle("no-scroll");
        }
    } else {
        console.error("One or more elements not found");
    }
});