const textbox=document.getElementById("text-box")
const ListContainer=document.getElementById("list-container")
const span=document.getElementById("span")
const remove=document.getElementById("btncheked")


function btnclik(){
    if(textbox.value===''){
        alert("you write somethin!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=textbox.value;
        ListContainer.appendChild(li);

        let span =document.createElement("span")
        span.innerHTML="X";
        li.appendChild(span)
        }
    textbox.value = "";     
    saveData();
}

ListContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("cheked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}

,false);

function saveData(){
    localStorage.setItem("data",ListContainer.innerHTML)
}

function showData(){
    ListContainer.innerHTML=localStorage.getItem("data");
    
}
showData();