var usuarios = [
    {
        id: "0",
        nombre: 'Carla',
        telefono: "1545628984",
        email: "carla@gmail.com"
    },
    {
        id: "1",
        nombre: 'Pedro',
        telefono: 1545251245,
        email: "pedro@gmail.com"
    },
    {
        id: "2",
        nombre: 'Lucas',
        telefono: "1523357849",
        email: "lucas@gmail.com"
    },
    {
        id: "3",
        nombre: 'Ana',
        telefono: "15789456",
        email: "ana@gmail.com"
    }
]

var menu = document.getElementById("menu");
var table = document.getElementById("lista");
var buscarU = document.getElementById("buscar");

usuarios.forEach(usuario => {
    document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>' + usuario.id + '</td>' + '<td>' + usuario.nombre + '</td>' + '<td>' + usuario.telefono + '</td>' + '<td>' + usuario.email + '</td>';
})

function cerrar() {
    let tag = confirm("Seguro que desea salir?");
    if (tag) {
        open(location, '_self').close();
    }
}

function lista() {
    table.classList.remove("d-none");
    menu.classList.add("d-none");

}

function volver() {
    menu.classList.remove("d-none");
    table.classList.add("d-none");
    buscarU.classList.add("d-none");
    titulo.textContent = "";
    id.textContent = "";
    telefono.textContent = "";
    email.textContent = "";
    input.value = ""
    document.getElementById("card").classList.remove("card");
}

function buscar() {
    buscarU.classList.remove("d-none");
    menu.classList.add("d-none");
}

function buscarUsuario() {
    let input = document.getElementById("input");
    if (input.value != "") {
        let select = document.getElementById("select");
        var tag = false;
        let elusuario;
        usuarios.forEach(usuario => {
            if (Object.values(usuario)[select.value] === input.value) {
                tag = true;
                elusuario = usuario;
            }
        })
        var titulo = document.getElementById("titulo");
        var id = document.getElementById("id");
        var telefono = document.getElementById("telefono");
        var email = document.getElementById("email");
        if (tag) {
            document.getElementById("card").classList.add("card");
            titulo.textContent = elusuario.nombre;
            id.textContent = "ID: " + elusuario.id;
            telefono.textContent = "Telefono: " + elusuario.telefono;
            email.textContent = "Email: " + elusuario.email;
        } else {
            document.getElementById("card").classList.add("card");
            titulo.textContent = "El usuario no existe";
            id.textContent = "";
            telefono.textContent = "";
            email.textContent = "";
        }
    }

}