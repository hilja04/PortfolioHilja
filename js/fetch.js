//Tässä fetchaan json dataa omasta githubista
fetch('https://api.github.com/users/hilja04/repos')
     .then(function (response) {
         return response.json();
    })

    .then(function (responseJson) {

        repot(responseJson);

    })
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML =
                "<p>Tietoa ei pystytä hakemaan</p>";
    })
        
function repot(data){
    let teksti = "";
    teksti += "<h2> Repositories: </h2>";

    for (var i = 0; i < data.length; i++) {
        teksti += "<span>" + data[i].name +": <a href='" + data[i].html_url + "' target='_blank'>Open repository</a>" +"<br></span>";        
    }

         
    document.getElementById("vastaus").innerHTML = teksti;
}

