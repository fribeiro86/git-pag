var x = "red";

function atual() {

    if (x === "red") {
        document.getElementById("current").style.backgroundColor = x;
        document.getElementById("current").style.color = "white";
        x = "white";
    } else {
        document.getElementById("current").style.backgroundColor = x;
        document.getElementById("current").style.color = "black";
        x = "red";
    }

    var id = setTimeout(() => {
        atual();
    }, 600);
}

window.addEventListener("load", atual);