document.addEventListener("DOMContentLoaded", function() {
    var imageElement = document.createElement("img");
    var imageSarah = document.createElement("div");
    imageSarah.className = "image";
    imageSarah.style.position = "fixed";
    imageSarah.style.right = "0px";
    imageSarah.style.bottom = "0px";
    imageSarah.style.zIndex = "-1";
    var css = `
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px rgb(106, 96, 255);
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background: rgb(0, 255, 98);
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #00ffbc;
        }
    `;
    var style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
    var mediaQuery = window.matchMedia("(max-width: 768px)");
    if (mediaQuery.matches) {
    imageSarah.style.display = "none";
    }
    
});
