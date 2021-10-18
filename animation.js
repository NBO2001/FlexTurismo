
const addAnimation = () => {
    
    const windowHeigth = (window.scrollY) + ((window.innerHeight*3)/4);
    
    const elements = document.querySelectorAll('[data-animation]')

    elements.forEach(element => {
        
        if(windowHeigth > element.offsetTop){
            element.classList.add('start-animation');
        }else{
            element.classList.remove('start-animation');
        }
    });
}
addAnimation();
window.addEventListener('scroll', addAnimation)