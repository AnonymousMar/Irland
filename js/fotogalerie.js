const transitions = {
    en: {
        btns: "Subscribe",
        menu: "Homepage",
    },
    de: {
        btns: "Abonnieren",
        menu: "Startseite",
    }
}

const languageSelectop = document.querySelector("select");
let par15 = document.getElementById("btn");
let par16 = document.getElementById("homepage");
languageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if (language == "en") {
        par15.innerText = transitions.en.btns;
        par16.innerText = transitions.en.menu;


    } else if (language == "de") {
        par15.innerText = transitions.de.btns;
        par16.innerText = transitions.de.menu;

    }
}