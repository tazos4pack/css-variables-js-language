//This should go to i18n.js file but stays here for now to run it on codepen

var translate = {
    en: {
        m1: "Update CSS Variables with ",
        m2: "Blur: ",
        m3: "Border Radius:",
        m4: "Base Color",
        m5: "Language: ",
        m6: "Being first at any cost is not always the point.",
    },
    pl: {
        m1: "Zmień CSS za pomocą ",
        m2: "Rozmycie: ",
        m3: "Krawędź:",
        m4: "Podstawowy Kolor",
        m5: "Język: ",
        m6: "Bycie pierwszym za wszelką cenę, nie zawsze jest najważniejsze.",
    }
};

//End of i18n.js file

class translator {
    constructor() {
        this.changeLanguage();
    }

    changeLanguage() {
        var i18n = translate;
        $(".language select").change(function () {
            var lang = $(this).val();
            $("#atr1").text(i18n[lang].m1, 500);
            $("#atr2").text(i18n[lang].m2, 500);
            $("#atr3").text(i18n[lang].m3, 500);
            $("#atr4").text(i18n[lang].m4, 500);
            $("#atr5").text(i18n[lang].m5, 500);
            $("#atr6").text(i18n[lang].m6, 500);
        });
    }
}

new translator()

const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
