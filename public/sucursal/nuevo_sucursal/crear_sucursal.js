
document.getElementById("form-sucursal").addEventListener("submit", function(e) {
    e.preventDefault();

    const sucursal = {
        nombre: document.getElementById("nombre").value,
        direccion: document.getElementById("direccion").value,
        telefono: document.getElementById("telefono").value,
        descripcion: document.getElementById("descripcion").value,
        id_rubro_sucursal: parseInt(document.getElementById("id_rubro_sucursal").value)
    };
    // console.log(sucursal); // Llega la info bien
    fetch("/sucursal", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(sucursal)
    })
    .then(response => response.json())
    .then(data => {
        // console.log("sucursal creado(crear_sucursal:22):", data); // La info llega bien
        document.getElementById("resultado").innerText = "sucursal creado correctamente! ID: " + data.id_sucursal;
    })
    .catch(err => {
        console.error("Error:", err);
        document.getElementById("resultado").innerText = "Error al crear sucursal";
    });
});
