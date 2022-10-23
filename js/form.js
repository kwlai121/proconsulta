// clean form
const cleanFormConversemos = () => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("project").value = "";
  }

// form validation
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form
function validateForm() {
    // Retrieving the values of form elements
    const name = document.contactenosForm.name.value;
    const email = document.contactenosForm.email.value;
    const phone = document.contactenosForm.phone.value;
    const project = document.contactenosForm.proyecto.value;

    console.log(name, email, phone, project)

	// Defining error variables with a default value
    // var nameErr = emailErr = phoneErr = true;
    var nameErr = emailErr = phoneErr = projectErr = true;
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        const regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        const regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if(phone == "") {
        printError("phoneErr", "Introduzca un numero telefonico correcto");
    } else {
        const regex = /^[0-9]{8}$/;
        if(regex.test(phone) === false) {
            printError("phoneErr", "Introduzca un numero telefonico de 8 digitos");
        } else{
            printError("phoneErr", "");
            phoneErr = false;
        }
    }

    // Validate project
    if(project == "") {
        printError("projectErr", "Fill this field/Llene este campo.");
    } else {
        printError("projectErr", "");
        projectErr = false;
    }


    // // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || phoneErr || projectErr ) == true) {
       return false;
    }

    return true;
};



// send form with ajax
const form = document.getElementById('contactenos-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log("Form working!", validateForm())
  // Form validation
  if (validateForm() == false) {
    return
  }

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const project = document.getElementById("project").value;

  $("#contactenos_modal").modal("show");
  cleanFormConversemos()
//   $.ajax({
//           type : "POST",  //type of method
//           url  : "contactenos.php",  //your page
//           data : {
//               name : name,
//               phone : phone,
//               email : email,
//               project : project,
//           },
//           success: function(res){
//               if (res.status === 'true' || res.status === true) {
//                   $("#modal").modal("show");
//                 //   cleanFormConversemos()
//               }
//           },
//           error: function(res){
//               console.log("Error: ", res)
//           }
//       });
}, false);