function order(){
    var firstname = document.getElementById("fname").value
    var lastname = document.getElementById("lname").value
    var othername = document.getElementById("oname").value
    var country = document.getElementById("select").value
    var level = document.getElementById("grade").value
    var street = document.getElementById("address").value
    var phone = document.getElementById("tel").value
    var email = document.getElementById("email").value
    var product = document.getElementById("product").value
    var sub = document.getElementById("total").value
    
   

    if(firstname === "" || lastname === "" || country === "" || street === "" || phone === "" || email === "" || product === "" || sub === "" ){
       
        document.getElementById("message").innerHTML = "Insert fields to order"
        document.getElementById("message").style.color = "red"
    }

     else if((!firstname.match(/^[A-Za-z ]+$/)) || firstname.length > 20){
        document.addEventListener("message").innerHTML = "Please enter a valid firstname"
     }
     else if((!lastname.match(/^[A-Za-z ]+$/)) || lastname.length > 20){
         document.getElementById("message").innerHTML = "Please enter a valid lastname"
     }
     else if((!othername.match(/^[A-Za-z ]+$/)) || othername.length > 20){
        document.getElementById("message").innerHTML = "Please enter a valid lastname"
    }
     else if((!email.match(/\S+@\S+\.\S+/))){
        document.getElementById("message").innerHTML = "Please enter a valid email"
     }
    else{
        document.getElementById("message").innerHTML = "Order process is complete"
        document.getElementById("message").style.color = "green"
    }



// function order(){
//     var firstname = document.getElementById("fname").value
//         var lastname = document.getElementById("lname")
//         var country = document.getElementById("select").value
//         var street = document.getElementById("address").value
//         var phone = document.getElementById("tel").value
//         var email = document.getElementById("email").value
//         var product = document.getElementById("product").value
//         var sub = document.getElementById("total").value
//     if(firstname === ""){
//         document.getElementById("message").innerHTML = "please make your order"
//         document.getElementById("message").style.visibility = "visible"
//     }
//     else{
//         document.getElementById("message").innerHTML = "Order process is complete"
//         document.getElementById("message").style.display = "block"
//     }


    if ((!firstname.match(/^[A-Za-z ]+$/)) || firstname.length > 20 )
        {document.getElementById("try").addEventListener("click", function(){
        document.getElementById("message").innerText = "invalid firstname required";
    })};

    
}

