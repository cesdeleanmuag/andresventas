function confirmacion() {
    var numero = prompt("cuantos desea comprar?: ");

    if (numero > 0 && numero <=1 ) {
        alert("Has comprado "+numero+" mercedez nuevo");
    }else if (numero > 1){
        alert("Has comprado "+numero+" mercedez nuevos");
    }else{
            alert("Necesitas poner una cantidad mayor a 1");
        }
}

// funcion de registro

function signup(e){
    event.preventDefault();

    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    var user = {
        email: email,
        username: username,
        password: pass,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    console.log("usuario añadido");
}

// funcion de login

function loginFunc(e){
    event.preventDefault();

    var username = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var result = document.getElementById("result");

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

    if(user == null){
        result.innerHTML = "error al logear";
    }else if(username == data.username && pass == data.password){
        result.innerHTML = "sesion iniciada";
    }else{
        result.innerHTML = "datos incorrectos";
    }
}