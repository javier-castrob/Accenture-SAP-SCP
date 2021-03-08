var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var fecha = document.getElementById("fecha");
var dni = document.getElementById("dni");
var telefono = document.getElementById("telefono");
var legajo = document.getElementById("legajo");
var cursosSelect = document.getElementById("cursos");
var alerta = document.getElementById("alert");


var errores = [];
var alumnos = [];

var cursos = [
    {
        id: 0,
        curso: "CursoA",
        rango: [18, 19]
    },
    {
        id: 1,
        curso: "CursoB",
        rango: [20, 21]
    },
    {
        id: 2,
        curso: "CursoC",
        rango: [22, 23]
    },
]

cursos.forEach(curso => {
    var option = document.createElement('option');
    option.value =  curso.id;
    option.text = curso.curso;
    document.getElementById("cursos").appendChild(option);  
});


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

legajo.addEventListener("blur", function () {
    let correctoLegajo = "A" + cursos[cursosSelect.value].curso + dni.value + "2021"
    if (legajo.value == "") {
        alerta.classList.remove("d-none");
        if (errores.indexOf("Debe ingresar el legajo") == -1) {
            errores.push("Debe ingresar el legajo");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("Debe ingresar el legajo") != -1) {
            errores.splice(errores.indexOf("Debe ingresar el legajo"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }
    }
    if (legajo.value != correctoLegajo) {
        alerta.classList.remove("d-none");
        if (errores.indexOf("El alejo no es correcto") == -1) {
            errores.push("El alejo no es correcto");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("El alejo no es correcto") != -1) {
            errores.splice(errores.indexOf("El alejo no es correcto"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }
    }

})

cursosSelect.addEventListener("blur", function () {
    if (cursos[cursosSelect.value].rango.indexOf(parseInt(2021 - fecha.value.substring(0, 4))) == -1){
        alerta.classList.remove("d-none");
        if (errores.indexOf("No pertenece al rango de edad del curso") == -1) {
            errores.push("No pertenece al rango de edad del curso");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("No pertenece al rango de edad del curso") != -1) {
            errores.splice(errores.indexOf("No pertenece al rango de edad del curso"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }
    }

})

telefono.addEventListener("blur", function () {
    if (telefono.value == "") {
        alerta.classList.remove("d-none");
        if (errores.indexOf("Debe ingresar el telefono") == -1) {
            errores.push("Debe ingresar el telefono");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("Debe ingresar el telefono") != -1) {
            errores.splice(errores.indexOf("Debe ingresar el telefono"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }
    }
    if (telefono.value.length != 10){
        alerta.classList.remove("d-none");
        if (errores.indexOf("Debe ingresar 10 numeros") == -1) {
            errores.push("Debe ingresar 10 numeros");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("Debe ingresar 10 numeros") != -1) {
            errores.splice(errores.indexOf("Debe ingresar 10 numeros"), 1)
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

    if (email.value.length > 50){
        alerta.classList.remove("d-none");
        if (errores.indexOf("El email no debe superar los 50 caracteres") == -1) {
            errores.push("El email no debe superar los 50 caracteres");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("El email no debe superar los 50 caracteres") != -1) {
            errores.splice(errores.indexOf("El email no debe superar los 50 caracteres"), 1)
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
        let alumno = new Object();
        alumno.nombre = nombre.value;
        alumno.telefono = telefono.value;
        alumno.email = email.value;
        alumno.dni = dni.value;
        alumno.fecha = fecha.value;
        alumno.legajo = legajo.value;
        alumno.curso = cursosSelect.value;
        alumnos.push(alumno);
        var inputs = Array.from(document.getElementsByTagName('input'));
        inputs.forEach(dato => {
            dato.value = ""
        });
        console.log(alumnos);
    }
}