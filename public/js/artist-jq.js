// select Don Quixote image and add jQuery event when clicked
$('#brides').on('click',  function() {
    // use .fadeTo() method to change the opacities of all images to 0.5
    $('img').fadeTo("fast", "0.5");

    // use .fadeTo() method to change the opacities of all images to 1
    $(this).fadeTo("slow" , 1);

    // use .load method to loads new HTML content into the selected element with .fadeIn() effect
    $("#details").load('data/artist-data.html').hide().fadeIn("slow"); 
});
