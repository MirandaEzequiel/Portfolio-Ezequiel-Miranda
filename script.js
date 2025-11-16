document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const texto = "Desarrollador en formación";
let i = 0;

function escribir() {
    if (i < texto.length) {
        document.getElementById("type").innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribir, 60);
    }
}

escribir();
