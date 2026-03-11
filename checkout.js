const QUERY = window.location.search;
const PARAMS = new URLSearchParams(QUERY);

function checkoutData() {

    let user = PARAMS.get("user")
    document.getElementById("Welcome").innerText=`hello, ${user}`;

    let apple = parseFloat(PARAMS.get("apple"));
    document.getElementById("apple").innerText=`Your total is ${apple}`;

    let orange = parseFloat(PARAMS.get("orange"));
    document.getElementById("orange").innerText=`Your total is ${orange}`;

    let milk = parseFloat(PARAMS.get("milk"));
    document.getElementById("milk").innerText=`Your total is ${milk}`;

    let chicken = parseFloat(PARAMS.get("chicken"));
    document.getElementById("chicken").innerText=`Your total is ${chicken}`;

    let result = apple + orange + milk + chicken;
    document.getElementById("result").innerText = `Your total items is ${result}`;

    let credit = parseFloat(PARAMS.get("credit"));
    document.getElementById("credit").innerText=`Your money is ${credit}`;

    let balance = result - credit;
    document.getElementById("balance").innerText = `Your Final total is ${balance}`;

}
