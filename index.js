const ifr = document.querySelector(".adfr");
const sub = document.querySelector("#sub")
sub.addEventListener("click",() =>{
    const data = JSON.stringify({
    title: document.querySelector("#titlefield").value,
    desc: document.querySelector("#descfield").value,
    img_url: document.querySelector("#urlfield").value,
    logo_url: document.querySelector("#logofield").value
});
    ifr.contentWindow.postMessage(data, "*");
});
