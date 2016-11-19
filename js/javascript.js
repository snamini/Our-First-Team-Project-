	var volunteer = "";
	var volunteerLocation = "Santa Monica";
	var volunteerDistance = "500";
	var volunteerDate = "";
$(document).ready(function() {
    console.log("ready");
    
    var volunteer = "";
        var volunteerLocation = "Santa Monica";
        var volunteerDistance = "500";
        var volunteerDate = "";

    $('#submitButton').on('click', function(){
        volunteer = $('#volunteerSearch').val().trim();
        volunteerLocation = $('#locationSearch').val().trim(); 
        volunteerDistance = $('#distanceSearch').val().trim();

        console.log("volunteer Search " + volunteer);
        console.log("volunteer Location = " + volunteerLocation);
        console.log("volunteer Distance = " + volunteerDistance);
        
            $('#volunteerSearch').val("");
            $('#locationSearch').val("");
            $('#distanceSearch').val("");

    return false;
//        
     
    });
    
    
});



//$.post("index.html", function(data, status){
//    alert("Data: " + data + "\nStatus: " + status);
//});

//------APPLICATION FORM------

function validateForm() {
    var firstName = document.getElementById('data_12').value.trim();
    console.log(firstName);
    
      var lastName = document.getElementById('data_13').value.trim();
    console.log(lastName);
    
      var email = document.getElementById('data_11').value.trim();
    console.log(email);
    
      var phone = document.getElementById('data_4').value.trim();
    console.log(phone);
    
    
    var comment = document.getElementById('data_9').value.trim();
    console.log(comment);
    
//    check boxes
    
//    var firstName = document.getElementById('data_8_0').val();
//    console.log(firstName);
//    
//    var firstName = document.getElementById('data_8_1').val();
//    console.log(firstName);
//    
//      var firstName = document.getElementById('data_8_2').val();
//    console.log(firstName);
//    
//    var firstName = document.getElementById('data_8_3').val();
//    console.log(firstName);
//    
//        var firstName = document.getElementById('data_8_4').val();
//    console.log(firstName);
//    
//        var firstName = document.getElementById('data_8_5').val();
//    console.log(firstName);
//    
//        var firstName = document.getElementById('data_10_0').val();
//    console.log(firstName);
    
    
    
    if (isEmpty(document.getElementById('data_12').value.trim())) {
        console.log(document.getElementById('data_12').value.trim())
        alert('First name is required!');
        return false;
    }
    if (isEmpty(document.getElementById('data_13').value.trim())) {
        alert('Last name is required!');
        return false;
    }
    if (!validateEmail(document.getElementById('data_11').value.trim())) {
        alert('Email must be a valid email address!');
        return false;
    }
    
    $('#data_12').val("");
    $('#data_12').val("");
    $('#data_13').val("");
    $('#data_11').val("");
    $('#data_4').val("");
    $('#data_9').val("");
    
    
//    clearing check boxes
//    $('#data_8_0').val("");
//    $('#data_8_1').val("");
//    $('#data_8_2').val("");
//    $('#data_8_3').val("");
//    $('#data_8_4').val("");
//    $('#data_8_5').val("");
//    
//    $('#data_10_0').val("");
    
    return false;
}
    
function isEmpty(str) { 
    return (str.length === 0 || !str.trim()); 
}
    
function validateEmail(email) {
var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
return isEmpty(email) || re.test(email);
}
    

    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });




//-------------MAP------------------
    // Disable Google Maps scrolling
    // See http://stackoverflow.com/a/25904582/1607849
    // Disable scroll zooming and bind back the click event
    var onMapMouseleaveHandler = function(event) {
        var that = $(this);
        that.on('click', onMapClickHandler);
        that.off('mouseleave', onMapMouseleaveHandler);
        that.find('iframe').css("pointer-events", "none");
    }
    var onMapClickHandler = function(event) {
            var that = $(this);
            // Disable the click handler until the user leaves the map area
            that.off('click', onMapClickHandler);
            // Enable scrolling zoom
            that.find('iframe').css("pointer-events", "auto");
            // Handle the mouse leave event
            that.on('mouseleave', onMapMouseleaveHandler);
        }
        // Enable map zooming with mouse scroll when the user clicks the map
    $('.map').on('click', onMapClickHandler);


    var inputOne = "volunteer" + " " + volunteerLocation + " " + volunteer;
      // var inputTwo = "Los Angeles";
      // var inputThree = "kids";
      // var inputTwo = volunteerLocation;
      // var imputThree = volunteer;
      var map;
      var infowindow;

      function initMap() {
        // var pyrmont = {lat: -33.867, lng: 151.195};
        var santaMonica = {lat: 34.024212, lng: -118.496475}
        map = new google.maps.Map(document.getElementById('map'), {
          center: santaMonica,
          zoom: 15
        });

        // ##############################################
        // ##############################################
        // ##############################################
        var input = document.getElementById('pac-input');
        console.log("input",input);
        // var input = $('#otherinput').val();
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        // ##############################################
        // ##############################################
        // ##############################################


        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
         location: santaMonica,
          radius: volunteerDistance,
          keyword: inputOne
        }, callback);
      }

      function callback(results, status) {
        console.log("results",results);
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            // second ajax call then create the marker with new results
            createMarker(results[i]);
          }
        }
      }

      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }
      $(document).ready(function() {   
//$('#testAPI').on('click', function() {   
   var output = $.ajax({
   url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', 
   type: 'GET', 
   //data: {}, // Additional parameters here
   dataType: 'json', 
   // success: function(data) {
//      //
   // },
   //error: function(err) { alert(err); },
   beforeSend: function(xhr) {
   xhr.setRequestHeader("X-Mashape-Authorization", "jlvlgCFI3KmshpIAwbh0vnlA2hdMp1VXJGujsnf6KACJBd14HL"); 
   }
})

         .done(function(response) {
           var results = response;
           var quote = results.quote + "- " + results.author;
           console.log("results = "+ quote);
           //console.log()
           $("#quote").html(quote);
       });  
   return false;
});