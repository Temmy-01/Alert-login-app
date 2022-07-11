const logins = [
    {Email:"t_famakinwa@yahoo.com", password:"Temmy-12"},
    {Email:"famakinwatemitope@gmail.conm", password:"Temmy-123"},
    {Email:"famakinwa@gmail.conm", password:"Temmy-1234"}


]

function temmy(){
    var Emails = document.getElementById('email').value;
    var Passwords = document.getElementById('pwd').value;
    // var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    // var result = regex.test(Emails);
    // var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    // var passer = passw.match(Passwords);

    for(let i=0; i<logins.length; i++){
        if(Emails=='' || Passwords==''){
            swal("Oops!", "Can't have empty fields!", "error")
            break;
        }
        else{
            if(Emails==logins[i].Email && Passwords==logins[i].password){
            swal("Good job!", "You have logged in succesffully", "success");
            break;

            } else if(Emails!==logins[i].Email || Passwords!==logins[i].password) {
            swal("Oops!", "Email and Password do not match", "error");
                
            }
            else if(Passwords >=10){
            swal("Oops!", "Password must be more than 10 characters", "error");

            }
    
        }

    } 
    
    

}