let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
function shelfArrange(){
    let apples=""
    let oranges=""
    for(let i=0;i<fruit.length;i++){
        if(fruit[i]==="🍎"){
            apples+="🍎";
        }
        else if(fruit[i]==="🍊"){
            oranges+="🍊"
        }
    }
    appleShelf.textContent=apples;
    orangeShelf.textContent=oranges;
}
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.


