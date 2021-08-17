const checkBox = document.querySelector('#nav-checkbox');
checkBox.addEventListener('click', () => {
    const navElement = checkBox.parentElement;
    navElement.classList.toggle('modal-container');
    
    const navChildren = navElement.children;
    const titleDiv = navChildren[0];
    const titleSVG = titleDiv.children;
    const titleG = titleSVG[0].children;
    const titlePath = titleG[0].children;
    titlePath[0].classList.toggle('modal');


    const menuAndClose = navChildren[2];
    const SVG = menuAndClose.children;
    // SVG[0].classList.toggle('modal');
    SVG[1].classList.toggle('modal');

})