
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
        isModeBlackOrWhite();
        modalOpen = false;
    }
}

function isModeBlackOrWhite(){
    if(modeBlackActive){
        activeModeBlack();
    }else{
        activeModeWhite();
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

    buttonMenu.src = "./src/assets/menu.svg";
}

const modePage1 = document.querySelector('[data-mode1]');
const modePage2 = document.querySelector('[data-mode2]');
modePage1.addEventListener('click', isModeBlackActive);
modePage2.addEventListener('click', isModeBlackActive);
let modeBlackActive = false;

function isModeBlackActive(){
    if(modeBlackActive){
        activeModeWhite();
        modeBlackActive = false;
    }else{
        activeModeBlack();
        modeBlackActive = true;
    }
}

function activeModeBlack(){
    const body = document.querySelector('body');
    const photoApresentation = document.querySelector('[data-photoApresentation]');
    body.setAttribute('style', 'background-color: var(--colorBackgroundBlackModeView)');
    photoApresentation.src = "./src/assets/image.svg";

    toChangeColorToWhiteHeaderAndMainContent(); 
}

function toChangeColorToWhiteHeaderAndMainContent(){
    const titleHeaderMobile = document.querySelector('[data-titleHeader1]');
    const titleHeaderDesktop = document.querySelector('[data-titleHeader2]');
    const mainContent = document.querySelector('[data-mainContent]');
    
    mainContent.setAttribute('style', 'color: var(--colorBackgroundCardsTechnologies)');
    titleHeaderDesktop.setAttribute('style', 'color: var(--colorBackgroundCardsTechnologies)');
    titleHeaderMobile.setAttribute('style', 'color: var(--colorBackgroundCardsTechnologies)');

    toChangeColorBoxShadowModeBlack();
    toChangeStyleSourceModePageBlackButton();
}

function  toChangeColorBoxShadowModeBlack(){
    const photoApresentation = document.querySelector('[data-photoApresentation]');
    const technologiesCards = document.querySelectorAll('.technologies__cards');
    const projectCards = document.querySelectorAll('.projects__cards');

    photoApresentation.setAttribute('style', 'box-shadow: 0.2rem 0.2rem var(--colorBackgroundCardsTechnologies)');
    technologiesCards.forEach((item) => {
        item.setAttribute('style', 'box-shadow: 0.2rem 0.2rem var(--colorBackgroundCardsTechnologies)');
    });

    projectCards.forEach((item) => {
        item.setAttribute('style', 'box-shadow: 0.2rem 0.2rem var(--colorBackgroundCardsTechnologies)');
    });
}

function toChangeStyleSourceModePageBlackButton(){
    const modePage1 = document.querySelector('[data-mode1]');
    const modePage2 = document.querySelector('[data-mode2]');

    modePage1.src = "./src/assets/brightness-high.svg";
    modePage2.src = "./src/assets/brightness-high.svg";
}

function activeModeWhite(){
    const body = document.querySelector('body');
    const photoApresentation = document.querySelector('[data-photoApresentation]');
    body.setAttribute('style', 'background-color: var(--colorBackgroundWhiteModeView)');
    photoApresentation.src = "./src/assets/blogging 1.svg";

    toChangeColorToBlackHeaderAndMainContent(); 
}

function toChangeColorToBlackHeaderAndMainContent(){
    const titleHeaderMobile = document.querySelector('[data-titleHeader1]');
    const titleHeaderDesktop = document.querySelector('[data-titleHeader2]');
    const mainContent = document.querySelector('[data-mainContent]');
    
    mainContent.setAttribute('style', 'color: var(--colorBackgroundBlackModeView)');
    titleHeaderDesktop.setAttribute('style', 'color: var(--colorBackgroundBlackModeView)');
    titleHeaderMobile.setAttribute('style', 'color: var(--colorBackgroundBlackModeView)');

    toChangeColorBoxShadowModeWhite();
    toChangeStyleSourceModePageWhiteButton();
}

function  toChangeColorBoxShadowModeWhite(){
    const photoApresentation = document.querySelector('[data-photoApresentation]');
    const technologiesCards = document.querySelectorAll('.technologies__cards');
    const projectCards = document.querySelectorAll('.projects__cards');

    photoApresentation.setAttribute('style', 'box-shadow: 0.2rem 0.2rem var(--colorBackgroundBlackModeView)');
    technologiesCards.forEach((item) => {
        item.setAttribute('style', 'box-shadow: 0.2rem 0.2rem var(--colorBackgroundBlackModeView)');
    });

    projectCards.forEach((item) => {
        item.setAttribute('style', 'box-shadow: 0.2rem 0.2rem var(--colorBackgroundBlackModeView)');
    });
}

function toChangeStyleSourceModePageWhiteButton(){
    const modePage1 = document.querySelector('[data-mode1]');
    const modePage2 = document.querySelector('[data-mode2]');

    modePage1.src = "./src/assets/moon.svg";
    modePage2.src = "./src/assets/moon.svg";
}


const headerItensListDesktop = document.querySelectorAll('.header__itens--list__itens');
headerItensListDesktop.forEach((item) => {
    item.addEventListener('click', () => {
        if('Sobre' === item.innerHTML){
            window.scrollTo(0, 100);
        }else if('Contato' === item.innerHTML){
            window.scrollTo(0,800);
        }else if('Tecnologias' === item.innerHTML){
            window.scrollTo(0, 1150);
        }else if('Projetos' === item.innerHTML){
            window.scrollTo(0, 1700);
        }else if('Certificados' === item.innerHTML){
            window.scrollTo(0, 5000);
        }
    });
});

const headerItensListMobile = document.querySelectorAll('.header__mobile--item');
headerItensListMobile.forEach((item) => {
    item.addEventListener('click', () => {
        isModalOpen();
        if('Sobre' === item.innerHTML){
            window.scrollTo(0, 500);
        }else if('Contato' === item.innerHTML){
            window.scrollTo(0, 1200);
        }else if('Tecnologias' === item.innerHTML){
            window.scrollTo(0, 1750);
        }else if('Projetos' === item.innerHTML){
            window.scrollTo(0, 3000);
        }else if('Certificados' === item.innerHTML){
            window.scrollTo(0, 6000);
        }
    });
});