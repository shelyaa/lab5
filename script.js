var nameError = document.getElementById('name-error');
var snameError = document.getElementById('sname-error');
var lnameError = document.getElementById('lname-error');
var phoneError = document.getElementById('phone-error');
var bdateError = document.getElementById('bdate-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var submitError = document.getElementById('submit-error');

function validateName(){
  var name = document.getElementById('contact-name').value;

  if(name.length == 0){
    nameError.innerHTML = 'Enter your name';
    return false;
  }
  if(name.length < 2) {
    nameError.innerHTML = 'Enter your full name';
    return false;
  }
  if(!name.match(/^[A-Za-z]*$/)){
    nameError.innerHTML = 'Enter your real name';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateSName(){
  var sname = document.getElementById('contact-sname').value;

  if(sname.length == 0){
    snameError.innerHTML = 'Enter your second name';
    return false;
  }
  if(sname.length < 2){
    snameError.innerHTML = 'Enter your full second name';
    return false;
  }
  if(!sname.match(/^[A-Za-z]*$/)){
    snameError.innerHTML = 'Enter your real second name';
    return false;
  }
  snameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateLName(){
  var lname = document.getElementById('contact-lname').value;

  if(lname.length == 0){
    lnameError.innerHTML = 'Enter your last name';
    return false;
  }
  if(lname.length < 2){
    lnameError.innerHTML = 'Enter your full last name';
    return false;
  }
  if(!lname.match(/^[A-Za-z]*$/)){
    lnameError.innerHTML = 'Enter your real last name';
    return false;
  }
  lnameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateBDate(){
  var bdate = document.getElementById('bdate').value;

  if(bdate.length ==0){
    bdateError.innerHTML = 'Enter your birth date';
    return false;
  }
  bdateError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePhone() {
  var phone = document.getElementById('contact-phone').value;
  document.getElementById('contact-phone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = '+(' + x[1] + ') ' + x[2] + '-' + x[3] + '-' + x[4] + '-' + x[5];
  });

  if (phone.length == 0) {
    phoneError.innerHTML = 'Enter your phone number';
   return false;}
    if (phone.length < 19) {
    phoneError.innerHTML = 'Phone number should contain 12 digits';
    return false;}
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail(){
  var email = document.getElementById('contact-email').value;

  if(email.length == 0){
    emailError.innerHTML = 'Enter your email'
    return false;
  }
  if(!email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
    emailError.innerHTML = 'Enter your real email'
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePassword(){
  var password = document.getElementById('password').value;

  if(password.length == 0){
    passwordError.innerHTML = 'Enter your password'
    return false;
  }
  if(password.length < 8){
    passwordError.innerHTML = 'Your password should contain at least 8 characters'
    return false;
  }
  if(!password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%_^&*-])/)){
    passwordError.innerHTML = 'Your password should contain different characters'
    return false;
  }
  passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (!validateName() || !validateSName() || !validateLName() || !validateBDate() || !validateEmail() || !validatePhone() || !validatePassword()) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Fill everything';
    setTimeout(function () {
      submitError.style.display = 'none';
    }, 3000);
    return false;
  }
  add();
  clearForm();
}

function clearForm(){
  document.getElementById('contact-name').value = "";
  document.getElementById('contact-sname').value = "";
  document.getElementById('contact-lname').value = "";
  document.getElementById('bdate').value = "";
  document.getElementById('contact-phone').value = "";
  document.getElementById('contact-email').value = "";
  document.getElementById('password').value = "";
}
