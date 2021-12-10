function order(){
    // var firstname = document.getElementById("fname").value
    // var lastname = document.getElementById("lname").value
    // var othername = document.getElementById("oname").value
    // var country = document.getElementById("country").value
    // var birth = document.getElementById("birth").value
    // var reg = document.getElementById("reg").value
    // var phone = document.getElementById("phone").value
    // var email = document.getElementById("email").value
    // var address = document.getElementById("address").value
    // var state = document.getElementById("state").value
    // var lga = document.getElementById("lga").value
    // var origin = document.getElementById("origin").value
    // var res = document.getElementById("res").value
    // var gua = document.getElementById("gua").value
    // var tel = document.getElementById("tel").value
    
   
    var surname = document.getElementById("surname").value
    var firstname = document.getElementById("firstname").value
    var othernames = document.getElementById("othernames").value
    var email = document.getElementById("email").value
    var address = document.getElementById("address").value
    var cityresident = document.getElementById("cityresident").value
    var stateresident = document.getElementById("stateresident").value
    var countryresident = document.getElementById("countryresident").value
    var stateorigin = document.getElementById("stateorigin").value
    var lgaorigin = document.getElementById("lgaorigin").value
    var countryorigin = document.getElementById("countryorigin").value
    var guaname = document.getElementById("guaname").value
    var phonenumber = document.getElementById("phonenumber").value

    if(surname === "" || firstname === "" || othernames === "" || email === "" || address === "" || cityresident === "" || stateresident === "" || countryresident === "" || stateorigin === "" || lgaorigin === "" || countryorigin === "" || guaname === "" ||  phonenumber === ""){
        document.getElementById("message").innerHTML = "This Input Is Required"
    }
    else if(!surname.match(/^[A-Za-z ]+$/)){
        document.getElementById("message").innerHTML = "Enter A Valid Name"
    }
    else if(surname.length < 2 || surname.length > 15){
        document.getElementById("message").innerHTML = "Surname Must Be Greater Than 2 Characters And Not More Than 15 Characters"
    }
    else if(!firstname.match(/^[A-Za-z ]+$/)){
        document.getElementById("message").innerHTML = "Enter A Valid Name"
    }
    else if(firstname.length < 2 || firstname.length > 15){
        document.getElementById("message").innerHTML = "First Name Must Be Greater Than 2 Characters And Not More Than 15 Characters"
    }
    else if(!othernames.match(/^[A-Za-z ]+$/)){
        document.getElementById("message").innerHTML = "Enter A Valid Name"
    }
    else if(othernames.length < 2 || othernames.length > 15){
        document.getElementById("message").innerHTML = "Other Names Must Be Greater Than 2 Characters And Not More Than 15 Characters"
    }
    else if(!email.match(/\S+@\S+\.\S+/)){
        document.getElementById("message").innerHTML = "Enter A Valid Email"
    }
    else if(!address.match(/^[A-Za-z ]+$/)){
        document.getElementById("message").innerHTML = "Enter valid address"
    }
    else if(!cityresident.match(/^[A-Za-z ]+$/)){
        document.getElementById("message").innerHTML = "Enter valid data"
    }
    else if(!stateresident.match(/^[A-Za-z ]+$/)){
        document.getElementById("message").innerHTML = "Enter valid data"
    }
    else if(!countryresident.match(/^[A-Za-z ]+$/)){
        document.getElementById("message").innerHTML = "Enter valid data"
    }
    else if(!stateorigin.match(/^[A-Za-z ]+$/)){
        document.getElementById("message").innerHTML = "Enter valid data"
    }
    else if(!lgaorigin.match(/^[A-Za-z ]+$/)){
        document.getElementById("message").innerHTML = "Enter valid data"
    }
    else if(!countryorigin.match(/^[A-Za-z ]+$/)){
        document.getElementById("message").innerHTML = "Enter valid data"
    }
    else if(!phonenumber){
        document.getElementById("message").innerHTML = "Enter valid data"
    }
    else{
        document.getElementById("message").innerHTML = "Registration Successful"
        window.location.href="signin.html"
    }
    





    // if(firstname=== "" || lastname === "" || othername === ""|| country === "" ||  birth ==="" || reg==="" || phone==="" || email === "" || address===""|| state===""|| lga===""|| origin===""|| res===""|| gua===""||  tel === "" ){
    //     document.getElementById("message").innerHTML = "Inputs required"
    //     document.getElementById("message").style.color = "red"
    // }
    // else if((!firstname.match(/^[A-Za-z ]+$/)) || firstname.length > 50){
    //     document.getElementById("message").innerHTML = "Invaild Firstname"
    // }

    // else if(password.length < 6 ||  confirmpassword.length < 6){
    //     document.getElementById("message").innerHTML = "Password must not be less than 6 characters"
    // }
    // else if(password.length > 15 || confirmpassword.length > 15 ){
    //     document.getElementById("message").innerHTML = "Password must not be greater than 15 characters"
    // }
    // else if((!fullname.match(/^[A-Za-z ]+$/)) || fullname.length > 50){
    //     document.getElementById("message").innerHTML = "Please enter a valid name"
    // }
    // else if((!email.match(/\S+@\S+\.\S+/))){
    //     document.getElementById("message").innerHTML = "Please enter a valid email"
    // }
    // else{
    //     document.getElementById("message").innerHTML = "Registration successful"
    //     document.getElementById("message").style.color = "green"
    //     window.location.href = "dashboard.html"
    // }
}