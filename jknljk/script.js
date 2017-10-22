$(document).ready(function(){

alert("Welcome on your Bubble");

$(".button").click(function(){
  $("header").toggle(1000);
  });


$.getJSON("https://api.airtable.com/v0/appUaVSVNQAtg5zCZ/musics?api_key=keyLH4k6k9jy82d6c", function(data) {
$.each(data.records, function(key,val){

$('input[name=musiqueDuMatin]');
$('<li>'+val.fields.title+'</li>').appendTo('#musiques');




$("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"'&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#musiques');


});
}
);
});
