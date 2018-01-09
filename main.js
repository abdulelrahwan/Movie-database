//example use of the api

function apiCall(){
  x=document.getElementById("form1");
  y=x.elements["tvshow"].value;
  $.getJSON('https://www.omdbapi.com/?apikey=c4fc25b5&t=' + encodeURI(y)).then(function(response){
  document.getElementById("list").innerHTML+=y + "<br>";
  console.log(response.totalSeasons);
})
}
