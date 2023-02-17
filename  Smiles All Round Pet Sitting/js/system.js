{
  let myButton = document.getElementById("search");
}
{
  var modal = document.getElementById('id01');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*
function audio() {
  document.getElementById('btn_audio').currentTime = 0; //button sounds
  document.getElementById('btn_audio').play(); //play sound when push the button
}

  $(document).ready(function(){
    $('.slider').bxSlider({ //slider photo function
        auto: true,
        pause: 5000,
    });
});
*/
