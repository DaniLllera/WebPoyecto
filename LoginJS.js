function login() 
{
 var user = "1" 
 var password = "1" 

    if(document.getElementsByName("user")[0].value === user && document.getElementsByName("password")[0].value === password){
       location =  "FirebaseJS.html";
    } else {
        alert("INCORRECTO")
    }
}