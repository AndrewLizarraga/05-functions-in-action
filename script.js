function greetUser(name){
  return `Welcome back, ${name}!`;
}

let button = document.getElementById("greetButton");
button.addEventListener("click", function(){
  let nameInput = document.getElementById("nameInput");
  let name = nameInput.value;
  let message = greetUser(name);
  let messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
  nameInput.value = "";
});
