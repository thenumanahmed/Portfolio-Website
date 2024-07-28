const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 120);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    navlist.classList.toggle('active');
    menu.classList.toggle('bx-x');
};

window.onscroll = ()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}