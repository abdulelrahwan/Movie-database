//example use of the api

function apiCall(){
  $.getJSON('https://www.omdbapi.com/?apikey=c4fc25b5&t=' + encodeURI("Prison Break")).then(function(response){
  console.log(response.totalSeasons);
})
}

apiCall();
