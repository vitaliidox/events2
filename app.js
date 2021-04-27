const p = document.querySelector("p")
const text = document.querySelector("p").textContent;
document.querySelector("p").innerHTML = ""
text.split("").forEach(e=> p.innerHTML+=`<span>${e}</span>`);

document.querySelectorAll("span").forEach(e=>e.addEventListener("click", ()=>{
        e.style.color == "red"?  e.style.color = "black": e.style.color = "red"
}))
   let time;
 document.querySelectorAll("span").forEach(e=>e.addEventListener("mousedown", ()=>{
    time = window.setTimeout(()=>{
        alert('It`s working!')
    },3000)
}))
document.querySelectorAll("span").forEach(e=>e.addEventListener("mouseup", ()=>{
    window.clearTimeout(time)
}))


