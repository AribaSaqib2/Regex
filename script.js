let form = document.getElementById("myform");

form.onsubmit = (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;
    let nameRegex = /^[a-zA-Z]{6,12}$/;
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let msg = "";

    if(!nameRegex.test(name)) {
        msg += "name must be atleast 6 characters <br>"
    }
    if(!passRegex.test(pass)) {
        msg += "password must contain at least 1 lower case 1 uppercase case and 1 digit"
    }
    let show = document.getElementById("msg");
    if(msg) {
        show.className = "error"
        show.innerHTML = msg
    }
    else {
        show.className = "success"
        show.innerHTML = "successfull"
    }

}