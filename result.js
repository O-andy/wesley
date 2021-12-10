function cat(){
    var name = document.getElementById("name").value
    var reg = document.getElementById("reg").value


    if (name === "" || reg === "" ){
        document.getElementById("message").innerHTML = "Inputs required"
    }
    else if (name === "OCHEKE ABIGAIL" && reg ==="123AB"){
        window.location.href="abigail.html"
    }
    else if (name === "NGARA ANDREW" && reg ==="126BC"){
        window.location.href="andy.html"
    }
    else if (name === "ECHE PATRICK" && reg ==="124CB"){
        window.location.href="eche.html"
    }
    else if (name === "ONOJA COLLINS" && reg ==="121CD"){
        window.location.href="coli.html"
    }
    else if (name === "INMANCHE SAMUEL" && reg ==="129DC"){
        window.location.href="samuel.html"
    }
    else if (name === "ODAUDU VICTORIA" && reg ==="127BD"){
        window.location.href="vicky.html"
    }
    else if (name === "CHIDERA GEORGE" && reg ==="128AD"){
        window.location.href="chi.html"
    }

}