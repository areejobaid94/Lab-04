function myFunction() {
    var person = prompt("Welcome To Our Website, Please enter your name", "Your Name");
    if (person != 'Your Name') {
        alert('Hi ' + person)
    }else{
        myFunction()
    }
  }
  myFunction()
function myFunction1(Event) {
    document.getElementById("login").style.display = "none";
    document.getElementById("Sign-Up").style.display = "block";
    document.getElementById("user-account").style.display = "none";
  }

  function myFunction3(){
    confirm("Done");
  }

  function login(){
      let username = document.getElementById("username1").value;
      let password = document.getElementById("password1").value;
      console.log(username)

      if(username == ''  && password == ''){
          alert('Username and Password are required')
      }else if(username == ""){
        alert('Username is required')
      }else if(password == ""){
        alert('password is required')
      }
      else {
          alert('You have logged in successfully'+ username )
          document.getElementById("Sign-Up").style.display = "none";
          document.getElementById("login").style.display = "none";
          document.getElementById("user-account").style.display = "block";
          document.getElementById("new-user-name").innerHTML = username;
      }
  }

  function SignUp(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value;

    if(username == ''  && password == '' && mobile == ''){
        alert('Username, Password and Mobile are required')
    }else if(username == ""){
      alert('Username is required')
    }else if(password == ""){
      alert('password is required')
    }else if(mobile == ""){
        alert('mobile is required')
    }
    else {
        alert('You have logged in successfully'+ username )
        document.getElementById("Sign-Up").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("user-account").style.display = "block";
        document.getElementById("new-user-name").innerHTML = username;
    }
}