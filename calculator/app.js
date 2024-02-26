let screen = document.querySelector("#screen");


function display(ip){
    screen.value += ip;
}

function calculate(){
     try{
        let result = eval(screen.value);
        if (result === undefined || isNaN(result)) {
            screen.value = "Error";
        } else {
            screen.value = result;
        }
    }
    catch(err){
        screen.value = "Error"
    }
}

function clearScreen(){
    screen.value = "";
}