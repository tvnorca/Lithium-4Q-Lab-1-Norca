const QUERY = window.location.search;
const PARAMS = new URLSearchParams(QUERY);

function checkoutData() {

    let user = PARAMS.get("user")
    document.getElementById("Welcome").innerText=`hello, ${user}`;

    let apple = parseFloat(PARAMS.get("apple"));
    document.getElementById("apple").innerText

    let orange = parseFloat(PARAMS.get("orange"));
    document.getElementById("orange").innerText

    let milk = parseFloat(PARAMS.get("milk"));
    document.getElementById("milk").innerText

    let chicken = parseFloat(PARAMS.get("chicken"));
    document.getElementById("chicken").innerText

    let result = apple + orange + milk + chicken;
    document.getElementById("result").innerText = `Your total items is ${result}`;

    let credit = parseFloat(PARAMS.get("credit"));
    document.getElementById("credit").innerText=`Your money is ${credit}`;

    let balance = credit - result;

    if (balance >= credit){
        output = result;
    }
    else{
        alert ("you cannot afford this");
    }

        document.getElementById("balance").innerText = `Your change is ${balance}`;


}

