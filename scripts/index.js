// Add the coffee to local storage with key "coffee"
const url="https://masai-mock-api.herokuapp.com/coffee/menu"
fetch(url).then(function(res){
    return res.json()
})
.then(function(data){
    menustore(data.menu.data)
    console.log(data.menu.data)
})

var cartlength=JSON.parse(localStorage.getItem("cofee"))

if(cartlength!=null){
    document.querySelector("#coffee_count").innerText=cartlength.length
}
else{
    document.querySelector("#coffee_count").innerText=0
}

function menustore(data){
    data.map(function(el){
        let div=document.createElement("div")
        let name=document.createElement("p")
        let price=document.createElement("p")
        let image=document.createElement("img")
        let but=document.createElement("button")
        but.innerText="Add to Bucket"
        but.addEventListener("click",function(){
            storep(el)
        })
        name.innerText=el.title;
        price.innerText=el.price;
        image.src=el.image;
        div.append(image,name,price,but)
        document.querySelector("#menu").append(div)
    })
}

let arr=JSON.parse(localStorage.getItem("cofee")) || []

function storep(el){
    arr.push(el)

    localStorage.setItem("cofee",JSON.stringify(arr))

    var cartlength=JSON.parse (localStorage.getItem("cofee"))

    document.querySelector("#coffee_count").innerText=cartlength.length
}
