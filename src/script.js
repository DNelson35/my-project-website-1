
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);
/*const h2 = document.createElement("h2");
h2.textContent = "this content added by JavaScript";

document.querySelector("body").appendChild(h2);*/