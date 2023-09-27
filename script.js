
const result = document.getElementById("inputnumber");


const calculate = (number) => {

    result.value = result.value + number;
}

const Result = () => {

    try {

        result.value = eval(result.value);

    } catch (error) {

        alert("Enter the valid input")
    }
}


function clr(){
    result.value = " ";

}

function del() {
    result.value = result.value.slice(0,-1);
}