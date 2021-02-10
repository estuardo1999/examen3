window.addEventListener("load", function () {
    var datosjson;
    datosjson = {
        "Productos": [
            {"Producto": "Xiaomi mi 10 lite", "Precio": 3500},
            {"Producto": "Samsung S21s", "Precio": 10500},
            {"Producto": "Motorola RAZR", "Precio": 7500},
            {"Producto": "Iphone 12 Pro Max", "Precio": 12500},
            {"Producto": "Asus Rogue Phone 3", "Precio": 8500},
            {"Producto": "Huawei P40 Pro", "Precio": 6500}
        ]
    };
    
 
    var indice = 0;
    var i = 0;
    var PRODUCTO = {};
    var producvec = [];
    var preciosvec = [];
    var enviadatos = [];

    document.addEventListener("click", function (e) {
        if (e.target.getAttribute("class") == "botonn") {
            indice = parseInt(e.target.getAttribute("id"));
         
            producvec[i] = datosjson.Productos[indice].Producto;
            preciosvec[i] = datosjson.Productos[indice].Precio;

            for (var cont = i; cont < producvec.length; cont++) {
                enviadatos.push({
                    "Producto": producvec[cont],
                    "Precio": preciosvec[cont]
                });
            }
            i++;
            PRODUCTO.enviadatos = enviadatos;
            console.log(JSON.stringify(PRODUCTO));
            localStorage.setItem('VentasGuardadas', JSON.stringify((PRODUCTO)));
        }
    });
});



