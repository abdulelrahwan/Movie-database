//example use of the api

function apiCall(){
  x=document.getElementById("form1");
  show=x.elements["tvshow"].value;
  season=x.elements["seasons"].value;

  $.getJSON('https://www.omdbapi.com/?apikey=c4fc25b5&t=' + encodeURI(show)).then(function(response){
  document.getElementById("list").innerHTML+=show + " "  + "     "+ "(" + season + ")" +"<br>";

  var LengthOfEpisodeString = (response.Runtime).replace(' min','');; //inshallah this works lol damn this is smart
  var LengthOfEpisode = parseInt(LengthOfEpisodeString); //oktry it


  asignVariable(0,LengthOfEpisode);





  })

  var numEp=0;
  var numberofep=0;
  var counter=1;
  for(i=1; i<=season;i++){


    $.getJSON('https://www.omdbapi.com/?apikey=c4fc25b5&t=' + encodeURI(show) +"&season="+i ).then(function(response){
      numEp+=response.Episodes.length;



      if(season==counter){
        asignVariable(numEp,0);
      }

      counter++;

    })
  }
}

var time=0;
var numEp=0;
var total=0;

function asignVariable(data,runtime){


  numEp+= data;
  time+=runtime;

  if(numEp!=0 && time!=0){
<<<<<<< HEAD
    document.getElementById("seriesmin").innerHTML+=time*numEp+" minutes"+"<br>";
    total+=numEp*time;
    document.getElementById("total").innerHTML="Total=" +total + " minutes";
=======
    document.getElementById("seriesmin").innerHTML+=time*numEp+"<br>";
    total+=numEp*time;
    document.getElementById("total").innerHTML="Total=" +total;
>>>>>>> a9e740a075507a1f59a5c3441dd390bfc3945a31
    numEp=0;
    time=0;
  }
}
