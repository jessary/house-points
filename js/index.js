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
     var gryffindorPoints = getPoints(obj[i].gsx$_chk2m.$t);
     var slytherinName = obj[i].gsx$slytherin.$t;
     var slytherinPoints = getPoints(obj[i].gsx$_ckd7g.$t);
     var ravenclawName = obj[i].gsx$ravenclaw.$t;
     var ravenclawPoints = getPoints(obj[i].gsx$_cpzh4.$t);
     var hufflepuffName = obj[i].gsx$hufflepuff.$t;
     var hufflepuffPoints = getPoints(obj[i].gsx$_cyevm.$t);
     
     entry += "<tr>";
     entry += "<td class='name'>" + gryffindorName + "</td>";
     entry += "<td class='points'>" + gryffindorPoints + "</td>";
     entry += "<td class='name'>" + slytherinName + "</td>";
     entry += "<td class='points'>" + slytherinPoints + "</td>";
     entry += "<td class='name'>" + hufflepuffName + "</td>";
     entry += "<td class='points'>" + ravenclawPoints + "</td>";
     entry += "<td class='name'>" + ravenclawName + "</td>";
     entry += "<td class='points'>" + hufflepuffPoints + "</td>";
     entry += "</tr>";
     
   }
   container.html(entry);
 }
);

}

update_trackdata();

var interval = setInterval(update_trackdata, 6000);