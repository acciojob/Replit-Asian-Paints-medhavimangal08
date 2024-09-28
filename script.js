//your JS code here. If required.
let container=document.querySelector(".grid-container")
let submit=document.querySelector("#change_button")
let reset=document.querySelector("#Reset")
for(let i=0;i<9;i++){
	let newdiv=document.createElement("div")
	newdiv.innerText=i+1;
	newdiv.setAttribute("class", "grid-item-" + (i+1));
	newdiv.className="same";
	container.append(newdiv);
}
let items=document.querySelectorAll(".same")
let input=document.querySelector("#block_id")
let color=document.querySelector("#colour_id")
submit.addEventListener("click",changecolor)
function changecolor() {
	let gridnumber=input.value;
	items[gridnumber-1].style.backgroundColor=color.value		
}
reset.addEventListener("click", resetColor);
function resetColor() {
    items.forEach(item => {
        item.style.backgroundColor = "transparent";
    });
}


