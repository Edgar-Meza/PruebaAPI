getData = (ente) => {
    axios.get('https://api.datos.gob.mx/v1/calidadAire')
    .then(res=>res.data)
    .then(data=>{
        const datos = data.results;
        console.log(datos);
        var table = document.getElementById("content-table");
        table.innerHTML = "<thead><tr>\
        <th>id</th>\
        <th>entidad <i class='bi bi-sort-alpha-down'></i></th>\
        <th>Latitud <i class='bi bi-sort-alpha-down'></i></th>\
        <th>Longitud <i class='bi bi-sort-alpha-down'></i></th>\
        <th>Fecha de calculo <i class='bi bi-sort-alpha-down'></i></th>\
        <th>Escala <i class='bi bi-sort-alpha-down'></i></th>\
        <th>Valor <i class='bi bi-sort-alpha-down'></i></th>\
    </tr></thead>"
        console.log(ente);
        var rows;
        for ( var i in datos) {
            if(ente == '') {
                var rowss =  "<tr>\
                                                    <td>"+datos[i]['_id']+"</td>\
                                                    <td>"+datos[i].stations[0].name+"</td>\
                                                    <td>"+datos[i].stations[0].location["lat"]+"</td>\
                                                    <td>"+datos[i].stations[0].location["lon"]+"</td>\
                                                    <td>"+datos[i].stations[0].indexes[0].calculationTime+"</td>\
                                                    <td>"+datos[i].stations[0].indexes[0].scale+"</td>\
                                                    <td>"+datos[i].stations[0].indexes[0].value+"</td>\
                                                </tr>";
                rows = rows +rowss;
            }else if (ente != '') {
                if(datos[i].stations[0].name == ente) {
                    var rowss = "<tr>\
                                                        <td>"+datos[i]['_id']+"</td>\
                                                        <td>"+datos[i].stations[0].name+"</td>\
                                                        <td>"+datos[i].stations[0].location["lat"]+"</td>\
                                                        <td>"+datos[i].stations[0].location["lon"]+"</td>\
                                                        <td>"+datos[i].stations[0].indexes[0].calculationTime+"</td>\
                                                        <td>"+datos[i].stations[0].indexes[0].scale+"</td>\
                                                        <td>"+datos[i].stations[0].indexes[0].value+"</td>\
                                                    </tr>";
                    rows = rows +rowss;
                }
            }
        }
        table.innerHTML = table.innerHTML +"<tbody>"+rows+"</tbody>";
    })
}
buscar = () =>{
    var inp = document.getElementById("search");
    var btn = document.getElementById("btn-search");
    var input = inp.value;
    console.log(input);
    getData(input);
}

getData('');

$(function(){
    $('#content-table').tablesorter(); 
});