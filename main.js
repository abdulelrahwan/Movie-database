//example use of the api

function apiCall(){
  x=document.getElementById("form1");
  show=x.elements["tvshow"].value;
  season=x.elements["seasons"].value;

  $.getJSON('https://www.omdbapi.com/?apikey=c4fc25b5&t=' + encodeURI(show)).then(function(response){
  document.getElementById("list").innerHTML+="<font color=white>"+"<b>"+show+"</b>" + " "  + "     "+ "(" + season + ")" +"<br>"+"</font>";

  var LengthOfEpisodeString = (response.Runtime).replace(' min','');; //inshallah this works lol damn this is smart
  var LengthOfEpisode = parseInt(LengthOfEpisodeString); //oktry it


  asignVariable(0,LengthOfEpisode);

  var image = response.Poster;
  if (image != "N/A"){
    document.getElementById('pic').src=image;
    document.getElementById('pic').style="border-radius:5%"
  }


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

    var timeForShow = time * numEp;
    var daysShow = parseInt(timeForShow/24/60);
    var hoursShow = parseInt(timeForShow/60%24);
    var showTimeString = "<font color=white>"+"       " + String(daysShow) + " days : " + String(hoursShow) + " hours : " + String(timeForShow%60) + " minutes"+"</font>";
    document.getElementById("seriesmin").innerHTML+=showTimeString+"<br>";

    total+=numEp*time;
    var days = parseInt(total/24/60);
    var hours = parseInt(total/60%24);
    var totalString ="<font color=white>" +String(days) + " days : " + String(hours) + " hours : " + String(total%60) + " minutes"+"</font>";
    document.getElementById("total").innerHTML="<font color=white>"+"Total = " + totalString+"</font>";



    numEp=0;
    time=0;
  }
}
