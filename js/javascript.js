

$('#submitButton').on('click', function(){
	var volunteer = $('#volunteerSearch').val().trim();
	var volunteerLocation = $('#locationSearch').val().trim(); 
	var volunteerDistance = $('#distanceSearch').val().trim();
	var volunteerDate = $('#dateSearch').val().trim();
  
console.log("volunteerSearch = " + volunteer);
console.log("volunteerLocation = " + volunteerLocation);
console.log("volunteerDistance = " + volunteerDistance);
console.log("volunteerDate = " + volunteerDate);

return false;
 });
