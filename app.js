const btn = document.querySelector("#toggleList");

const lista = document.querySelector(".list");


btn.addEventListener("click", () => {


    //  console.log(lista.style.display);
    if (lista.style.display !== 'none') {
        lista.style.display = 'none';
        btn.textContent = "Show list";

    } else {
        lista.style.display = 'block';
        btn.textContent = "Hide list";
    }

});

const listTitle = document.querySelector(".description");
const textbox = document.querySelector("[type=text]");
const btnChangeDescription = document.querySelector(".description:nth-child(3)");

btnChangeDescription.addEventListener("click", () => {

    if (textbox.value !== "") {
        listTitle.textContent = textbox.value;
    }

});

const textbox2 = document.querySelector(".addItemInput");
const btnadditem = document.querySelector(".addItemButton");






