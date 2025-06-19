
document.getElementById("form-negocio").addEventListener("submit", function(e) {
    e.preventDefault();

    const negocio = {
        nombre: document.getElementById("nombre").value,
        direccion: document.getElementById("direccion").value,
        telefono: document.getElementById("telefono").value,
        descripcion: document.getElementById("descripcion").value,
        id_rubro_negocio: parseInt(document.getElementById("id_rubro_negocio").value)
    };
    // console.log(negocio); // Llega la info bien
    fetch("/negocio", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(negocio)
    })
    .then(response => response.json())
    .then(data => {
        // console.log("Negocio creado(crear_negocio:22):", data); // La info llega bien
        document.getElementById("resultado").innerText = "Negocio creado correctamente! ID: " + data.id_negocio;
    })
    .catch(err => {
        console.error("Error:", err);
        document.getElementById("resultado").innerText = "Error al crear negocio";
    });
});
