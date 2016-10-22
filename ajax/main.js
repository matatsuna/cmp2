$(function(){
    $.ajax({
        url:"get_xml.php?url=http://weather.livedoor.com/forecast/webservice/json/v1?city=130010",
        dataType:"json",
        success:function(data){
                    console.log(data);
                    console.log(data.pinpointLocations[0]);
                    console.log(data.pinpointLocations[0].link);
                    $("#title").html('<h1>'+data.title+'</h1>');
                    $("#today").html('<h3>'+data.forecasts[0].date+'</h3>'+'<p>'+data.forecasts[0].telop+'</p>');
                    $("#link").html('<a href="'+data.pinpointLocations[13].link+'">'+data.pinpointLocations[13].name+'</a>');
                    $("#text").html('<p>'+data.description.text+'</p>');
        }
    });
});