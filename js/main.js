

document.getElementById('btnGuardar').onclick = async function (e) {
    e.preventDefault();

    n = document.getElementById('nombre').value;
    orden = "guardar";
    
    response = await fetch(`/cgi-bin/funciones.cgi`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'nombre':n,
            'orden':orden
        })
    });
    data = await response.text();
    
    document.getElementById('resultado').innerHTML = decodeURI(data);
    
};


document.getElementById('btnCargar').onclick = async function (e) {
    e.preventDefault();

    orden = "cargar";
    
    response = await fetch(`/cgi-bin/funciones.cgi`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'orden':orden
        })
    });
    data = await response.text();
    
    document.getElementById('nombre').value = decodeURI(data);
    
};