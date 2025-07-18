export const template = `
  <style>
  :host{
      height: fit-content;
      width: fit-content;
      display:block;
      }
  [data-role="container"]{
    position: relative;
  }
  [data-role="code"]{
    border-radius: 10px;
    box-sizing: border-box;
    padding:10px;
    field-sizing: content;
    height: fit-content;
    resize: none;
  }
  [data-role="copy"]{
    cursor:pointer;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.4);
    border: 1px solid;
    border-radius: 5px;
    box-sizing: border-box;
    right: 15px;
    top: 15px;
  }
  [data-role="modal"]{
    display: none;
    position: absolute;
    background-color:rgba(255, 255, 255, 0.6);
    right: 50px;
    top: 15px;
  }
</style>
<div data-role="container">
  <textarea data-role="code"></textarea>
  <button data-role="copy" aria-label="Copie">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M10 1H3a2 2 0 0 0-2 2v9h1V3a1 1 0 0 1 1-1h7V1z"/><path d="M5 5h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/></svg>
  </button>
  <div data-role="modal">Copié</div>
</div>
`;
