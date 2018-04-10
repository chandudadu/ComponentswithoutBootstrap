
$(document).ready(function(){
	let myFirstModal = $("#myfirstModal");
// Get the button that opens the modal
let myFirstBtn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
myFirstBtn.onclick = function() {
	for(i=0;i<myFirstModal.length;i++)
	{
		myFirstModal[i].style.display = "block";
}
}	
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	for(i=0;i<myFirstModal.length;i++)
	{
		myFirstModal[i].style.display = "none";
}

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	for(i=0;i<myFirstModal.length;i++)
	{
    if (event.target == myFirstModal[i]) {
		myFirstModal[i].style.display = "none";
}
    }
}
});