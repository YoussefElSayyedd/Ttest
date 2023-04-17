let feature = document.querySelectorAll(".form i");

let show = document.querySelectorAll(".show");

let none = document.querySelectorAll(".none");

let input = document.getElementById("input")

input.onclick = function () {
    show.forEach(function (con) {
        con.classList.toggle("none");
    });
}
