// clean form
const cleanFormConversemos = () => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("project").value = "";
  }

const sentForm = (elemId, msg) => {
    elem = document.getElementById(elemId);
    elem.innerHTML = msg;
    elem.style.backgroundColor = "green";
    elem.style.padding = "2px 2px 2px 2px";
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
        printError("nameErr", "Introduzca su nombre");
    } else {
        const regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false) {
            printError("nameErr", "Introduzca su nombre");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if(email == "") {
        printError("emailErr", "Introduzca un correo valido");
    } else {
        // Regular expression for basic email validation
        const regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Introduzca un correo valido");
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
        printError("projectErr", "Introduzca su proyecto");
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

  cleanFormConversemos()
  sentForm("sentForm", "Su mensaje ha sido enviado. Gracias!")
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
//                 //   cleanFormConversemos()
//                      sentForm("sentForm", "Su mensaje ha sido enviado. Gracias!")
//               }
//           },
//           error: function(res){
//               console.log("Error: ", res)
//           }
//       });
}, false);