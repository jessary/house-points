function update_trackdata(){
  
  function getPoints(userPoints){
   if ( userPoints === 'undefined' || userPoints === 0 || userPoints === null || !userPoints){
     var point = 0;
     return point;
   } else {
     var point = userPoints;
     return point;
   }
  }
  
  function renderUserPoints(){
    
  }
  

// ID of the Google Spreadsheet
 var spreadsheetID = "1PXXAKRHnjiTc_T9uINjyv0rXMobueWWynN5lh4Zt7Vs";
 
// Make sure it is public or set to Anyone with link can view 
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
 
//connecting to spreadsheet and then parsing the data


 $.getJSON(url, function(data) {
   var obj = data.feed.entry;
   var num = obj.length;

   $('#gryff-score').text( obj[0].gsx$gryffindor.$t );
   $('#sly-score').text( obj[0].gsx$slytherin.$t );
   $('#rav-score').text( obj[0].gsx$ravenclaw.$t );
   $('#huff-score').text( obj[0].gsx$hufflepuff.$t );

   var entry="";
   var container = $('.leaderboard-names');
   var ticker = $('#ticker');
   
   for (var i = 2; i < 7; i++) {
     
     var gryffindorName = obj[i].gsx$gryffindor.$t;
     var gryffindorPoints = obj[i].gsx$_cpzh4.$t;
     var slytherinName = obj[i].gsx$slytherin.$t;
     var slytherinPoints = obj[i].gsx$_chk2m.$t;
     var ravenclawName = obj[i].gsx$hufflepuff.$t;
     var ravenclawPoints = obj[i].gsx$_ckd7g.$t;
     var hufflepuffName = obj[i].gsx$ravenclaw.$t;
     var hufflepuffPoints = obj[i].gsx$_cyevm.$t;
     
     entry += "<tr><td>";
     entry += "<div class='name'>" + gryffindorName + "</div>";
     entry += "<div class='points'>" + gryffindorPoints + "</div>";
     entry += "<td><div class='name'>" + slytherinName + "</div>";
     entry += "<div class='points'>" + slytherinPoints + "</div></td>";
     entry += "<td><div class='name'>" + hufflepuffName + "</div>";
     entry += "<div class='points'>" + ravenclawPoints + "</div></td>";
     entry += "<td><div class='name'>" + ravenclawName + "</div>";
     entry += "<div class='points'>" + hufflepuffPoints + "</div></td";
     entry += "</tr>";
     
   }
   container.html(entry);
 }
);

}

update_trackdata();

var interval = setInterval(update_trackdata, 6000);