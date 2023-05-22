const tela1= document.querySelector(".tela1")
const tela2= document.querySelector(".tela2")

function sortear (){
    console.log("teste")
 
    tela1.classList.add("hide")
    
    tela2.classList.remove("hide")
}

function retornar (){
   
    tela2.classList.add("hide")
    
    tela1.classList.remove("hide")
}
