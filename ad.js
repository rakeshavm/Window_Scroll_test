var coor = {
    x: 0,
    y: 0
}
window.addEventListener("mousemove", (e)=>{
    coor.x = e.pageX;
    coor.y = e.pageY;
})
setInterval( ()=> {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(coor)  
        }).then(res => {
        console.log(coor, res);
});
}, 250)
window.addEventListener("message", (e) => {
    let data = (JSON.parse(e.data));
    titlediv = document.querySelector(".title")
    descdiv = document.querySelector(".desc")
    imgdiv = document.querySelector(".window_effect")
    if(data.title != "")
        titlediv.innerHTML = data.title;
    if(data.desc != "")
        descdiv.innerHTML = data.desc;
    if(data.img_url != "")
    imgdiv.style.backgroundImage = "url('" + data.img_url + "')";
})