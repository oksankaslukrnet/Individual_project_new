


function Redirect() {
               window.location = "index1.html";
            }



function prov_adress(obj) {
  
  var adr = obj.mail.value;
  var par = obj.pas.value;
  
  
  var adr_pattern = /[0-9a-zA-Z]+/i;
  var par_pattern = /[0-9a-zA-Z]+/i;
  var par_pattern_2 = /^\d+$/;
  
  var prov = adr_pattern.test(adr);
  var prov1 = par_pattern.test(par);
  var prov2 = par_pattern_2.test(par);
   
  var login = document.getElementById("login").value;
  var length = login.length;

  var password = document.getElementById("password").value;
  var length2 = password.length;

  

  if (prov == true &&  prov1 == true && length >=3 == true && length <= 15 == true &&  prov2 == false && length2 > 8 == true) {
        alert("You are registered");
        Redirect();
  }
  else {
        alert("Incorrect information ");
  }
}
 
