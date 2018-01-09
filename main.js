//example use of the api

function apiCall(){
  x=document.getElementById("form1");
  show=x.elements["tvshow"].value;
  season=x.elements["seasons"].value;
  $.getJSON('https://www.omdbapi.com/?apikey=c4fc25b5&t=' + encodeURI(show)).then(function(response){
  document.getElementById("list").innerHTML+=show + " "  + "     "+ "(" + season + ")" +"<br>";
  console.log(response.totalSeasons);
})
}
