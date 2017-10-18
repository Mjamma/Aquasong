$(document).ready(function(){



$.getJSON("https://api.airtable.com/v0/appUaVSVNQAtg5zCZ/musics?api_key=key6yvIqJXqO2yLCB",
function(data) {
  console.log(data);
  $.each(data.records,function(key,val) {
    console.log(val.fields["hashtags"]);
    if(val.fields["hashtags"]!=null){
      $('<li>'+val.fields["hashtags"]+'</li>').appendTo('#musiques');
    }
  })
});




});
