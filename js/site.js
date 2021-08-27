
/**
 * Get the values from the page
 * This is the controller function
 */
 function getValues(){

    //get values from the page
    let startValue = document.getElementById("startValueInput").value;
    let endValue = document.getElementById("endValueInput").value;

    //alert(startValue+" : "+endValue)
    
    try{
        startValue = parseInt(startValue);
        endValue = parseInt(endValue);

        if(!Number.isInteger(startValue)|| !Number.isInteger(endValue)){
            return document.getElementById("results").innerHTML = 
            `<tr><strong class="alarm">Only integers are permissible<br><br></strong></tr>`;
        }
        // call generate numbers
        let values = generateNumbers(startValue,endValue); 

        displayNumbers(values);
    }
    catch(error){
        document.getElementById("results").innerHTML = 
        `<tr><strong>Only integers are permissible<br><br>${error.message}</strong></tr>`;
    }
    
}


/**
 * Generate Numbers from the start to end values
 * This is the logic/model function
 */
function generateNumbers(start, end){
    let values = [];

    for(let i=start; i<=end;i++){
        values.push(i);
    } 
    return values;
}

/**
 * Displays even numbers as bold
 * This is the view function
 */
function displayNumbers(values){

    let table = document.getElementById("results"); 
        table.innerHTML = "";

   values.map(
       item =>{            
           item%15===0?table.innerHTML += `<tr><td class="fizzBuzz"> Fizz Buzz </td></tr>`
           :
            item%3===0?table.innerHTML += `<tr><td class="fizz"> Fizz </td></tr>`

           :item%5===0?table.innerHTML += `<tr><td class="buzz"> Buzz </td></tr>`
           :
           table.innerHTML += `<tr><td>${item}</td></tr>`

           return
       }
   )
}