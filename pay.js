var apple = function(){

    
    var fee = document.getElementById("fee").value
    var fees = 50000
    if (fee === "" ){
        document.getElementById("message").innerHTML = "Input required"
    }
    else if (fee == 50000){
        document.getElementById("message").innerHTML = "School fees completely paid"
    }
    else if (fee < fees && fee >= 0){
        var andy = Number(fees) - Number(fee)
        document.getElementById("message").innerHTML = ("you are owing " + andy)
    }
    else if (fees < fee ){
        var andy = Number(fee) - Number(fees)
        document.getElementById("message").innerHTML = ("excessive payment of " + andy)

    }
    else if (fee < 0){
        document.getElementById("message").innerHTML = "payment does not exist"
    }
    }
