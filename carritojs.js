window.addEventListener("load", function () {

    var total = 0;
    var lista = [];
    var historial = localStorage.getItem('VentasGuardadas');
    lista = JSON.parse(historial);
    var fila = document.getElementById("Mitabla");//obtencion del body de la tabla del html
    
    document.getElementById("ventas").addEventListener("click",function(){
        localStorage.setItem('Historial',JSON.stringify((lista)));
    });

    for (var x = 0; x < historial.length; x++)
    {
        total += parseInt(lista.enviadatos[x].Precio);

        fila.innerHTML += '<tr> <td>' + lista.enviadatos[x].Producto + '</td><td>' + lista.enviadatos[x].Precio + '</td><td>' + lista.enviadatos[x].Precio + '</td></tr>';
        document.getElementById("Total").innerHTML = "Total: " + total;
    }

});

