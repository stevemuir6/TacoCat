// <!-- I want to write JS code that knows what to do when -->
document.getElementById("btnDemo2").addEventListener("click",function(){
    // Step 1: I want to collect the number the user entered
//     Declare a local variable
// then set it equal to what the user entered
let num3 = document.getElementById("input3").value;

    // Step 2: I want to collect the word the user entered

    let word2 = document.getElementById("input4").value;
    
   
      //Step 3: I want to print out to the user the number and the word they entered
       //Use JS to find the output element and then stuff some data into it
       document.getElementById("output3").innerText = `The number you entered is ${num3}`;
       document.getElementById("output4").innerText = `The word you entered is ${word2}`;
// when the button is clicked perform a loop 100 times
for(let index = 1; index <= 100; index++){
    // i want to bold all the even numbers
    // us MODULUS operator (%)
    // index - 1 var specialValue = 1%2 = 2
    // index - 2 var specialValue = 2%2 = 0
    let specialValue = index % 2;
    let printableNum = -1;
    if(specialValue != 0){
        printableNum = `<b>${index}</b> `;
    }
    if(specialValue == 0){
        document.getElementById("output3").innerHTML +=(`<b>${index}</b> `);
    }
    else{
        document.getElementById("output3").innerHTML += printableNum;
    }

    

}

});
 document.getElementById("btnWord").addEventListener("click", function(){
     let word = document.getElementById("input3").value;
     for(let index = 0; index < word.length; index++)
     {
         character += ${word.substr(index, 1); 
         document.getElementById("output4").append.newWord.substr(0, newWord.length -1);
     }
 });
