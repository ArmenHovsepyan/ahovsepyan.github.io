

let todos=[];
let karusel=[];
let t="shish.png"
fetch("/todos").then((resp)=>resp.json()).then((resp)=>{
  todos=resp;
    for(let i=0;i<todos.length;++i)
  {
   const  main=document.getElementById("mydiv");
   const  nkar=document.getElementById("nkar");
   const vernagir = document.getElementById("tox");
   const nkaragrutyun = document.getElementById("nkaragrutyun");
   const arjeq = document.getElementById("arjeq");


    const somdiv = document.createElement("div"); 
    main.appendChild(somdiv)
    somdiv.id="somdib";
     
     const h=document.createElement("h1");
     h.innerHTML=todos[i].name
   
   const img= document.createElement("img"); 
   img.src=todos[i].nkar;
   img.id="img";
   somdiv.appendChild(img);
   somdiv.appendChild(h);
   const nkara = document.createElement("p");
   nkara.innerHTML=todos[i].nkaragrutyun
   somdiv.appendChild(nkara);
   const gin = document.createElement("p");
   gin.id="gin";
   gin.innerHTML=todos[i].arjeq+"֏"

   somdiv.appendChild(gin);
  }})

  fetch("/karusel").then((resp)=>resp.json()).then((resp)=>{
    karusel=resp;
      for(let i=0;i<karusel.length;++i)
    {
     const  k1=document.getElementById("k1");
     let i =createElement("img");
     i.id="mypictures"
     i.src=karusel[i].img
  
    // somdiv.appendChild(gin);
    }})
const divkarusel=document.getElementById("divkarusel")
let b="shish.png";
function dowload(input){
  let file=input.files[0];  
    let r=new FileReader();
   r.readAsDataURL(file)

   r.onload =function(){
   let img = document.createElement('img')
        div.appendChild(img)
        
    img.src=r.result
b=r.result
   
   }}
   function dowload2(input){
    let file=input.files[0];  
      let r=new FileReader();
     r.readAsDataURL(file)
  
     r.onload =function(){
     let img = document.createElement('img')
     divkarusel.appendChild(img)
          
      img.src=r.result
     t=r.result;
      
      }
     
     }
function qq()
{
  const  porc=document.getElementById("porcnakan");
  karusel.push({name:porc.value,img:t})
      
  fetch("/karusel",
  {method:"post",
 headers:{"content-type":"application/json"},
 body:JSON.stringify(karusel)})
}

  
 function add()
 {  const  nkar=document.getElementById("mydiv");
 const vernagir = document.getElementById("tox");
 const nkaragrutyun = document.getElementById("nkaragrutyun");
const arjeq = document.getElementById("arjeq");

  todos.push({name:vernagir.value,nkaragrutyun:nkaragrutyun.value,arjeq:arjeq.value,nkar:b})

    fetch("/todos",
     
    {method:"post",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(todos)})
    }
    

 


  