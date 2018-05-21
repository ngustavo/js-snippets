const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(e => {
        if(e.offsetTop <= window.scrollY){
            document.querySelector(".active").classList.toggle("active");
            document.querySelector("a[href*="+e.id+"]").classList.toggle("active");
        }
    });
});
