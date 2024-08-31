document.getElementById("loan-form").addEventListener("submit",function(e){
    document.getElementById("loading").style.display="block";
    document.getElementById("result").style.display="none";
    console.log(e);
    e.preventDefault()
    setTimeout(calculate,2000)
});
function calculate(){
    const amount = document.getElementById("loan_amount");
    const intrest = document.getElementById("Intrest");
    const years = document.getElementById("years");
    const monthlypayment = document.getElementById("monthly_payment");
    const totalamount = document.getElementById("total_amount");
    const totalintrest = document.getElementById("total_intrest");
    const principal = parseFloat(amount.value)
    const calculatedintrest = parseFloat(intrest.value)/100/12;
    const calculatedpayment = parseFloat(years.value)*12;
    const x = Math.pow(1+calculatedintrest,calculatedpayment);
    const monthly = (principal * x * calculatedintrest)/(x-1);
    if(isFinite(monthly)){
        monthlypayment.value = monthly.toFixed(2);
        totalamount.value = (monthly*calculatedpayment).toFixed(2);
        totalintrest.value = (monthly * calculatedpayment - principal).toFixed(2);
        
    // const y = document.getElementById("result")
    // const c = document.querySelector(".card")
    const l = document.getElementById("loading")
    l.style.display="none"
    // c.insertAdjacentElement(l,y)
    // setTimeout(function(){
    //     document.getElementById("loading").remove();
    // },2000)

        document.getElementById("result").style.display="block";
        // console.log(monthlypayment)
    }else{
        showAlert('plese enter the amount');
    }
    // e.preventDefault();
}

function showAlert(error){
    const errordiv = document.createElement("div");
    errordiv.className = "alert alert-danger";
    errordiv.appendChild(document.createTextNode(error))
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");
    card.insertBefore(errordiv,heading)

    setTimeout(function(){
        document.querySelector(".alert").remove();
    },2000)
}