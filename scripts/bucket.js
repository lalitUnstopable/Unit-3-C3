// On clicking remove button the item should be removed from DOM as well as localstorage.
var data =JSON.parse(localStorage.getItem("cofee"))||[]

function datac(data){
    document.querySelector("#bucket").innerHTML=null;

    var sum=0;

    data.map(function (el,index){
        let div=document.createElement("div")
        let name=-document.createElement("p")
       let price=document.createElement("p")
       let image=document.createElement("img")
       let but=document.createElement("button")
       but.innerText="remove"
       but.addEventListener("click",function(){
           removep(el,index)
       })
       name.innerText=el.name;
       price.innerText=el.price;
       sum=sum +eval(el.price)
       image.src=el.image
       div.append(image,name,price,but)
       document.querySelector("#bucket").append(div)
       document.querySelector("#total_amount").innerText=sum
    })
}

datac(data)
function removep(el,index){
    var data=JSON.parse(localStorage.getItem("cofee"))
    data.splice(index,1)
    localStorage.setItem("cofee",JSON.stringify(data))
    window.location.reload()
}