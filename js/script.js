
// bussiness logic
function convertInputs(inputTime){
    this.inputTime=inputTime;
    this.convertedHours=Math.floor(inputTime/60);
      this.convertedToMinutes = Math.floor(inputTime%60);
    alert (  convertedHours + " HRS" + convertedToMinutes + " MINS");
    }


$(document).ready(function() {
    $("#car").click(function() {
      $(".platinum").fadeIn();
      $(".premium").hide();
      $(".gold").hide();
      $(".deluxe").hide();
    });
    $("#pick-up").click(function() {
      $(".platinum").hide();
      $(".deluxe").fadeIn("slow");
      $(".gold").hide();
      $(".premium").hide();

    });
    $("#minivan").click(function() {
      $(".platinum").hide();
      $(".premium").fadeIn("slow");
      $(".gold").hide();
      $(".deluxe").hide();
    });
    $("#van").click(function() {
      $(".platinum").hide();
      $(".premium").hide();
      $(".gold").fadeIn("slow");
      $(".deluxe").hide();
    });
  })
<<<<<<< HEAD
=======

  //contact
  function myFunction() {
  var fname = document.getElementById("fname").value;
  var sname = document.getElementById("sname").value;
  var email = document.getElementById("email").value.indexOf("@");
  var phone = document.getElementById("phon").value;
  var make = document.getElementById("mak").value;
  var model = document.getElementById("model").value;
  var book = document.getElementById("book").value;

  var message = document.getElementById("message").value;

  if(fname=="" && sname==""){
    alert("Enter your full name");
  }
  if (email == -1) {
   alert("Not a valid e-mail!");
 }
 if (book == "") {
  alert("Not a valid datetime!");
}
 if(phone===""){
   alert("Enter phone number");
 }
 if (make == "" && model=="") {
  alert("Enter value!");
}
 if(message===""){
   alert("Enter message");
 }
if( fname!="" && sname!="" && email>-1 && message!=="" && phon==="" && make=="" && model==""){
   alert( fname +"we have received your message. Thank you for reaching out to us.");
 }
}
>>>>>>> 84ba12ee9806b173dc33bacfce5690cf0283449e
