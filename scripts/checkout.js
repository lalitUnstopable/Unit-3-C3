document.querySelector("form").addEventListener("submit", sendm)
function sendm(){
    event.preventDefault();
    function t(){
   setTimeout(function (){
      alert("Your order is accepted")
    },0)
 setTimeout(function (){
        alert("Your order is being Packed")
      },3000)
  setTimeout(function (){
        alert("Your order is in transit")
      },8000)
  setTimeout(function (){
        alert("Your order is out for delivery")
      },10000)
      setTimeout(function (){
        alert("Order delivered")
      },12000)
    }
    
t();

}