var cart = [];
var sumcost = 0;
var Username = '';
var pass = '';
var numOfStars = 0;

areYouRobot();

function myFunction1(Event) {
    document.getElementById("login").style.display = "none";
    document.getElementById("Sign-Up").style.display = "block";
    document.getElementById("user-account").style.display = "none";
  }

  function addToCart(type,cost){
    if(Username == ''){
      alert('Login before')
    }else{
      let obj = {};
      obj.type = type;
      obj.cost = cost;
      cart.push(obj);
      sumcost = sumcost + Number(cost);
      let outputStr = 'Thank you '+ Username + ',you have ';
      for(let i = 0 ;  i < cart.length;i++){
        outputStr = outputStr + cart[i].type + " price "+ cart[i].cost + "  ";
      }
      confirm(outputStr + "; => Total Cost: " + sumcost);
    }
   
  }

  function login(){
      let username = document.getElementById("username1").value;
      let password = document.getElementById("password1").value;
      if(username == ''  && password == ''){
          alert('Username and Password are required')
      }else if(username == ""){
        alert('Username is required')
      }else if(password == ""){
        alert('password is required')
      }
      else {
          Username = username;
          pass = password;
          alert('You have logged in successfully '+ username )
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
        Username = username;
        pass = password;
        alert('You have logged in successfully '+ username )
        document.getElementById("Sign-Up").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("user-account").style.display = "block";
        document.getElementById("new-user-name").innerHTML = username;
    }
}

function areYouRobot(){
  var word =Math.round(Math.random() * 10) + "S" + Math.round(Math.random() * 10) +  "a" + Math.round(Math.random() * 10);
  var person = prompt("Welcome To Our Website, To make sure that you are not a robot Enter the word => " + word);
  while(person !=  word){
    let prevWord = word;
    word = Math.round(Math.random() * 10) + "u" + Math.round(Math.random() * 10) + "Z" + Math.round(Math.random() * 10);
    person = prompt(person + ' is not equal to ' + prevWord + ".  To make sure that you are not a robot Enter the word => " + word);
  }
  numOfStars = prompt("How many Stars are you giving to our website, Choose for 1 to 5");
  while (numOfStars == '' || isNaN(numOfStars)) {
    numOfStars = prompt("How many Stars are you giving to our website, Choose for 1 to 5");
  }
  alert('Thank you!')
}
function addStars(){
  let allStart = '';
  if(numOfStars > 5){
    numOfStars = 5
  }
  for(let i = 0 ; i < numOfStars ; i++){
    allStart = allStart + '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1200px-Golden_star.svg.png" alt="" style="width: 20px;margin-top:10px"/>'
  }
  return allStart
}