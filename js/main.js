getData = (ente) => {
    axios.get('https://api.datos.gob.mx/v1/calidadAire')
    .then(res=>res.data)
    .then(data=>{
        const datos = data.results;
        console.log(datos);
        var table = document.getElementById("content-table");
        table.innerHTML = "<tr>\
        <th>id</th>\
        <th>entidad</th>\
        <th>Latitud</th>\
        <th>Longitud</th>\
        <th>Fecha de calculo</th>\
        <th>Escala</th>\
        <th>Valor</th>\
    </tr>"
        console.log(ente);
        for ( var i in datos) {
            if(ente == '') {
                table.innerHTML = table.innerHTML + "<tr>\
                                                    <td>"+datos[i]['_id']+"</td>\
                                                    <td>"+datos[i].stations[0].name+"</td>\
                                                    <td>"+datos[i].stations[0].location["lat"]+"</td>\
                                                    <td>"+datos[i].stations[0].location["lon"]+"</td>\
                                                    <td>"+datos[i].stations[0].indexes[0].calculationTime+"</td>\
                                                    <td>"+datos[i].stations[0].indexes[0].scale+"</td>\
                                                    <td>"+datos[i].stations[0].indexes[0].value+"</td>\
                                                </tr>";
            }else if (ente != '') {
                if(datos[i].stations[0].name == ente) {
                    table.innerHTML = table.innerHTML + "<tr>\
                                                        <td>"+datos[i]['_id']+"</td>\
                                                        <td>"+datos[i].stations[0].name+"</td>\
                                                        <td>"+datos[i].stations[0].location["lat"]+"</td>\
                                                        <td>"+datos[i].stations[0].location["lon"]+"</td>\
                                                        <td>"+datos[i].stations[0].indexes[0].calculationTime+"</td>\
                                                        <td>"+datos[i].stations[0].indexes[0].scale+"</td>\
                                                        <td>"+datos[i].stations[0].indexes[0].value+"</td>\
                                                    </tr>";
                }
            }
        }
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

