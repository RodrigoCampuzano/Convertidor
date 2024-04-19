import { createConverter } from "./dependencies.js";

const div = document.createElement("div")
div.setAttribute("id", "div")

const div2 = document.createElement("div")
div2.setAttribute("id", "div2")

const div3 = document.createElement("div")
div3.setAttribute("id", "div3")

const h1 = document.createElement("h1");
h1.textContent = "Notación infija a prefija";

const label = document.createElement("label");
label.setAttribute("for", "valor");
label.textContent = "Escriba la notacion infija";

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "valor");

const button = document.createElement("button");
button.setAttribute("id", "btn-convert");
button.textContent = "convertir";

const p = document.createElement("p");
p.setAttribute("id", "prefija");

const container = document.getElementById("container");

div.appendChild(h1)
container.appendChild(div)
div2.appendChild(label)
div2.appendChild(input)
container.appendChild(div2)
container.appendChild(button)
div3.appendChild(p)
container.appendChild(div3)

const convert = document.getElementById("btn-convert");
convert.addEventListener("click", () => {
    const input = document.getElementById("valor").value;
    const outputExpression = document.getElementById("prefija");
    const converter = createConverter(input);
    const result = converter.convertir();
    outputExpression.innerText = "Expresión prefija: " + result[1];
});
