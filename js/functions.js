window.onload = function(){

	var map;

	function initialize(){
		var mapProp = {
 			center: new google.maps.LatLng(-27.648598,-48.577423),
			scrollwheel:false,
			zoom:12,
			maptypeId:google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}

	function addMarker(lat,long,icon,content){
		var LatLng = {'lat':lat,'lng':long};

		var marker = new google.maps.Marker({
			position:LatLng,
			map:map,
			icon:icon

		});



		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		});

		if(click == true){
			google.maps.event.addListener(marker,'click',function(){
				infoWindow.open(map,marker);
			});

		}else{
			infoWindow.open(map,marker);
		}
		
	}

	initialize();

	var conteudo = '<p style="color:black;font-size:13px;padding:10px 0;border-bottom:1px solid black;">Meu endereço</p>'
	addMarker(-27616637,-485923228,'',conteudo,true);


	setTimeout(function(){
		map.panTo({'lat':-23.550520,'lng':-46633309});

	},2000);




}