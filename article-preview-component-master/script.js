

var hidden = document.querySelector(".hidden");
var click = document.querySelector(".share-icon");
var avatar = document.querySelector(".avatar");

click.addEventListener("click", function() { 
    if (hidden.style.display === "none") {
        hidden.style.display = "block";

        if (window.matchMedia("(max-width: 500px)").matches) {
            avatar.style.display = "none";
            click.style.display = "flex"
        }
    } else {
        hidden.style.display = "none";

        if (window.matchMedia("(max-width: 500px)").matches) {
            avatar.style.display = "flex"; 

        }
    }
});
