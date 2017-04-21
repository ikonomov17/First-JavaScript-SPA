import 'jquery';

var yql = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Ffinance.yahoo.com%2Fwebservice%2Fv1%2Fsymbols%2Fallcurrencies%2Fquote%3Fformat%3Djson'&format=json&diagnostics=true&callback="

const utcTime = new Date();
const utcString = `${utcTime.getUTCDate} ${utcTime.getUTCDay} ${utcTime.getUTCFullYear} ${utcTime.getUTCHours}:${utcTime.getUTCMinutes}:${utcTime.getUTCSeconds}`;
$('body').append($('<h3/>').addClass('container-fluid navbar-fixed-top').attr('id','clock').text('Current UTC Time: ' + utcTime.toUTCString()));

function generateTable(jsonData){
    let table = $('<table></table>');
    table.addClass('table table-striped');
    const tHead = `<thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Symbol</th>
                            <th>Ts</th>
                            <th>Type</th>
                            <th>UTC Time</th>
                            <th>Volume</th>
                        </tr>
                    </thead>`;
    table.append(tHead);
   
    var tbody = $('<tbody/>');
    jsonData = JSON.parse(jsonData.query.results.body);
    let objects = Array.from(jsonData.list.resources);
    console.log(objects);

    objects.forEach((obj) => {
        let row = $('<tr/>');
        
        var allFields = obj.resource.fields;

        $.each(allFields, function(i,v){
            var curVal = $('<td/>').text(v);
            row.append(curVal);
        });
        
        tbody.append(row);
        /*let name = $('<td/>');
        name.text(obj.resource.fields.name);
        let jsonType = $('<td/>');
        jsonType.text(obj.resource.fields.type);
        row.append(name);
        row.append(jsonType);
        table.append(row);*/
    });
    table.append(tbody);
    $('#data').append(table);
}

$.when($.getJSON(yql).done(function(data){
        //console.log(JSON.parse(data.query.results.body));
        generateTable(data);
    }));


//object->list->resources-> има два масива от обекти -> 
//всеки обект има -> resource -> fields -> name/price/symbol/type/utctime