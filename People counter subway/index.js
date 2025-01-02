// Here is the code:
// intialize the count as 0
let count = 0;
// listen for clicks on the increment button
btnClicked=document.getElementById("increment-btn");
btnClicked.addEventListener('click',function(){
  count=count+1;
  document.getElementById("count-el").innerText=count;
})
