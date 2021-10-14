const activeItem = (burgMenu,item) => {
    item.classList.toggle("active")
    burgMenu.classList.toggle("active")
    animationLinks(item)
}

const animationLinks = (item) => {
    ([...item.children]).forEach((element, index) => {
        
        element.style.animation
        ? element.style.animation = ""
        : element.style.animation = `animationFade 0.5s ease forwards ${(index / 7) + 0.3}s`
    });
   
   
   
}
const addEvent = (classItem, navItem) => {

    const burgMenu = document.querySelector(classItem)
    const nav = document.querySelector(navItem)

    burgMenu.addEventListener("click", () => activeItem(burgMenu,nav))
} 
addEvent('.burg', '.nav');