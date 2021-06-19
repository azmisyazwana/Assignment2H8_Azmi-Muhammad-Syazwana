// function tampilkanData(bio, form){
//     let data = document.getElementById(bio).textContent;
//     document.getElementById(form).value = data;
// }

// tampilkanData("name", "name-user");
// tampilkanData("role", "role-user");
// tampilkanData("avail", "avail-user");
// tampilkanData("age", "age-user");
// tampilkanData("loc", "loc-user");
// tampilkanData("exp", "exp-user");
// tampilkanData("email", "email-user");

const form = document.getElementById("form-user");
// form.style.display="none";

function tampilkanForm(){
    let x = document.getElementById("form-user");
    if(x.style.display == "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
}

function showData(){
  let Name = document.getElementById("name").innerText;
  let Role = document.getElementById("role").innerText;
  let Avail = document.getElementById("avail").innerText;
  let Age = document.getElementById("age").innerText;
  let Loc = document.getElementById("loc").innerText;
  let Exp = document.getElementById("exp").innerText;
  let Email = document.getElementById("email").innerText;

  document.getElementById("name-user").value = Name;
  document.getElementById("role-user").value = Role;
  document.getElementById("avail-user").value = Avail;
  document.getElementById("age-user").value = Age;
  document.getElementById("loc-user").value = Loc;
  document.getElementById("exp-user").value = Exp;
  document.getElementById("email-user").value = Email;
}

function updateForm(){
    let inputName = document.getElementById("name-user").value;
    let inputRole = document.getElementById("role-user").value;
    let inputAvail = document.getElementById("avail-user").value;
    let inputAge = document.getElementById("age-user").value;
    let inputLoc = document.getElementById("loc-user").value;
    let inputExp = document.getElementById("exp-user").value;
    let inputEmail = document.getElementById("email-user").value;

    document.getElementById("name").innerHTML = inputName;
    document.getElementById("role").innerHTML = inputRole;
    document.getElementById("avail").innerHTML = inputAvail;
    document.getElementById("age").innerHTML = inputAge;
    document.getElementById("loc").innerHTML = inputLoc;
    document.getElementById("exp").innerHTML = inputExp;
    document.getElementById("email").innerHTML = inputEmail;

    form.style.display="none";
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }




