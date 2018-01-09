function apiCall(){
  $.getJSON('https://www.omdbapi.com/?apikey=c4fc25b5&t=' + encodeURI("Game of thrones")).then(function(response){
  console.log(response.totalSeasons);
})
}

apiCall();
