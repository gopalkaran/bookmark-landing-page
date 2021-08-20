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


const tabs = document.querySelectorAll('[data-tab-target]')
console.log(tabs)
const tabContentImgList = document.querySelectorAll('[data-tab-content-img]')
const tabContentInfoList = document.querySelectorAll('[data-tab-content-info]')

tabs.forEach(tab => {
    tab.addEventListener('click', ()=>{
        const tabContentId = tab.dataset.tabTarget.split(" ");
        console.log(tabContentId)
        const tabContentImg = document.querySelector(tabContentId[0]);
        const tabContentInfo = document.querySelector(tabContentId[1]);
        tabContentImgList.forEach(img => {
            img.classList.remove('active');
        })
        tabContentInfoList.forEach(info => {
            info.classList.remove('active');
        })
        tabContentImg.classList.add('active');
        tabContentInfo.classList.add('active');


        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');
    })
})

