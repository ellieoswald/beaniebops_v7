// select first images using unique id
var donImg = document.getElementById('five');

// add event listener to first image so that when it is clicked
donImg.addEventListener('click', function() {
    // make Ajax request to load XML data for Don Quixote book at index 0
    makeRequest('data/artist-data.xml',0);

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
//  AND an index number of the sub-element
function makeRequest(filePath, index) {
    // create XMLHttpRequest object
	var xhr = new XMLHttpRequest();

	// get div and overwrite its content to be empty
	var container = document.getElementById('details');
	container.innerHTML = '';

    // when response has loaded
	xhr.onload = function() {
	    // check if the server status was ok
		if (xhr.status === 200) {

            // THIS PART IS DIFFERENT BECAUSE IT IS PROCESSING XML NOT HTML

            // get XML from the server
			var response = xhr.responseXML;

            // find <artist> elements
			var content = response.getElementsByTagName('artist');

			// declare variables that will hold new HTML
			var name, description;


			// create a new <h2> element
			title = document.createElement('h2');
			// create a new text node with "title" value from sub-element and append to <h3> element
			title.appendChild(document.createTextNode(content[index].getElementsByTagName("name")[0].childNodes[0].nodeValue));
			//  append <h2> element to div
			container.appendChild(name);


			// create a new <p> element
      description = document.createElement('p');
      // create a new text node with "description" value from sub-element and append to <p> element
			description.appendChild(document.createTextNode(content[index].getElementsByTagName("description")[0].childNodes[0].nodeValue));
			//  append <p> element to div
			container.appendChild(description);
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
