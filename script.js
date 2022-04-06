const api_url =
	"https://assessment.api.vweb.app/rides";
    const api_url1 ="https://assessment.api.vweb.app/user";
	

    

async function getapi(url,url1) {
	

	const response = await fetch(url);
    const response1 = await fetch(url1);
	
	
	var data = await response.json();
    var data1 = await response1.json();
    if (response && response1) {
		show(data,data1);
	}
	
}

getapi(api_url,api_url1);






function show(data,data1) {
    var mainContainer = document.getElementById("myData");
    var h1 = document.getElementById("h1");
    var div1 = document.createElement("div1");
    div1.innerHTML= "<span class='error'>"+data1.name+"</span>";
    div1.src=data1.url;
    h1.appendChild(div1)
    
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].station_path.length; j++){
            for (var k = 1; k <6; k++)  {
            if ( data[i].station_path[j] == data1.station_code+k || data[i].station_path[j] == data1.station_code-k ) {
        var div = document.createElement("div");
        div.innerHTML = "<div class='error1'>"+'ID: ' + data[i].id +'\n'+ '<br/>Origin station code:' + data[i].origin_station_code+'<br/>station_path' +data[i].station_path+'<br/>destination_station_code'+ data[i].destination_station_code+'<br/>date'+data[i].date+data1.station_code+"</div>";
        mainContainer.appendChild(div);
      }}}}
}
 

