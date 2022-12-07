//mobile menu
let mobileMenuToggle = document.querySelector("#mobile-nav-toggle > i");
mobileMenuToggle.addEventListener("click", function ()
{
    window.scroll(0, 0);
    document.getElementById("mobile-nav").classList.toggle("hidden");
    document.getElementById("mobile-nav-overlay").classList.toggle("hidden");
    if (mobileMenuToggle.classList.contains("fa-bars"))
    {
        document.body.style.overflowY = "hidden";
        mobileMenuToggle.classList.remove("fa-bars");
        mobileMenuToggle.classList.add("fa-times");
    }
    else
    {
        document.body.style.overflowY = "auto";
        mobileMenuToggle.classList.remove("fa-times");
        mobileMenuToggle.classList.add("fa-bars");
    }
});

//in mobile view, add a background to the header when the user scrolls down past the header
let header = document.getElementById("header");
let headerHeight = parseInt(window.getComputedStyle(header).height);
window.addEventListener("scroll", function ()
{
    if (window.innerWidth <= 934 && window.scrollY >= headerHeight)
    {
        document.getElementById("header-black-trans").classList.remove("hidden");
    }
    else
    {
        document.getElementById("header-black-trans").classList.add("hidden");
    }
});


//copyright year
document.getElementById("thisYear").innerText = new Date().getFullYear();