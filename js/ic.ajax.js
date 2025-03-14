/*
Abstract : Ajax Page Js File
File : ic.ajax.js
#CSS attributes: 
	.icForm : Form class for ajax submission. 
	.icFormMsg  : Div Class| Show Form validation error/success message on ajax form submission

#Javascript Variable
.icRes : ajax request result variable
.icFormAction : Form action variable
.icFormData : Form serialize data variable

*/

function contactForm()
{
	window.verifyRecaptchaCallback = function (response) {
        $('input[data-recaptcha]').val(response).trigger('change');
    }

    window.expiredRecaptchaCallback = function () {
        $('input[data-recaptcha]').val("").trigger('change');
    }
	'use strict';
	var msgDiv;
	$(".icForm").submit(function(e)
	{
		e.preventDefault();	//STOP default action
		$('.icFormMsg').html('<div class="gen alert alert-success">Submiting..</div>');
		var icFormAction = $(this).attr('action');
		var icFormData = $(this).serialize();
		
		$.ajax({
			method: "POST",
			url: icFormAction,
			data: icFormData,
			dataType: 'json',
			success: function(icRes){
				if(icRes.status == 1){
					msgDiv = '<div class="gen alert alert-success">'+icRes.msg+'</div>';
				}
				
				if(icRes.status == 0){
					msgDiv = '<div class="err alert alert-danger">'+icRes.msg+'</div>';
				}
				$('.icFormMsg').html(msgDiv);
				$('.icForm')[0].reset();
                grecaptcha.reset();
			}
		})
	});
	
	
	setInterval(function(){
		$('.icFormMsg .alert').hide(1000);
	}, 10000);
	
	
	/* This function is for mail champ subscription START*/
	
	$(".icSubscribe").submit(function(e)
	{
		e.preventDefault();	//STOP default action
		var icFormAction = $(this).attr('action');
		var icFormData = $(this).serialize();
		$.ajax({
			method: "POST",
			url: icFormAction,
			data: icFormData,
			dataType: 'json',
		  success: function(icRes) {
			if(icRes.status == 1){
				msgDiv = '<p style="color: #34A853">'+icRes.msg+'</p>';
			}
			if(icRes.status == 0){
				msgDiv = '<p style="color: #EA4335">'+icRes.msg+'</p>';
			}
			$('.icSubscribeMsg').html(msgDiv);
			$('.icSubscribe')[0].reset();
		  }
		})
	});
	
	setInterval(function(){
		$('.icSubscribeMsg p').hide(1000);
	}, 5000);
	
	/* This function is for mail champ subscription END*/
	
}



/* google map function custom */
function init_map() {
	var myOptions = {
		zoom: 10,
		center: new google.maps.LatLng(51.5073509, -0.12775829999998223),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		// This is where you would paste any style found on Snazzy Maps.
		styles: [ 
		{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},
		{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
		{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
		{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
		{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
		{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},
		{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
		{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},
		{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},
		{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},
		{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},
		{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
		{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}
		]
	};
	/* Let's also add a marker while we're at it */
	var map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
	marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(51.5073509, -0.12775829999998223)
	});
	
	/* marker on click show infowindow */
	infowindow = new google.maps.InfoWindow({
		content: '<strong>Title</strong><br>London, United Kingdom<br>'
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
	});
}


if($("#gmap_canvas").length > 1) {
	google.maps.event.addDomListener(window, 'load', init_map);
}



jQuery(document).ready(function() {
    'use strict';
	contactForm();
})	