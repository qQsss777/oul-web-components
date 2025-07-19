const cb = document.getElementsByTagName("code-block")[0];

setInterval(() => {
  const data = cb.getAttribute("code");
  const newData = data + " " + Date.now();
  cb.setAttribute("code", newData);
  cb.setAttribute("custom-style", "textarea{color:green;}");
}, 5000);
