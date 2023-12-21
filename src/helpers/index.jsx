export const handlerOnClickHamburger = () => {
    const header = document.querySelector(".header");
    header.classList.add("mobile-menu");
}

export const handlerOnClickCloseMenu = () => {
    const header = document.querySelector(".header");
    header.classList.remove("mobile-menu");
}

export const scrollToSection = (event, id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
        });
    }
    handlerOnClickCloseMenu();
};