var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var fecha = document.getElementById("fecha"); 
var dni = document.getElementById("dni");
var alerta = document.getElementById("alert");


var errores = [];
var datos = [];
var producto1 = 0;
var producto2 = 0;
var totalcompra = 0;
var cuotas = 0;




nombre.addEventListener("blur", function () {
    if (nombre.value == "") {
        alerta.classList.remove("d-none");
        if (errores.indexOf("Debe ingresar el nombre") == -1) {
            errores.push("Debe ingresar el nombre");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("Debe ingresar el nombre") != -1) {
            errores.splice(errores.indexOf("Debe ingresar el nombre"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }
    }
})

dni.addEventListener("blur", function () {
    if (dni.value == "") {
        alerta.classList.remove("d-none");
        if (errores.indexOf("Debe ingresar el dni") == -1) {
            errores.push("Debe ingresar el dni");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("Debe ingresar el dni") != -1) {
            errores.splice(errores.indexOf("Debe ingresar el dni"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }

    }
})

fecha.addEventListener("blur", function () {
    if (fecha.value == "") {
        alerta.classList.remove("d-none");
        if (errores.indexOf("Debe ingresar el fecha") == -1) {
            errores.push("Debe ingresar el fecha");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("Debe ingresar el fecha") != -1) {
            errores.splice(errores.indexOf("Debe ingresar el fecha"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }

    }
    if (2021 - fecha.value.substring(0, 4) >= 18) {
        if (errores.indexOf("Debe ser mayor de edad") != -1) {
            errores.splice(errores.indexOf("Debe ser mayor de edad"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }
    } else {
        alerta.classList.remove("d-none");
        if (errores.indexOf("Debe ser mayor de edad") == -1) {
            errores.push("Debe ser mayor de edad");
        }
        alerta.textContent = errores;
    }
})




email.addEventListener("blur", function () {
    if (email.value == "") {
        alerta.classList.remove("d-none");
        if (errores.indexOf("Debe ingresar el email") == -1) {
            errores.push("Debe ingresar el email");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("Debe ingresar el email") != -1) {
            errores.splice(errores.indexOf("Debe ingresar el email"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }
    }

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let correo = document.getElementById("email").value;
    if (!re.test(String(correo).toLowerCase())) {
        alerta.classList.remove("d-none");
        if (errores.indexOf("El email no es valido") == -1) {
            errores.push("El email no es valido");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("El email no es valido") != -1) {
            errores.splice(errores.indexOf("El email no es valido"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }
    }

})


function crear() {
    if (errores.length == 0) {
        var inputs = Array.from(document.getElementsByTagName('input'));
        inputs.forEach(dato => {
            datos.push(dato.value)
        });
        document.getElementById("card").removeChild(document.getElementById("body"));
        document.getElementById("body2").classList.remove("d-none");
    }
}

function agregar() {
    var tag = confirm("Seguro que quiere agregarlo?")
    if (tag) {
        var cantidad = prompt("Cuantas desea?");
        if (cantidad != ""){
            producto1 = parseInt(cantidad, 10);
            document.getElementById("producto1").classList.add("d-none");
        }
    }
}

function agregar2() {
    var tag = confirm("Seguro que quiere agregarlo?")
    if (tag) {
        var cantidad = prompt("Cuantas desea?");
        if (cantidad != ""){
            producto2 = parseInt(cantidad, 10);
            document.getElementById("producto2").classList.add("d-none");
        }
    }
}

function siguiente() {
    if (producto1 > 0 || producto2 > 0) {
        document.getElementById("body2").classList.add("d-none");
        document.getElementById("body3").classList.remove("d-none");
        if (producto1 > 0) {
            document.getElementById("container").classList.remove("d-none");
            document.getElementById("Cantidad").textContent = "Cantidad: " + producto1;
            document.getElementById("Precio").textContent = "Precio: " + 6500;
            document.getElementById("Subtotal").textContent = "Subtotal: $" + producto1 * 6500;
        }
        if (producto2 > 0) {
            document.getElementById("container2").classList.remove("d-none");
            document.getElementById("Cantidad2").textContent = "Cantidad: " + producto2;
            document.getElementById("Precio2").textContent = "Precio: " + 4500;
            document.getElementById("Subtotal2").textContent = "Subtotal: $" + producto2 * 4500;
        }
        totalcompra = (producto2 * 4500 + producto1 * 6500);
        console.log(producto2 * 4500, producto1 * 6500)
        document.getElementById("total").classList.remove("d-none");
        document.getElementById("total2").textContent = "Total = $" + totalcompra;

    } else {
        alert("Debe agregar al menos uno de los dos productos")
    }
}

function siguiente2() {
    var tag = confirm("Desea abonar con tarjeta de crédito?");
    if (tag) {
        cuotas = parseInt(prompt("Cuantas cuotas desea abonar?"));
        document.getElementById("cuotas").classList.remove("d-none");
        document.getElementById("cuotas2").textContent = cuotas + " cuotas de $" + Math.round(totalcompra / cuotas);
        document.getElementById("boton1").classList.add("d-none");
        document.getElementById("boton2").classList.remove("d-none");
    } else {
        document.getElementById("boton1").classList.add("d-none");
        document.getElementById("boton2").classList.remove("d-none");
    }
}

function siguiente3() {
    let codigoBueno = 101010;
    var tag = confirm("tiene un código de descuento?");
    if (tag) {
        var codigo = parseInt(prompt("Ingrese el codigo:"));
        console.log(codigo);
        if (codigo == codigoBueno) {
            alert("El codigo ingresado es correcto")
            document.getElementById("descuento").classList.remove("d-none");
            document.getElementById("descuento2").textContent = "Descuento = $1500";
            totalcompra = totalcompra -1500;
            document.getElementById("total2").textContent = "Total = $" + totalcompra;
            document.getElementById("cuotas2").textContent = cuotas + " cuotas de $" + Math.round(totalcompra / cuotas);
        } else {
            alert("El codigo ingresado es incorrecto")
        }
    } else {
        alert("Muchas gracias por su compra " + datos[0]);
        open(location, '_self').close();
    }
}
