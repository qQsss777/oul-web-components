import { template } from "./code-block-template";

export default class CodeBlock extends HTMLElement {
  // liste des attributs à observer
  static get observedAttributes() {
    return ["code", "custom-style"];
  }

  defaultStyleText = "";

  constructor() {
    super();
    // Création d'une racine fantôme pour préserver notamment le style
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    //ajout de l'HTML
    const shadowRoot = this.shadowRoot as ShadowRoot;
    shadowRoot.innerHTML = template;

    // récupération des attributs nécessaires
    const code = this.getAttribute("code") ?? "";
    const name = this.getAttribute("name") ?? "";
    const customStyle = this.getAttribute("custom-style") ?? "";

    // Création du contenu de type textarea
    const textarea = shadowRoot.querySelector(
      '[data-role="code"]',
    ) as HTMLTextAreaElement;
    textarea.setAttribute("readonly", "true");
    textarea.setAttribute("name", name);
    textarea.value = code;

    // modal
    const modal = shadowRoot.querySelector(
      '[data-role="modal"]',
    ) as HTMLDivElement;

    // création du bouton
    const button = shadowRoot.querySelector(
      '[data-role="copy"]',
    ) as HTMLButtonElement;
    button.addEventListener("click", async () => {
      try {
        await window.navigator.clipboard.writeText(textarea.value);
        modal.style.display = "flex";
        setTimeout(() => {
          modal.style.display = "none";
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    });
    //ajout du style personnalisé au style par défaut
    const defaultStyle = shadowRoot.querySelector("style") as HTMLStyleElement;
    this.defaultStyleText = defaultStyle.textContent;
    defaultStyle.textContent += customStyle;
  }

  // met a jour le textarea ou le style css
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const shadowRoot = this.shadowRoot as ShadowRoot;
    if (shadowRoot)
      if (name === "code") {
        const textarea = shadowRoot.querySelector(
          '[data-role="code"]',
        ) as HTMLTextAreaElement;
        if (textarea) textarea.value = newValue;
      } else {
        const defaultStyle = shadowRoot.querySelector(
          "style",
        ) as HTMLStyleElement;
        if (defaultStyle)
          defaultStyle.textContent = this.defaultStyleText + newValue;
      }
  }
}
window.customElements.define("code-block", CodeBlock);
