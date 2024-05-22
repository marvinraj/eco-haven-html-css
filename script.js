let navbar = document.querySelector(".navbar");

function test(){
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    navbar.classList.remove("active");
};