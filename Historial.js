window.addEventListener("load",function(){

    
    var total=0;
    var lista=[];//lista que nos para almacenar el JSON
    var historial=localStorage.getItem('Historial');//Obteniendo datos del local storage con el nombre que le pusimos
    lista=JSON.parse(historial);//convirtiendo a JSON los datos obtenidos, y almacenados en "lista"
    var fila=document.getElementById("Mitabla");//obtencion del body de la tabla del html

    for(var x=0;x<historial.length;x++)//recorriendo el JSON
     {
        total+=parseInt( lista.enviadatos[x].Precio);
      
        //Ingresando los datos a la tabla
        fila.innerHTML+='<tr> <td>'+lista.enviadatos[x].Producto+'</td><td>'+ lista.enviadatos[x].Precio +'</td><td>'+lista.enviadatos[x].Precio+ '</td></tr>';
        document.getElementById("Total").innerHTML="Total: "+total;
    }
});