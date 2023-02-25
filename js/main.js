
if (localStorage.getItem("mode") == "dark") {
    document.documentElement.classList.add("dark");
    sun.classList.replace("opacity-0", "opacity-100");
} else {
    moon.classList.replace("opacity-0", "opacity-100");
}

let modeToggler = document.getElementById("darkmodeButton");

modeToggler.addEventListener("click", toggleMode);

function toggleMode() {
    
    let htmlClasses = document.documentElement.classList;

    if (htmlClasses.contains("dark")) {

        localStorage.setItem("mode", "light");
        htmlClasses.remove("dark");

        sun.classList.replace("opacity-100", "opacity-0");
        moon.classList.replace("opacity-0", "opacity-100");

    } else {

        localStorage.setItem("mode", "dark");
        htmlClasses.add("dark");

        sun.classList.replace("opacity-0", "opacity-100");
        moon.classList.replace("opacity-100", "opacity-0");

    }

}