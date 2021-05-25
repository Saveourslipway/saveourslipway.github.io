class NavBar {

    _elem;

    constructor() {
        this._elem = document.getElementById("navbar");
        console.log(this._elem);
        this._elem.onmouseenter = this.highlight;
        this._elem.onmouseleave = this.removeHighlight;
    }

    highlight() {
        if (!this.classList.contains("active")) this.classList.add("active");
    }
    removeHighlight() {
        this.classList.remove("active");
    }
}

let navbar;
window.onload = function() {
    console.log("Trigger");
    navbar = new NavBar();
}