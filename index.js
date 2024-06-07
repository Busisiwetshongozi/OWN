 const Quotes= ["To still the mind" ,"Happiness is calmness" ,"Being present is harmony" ,"Present moment and expectations",

 "Meditation, freedom and happiness","When you taste the present moment"];
 

  const btn= document.getElementById("btn");
  const quote = document.getElementById("quote");

 btn.addEventListener('click',function(){
  
 
 quote.textContent = Quotes[generateQuote()]

 })




 function generateQuote(){
return Math.floor(Math.random()*Quotes.length)

 }




 
    



 