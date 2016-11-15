	var volunteer = "";
	var volunteerLocation = "Santa Monica";
	var volunteerDistance = "500";
	var volunteerDate = "";


$('#submitButton').on('click', function(){
	volunteer = $('#volunteerSearch').val().trim();
	volunteerLocation = $('#locationSearch').val().trim(); 
	volunteerDistance = $('#distanceSearch').val().trim();
	volunteerDate = $('#dateSearch').val().trim();
  
console.log("volunteerSearch = " + volunteer);
console.log("volunteerLocation = " + volunteerLocation);
console.log("volunteerDistance = " + volunteerDistance);
console.log("volunteerDate = " + volunteerDate);

return false;
 });
