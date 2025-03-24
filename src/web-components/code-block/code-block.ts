export default class CodeBlock extends HTMLElement {
  constructor() {
    // Toujours appeler "super" d'abord dans le constructeur
    super();

    // Ecrire la fonctionnalité de l'élément ici
    // Création d'une racine fantôme
    const shadow = this.attachShadow({ mode: "open" });

    // Création des spans
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");
    wrapper.innerHTML = "foo";
    const icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", "0");
    const info = document.createElement("span");
    info.setAttribute("class", "info");

    // Prendre le contenu de l'attribut et le mettre dans le span d'info
    const text = this.getAttribute("text");
    info.textContent = text;

    // Création du CSS à appliquer au dom fantôme
    const style = document.createElement("style");

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}
window.customElements.define("code-block", CodeBlock);
