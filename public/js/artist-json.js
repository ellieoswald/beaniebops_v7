// select first image using unique id
var donImg = document.getElementById('volbeat');

// add event listener to first image so that when it is clicked
donImg.addEventListener('click', function() {
    // make Ajax request to load JSON data for Don Quixote book at index 0
    makeRequest('data/artist-data.json',0);

    // call function to lower opacities of all images
    deselectImgs();

    // change opacity of current image to 1 so it looks like it is selected
    this.style.opacity = "1";
}, false);


// function that changes opacitiy of all images on the web page
function deselectImgs() {
    // get a Nodelist of all images on web page using <img> tag
    var imgs = document.getElementsByTagName('img');

    // loop through each item in the Nodelist to access each image
    for (var i = 0; i < imgs.length; i++){
        // change opacity of current image to 0.5 so it looks like it is deselected
        imgs[i].style.opacity = "0.5";
    }
}


// function that triggers your Ajax request to load the data from a given XML file
//  AND an index number of the object
function makeRequest(filePath, index) {
    // create XMLHttpRequest object
	var xhr = new XMLHttpRequest();

    // when readystate changes
	xhr.onload = function() {
	    // check if the server status was ok
		if (xhr.status === 200) {

            // get JSON data from the server using XMLHttpRequest object's responseText property
			responseObject = JSON.parse(xhr.responseText);

			// BUILD UP STRING WITH NEW CONTENT
			var newContent = '';

			// add <h3> element with book title
			newContent += '<h2>' + responseObject.artist[index].name + '</h2>';

			// add <p> element with book description
      newContent += '<p>' + responseObject.artist[index].description + '</p>';

            // update the div to contain  new HTML that is retrieved
			document.getElementById('details').innerHTML = newContent;
		}
	};

    // prepare the request
    //   HTTP GET to send the request
    //   Path to HTML file
    //   true to specify that the request is asynchronous
	xhr.open('GET',filePath,true);

	// send the request
	//  null because there is no data to send
	xhr.send(null);
}
