
const buttonHeader = document.querySelector('[data-menuButton]');
buttonHeader.addEventListener('click', openMenuMobile);
let modalOpen = false;

function openMenuMobile(){
    isModalOpen();
}

function isModalOpen(){
    if(modalOpen === false){
        toHideAllContentAndFooter();
        toShowHeaderMobile();
        modalOpen = true;
    }else{
        toShowAllContentAndFooter();
        toHideHeaderMobile();
        modalOpen = false;
    }
}

function toHideAllContentAndFooter(){
    const allContent = document.querySelector('[data-mainContent]');
    const footer = document.querySelector('[data-footer]');

    allContent.setAttribute('style', 'display: none');
    footer.setAttribute('style', 'display: none');
}

function toShowHeaderMobile(){
        const menuMobile = document.querySelector('[data-headerMobile]');
        menuMobile.setAttribute('style', 'display: initial');
    
        toChangeStyleSourceButtonClose();
}

function toChangeStyleSourceButtonClose(){
    const buttonMenu = document.querySelector('[data-menuButton]');

    buttonMenu.setAttribute('style', 'transition: 3s');
    buttonMenu.src = "./src/assets/close.svg";
}

function toShowAllContentAndFooter(){
    const allContent = document.querySelector('[data-mainContent]');
    const footer = document.querySelector('[data-footer]');

    allContent.setAttribute('style', 'display: initial');
    allContent.setAttribute('style', 'padding: 0 3%');
    footer.setAttribute('style', 'display: flex');
}

function toHideHeaderMobile(){
    const menuMobile = document.querySelector('[data-headerMobile]');
    menuMobile.setAttribute('style', 'display: none');

    toChangeStyleSourceButtonNormal();
}

function toChangeStyleSourceButtonNormal(){
    const buttonMenu = document.querySelector('[data-menuButton]');

    buttonMenu.setAttribute('style', 'transition: 3s');
    buttonMenu.src = "./src/assets/menu.svg";
}

