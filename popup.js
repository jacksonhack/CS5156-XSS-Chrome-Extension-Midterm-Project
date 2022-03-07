const button1 = document.getElementById("button1");
const buttonOptions = document.getElementById("buttonDiv");
const selectedClassName = "current"

button1.addEventListener("click", () => {
    button1.classList.toggle(selectedClassName);
    buttonOptions.classList.toggle(selectedClassName);
    alert("You clicked the button!");
});