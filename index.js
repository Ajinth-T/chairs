$(document).ready(function() {
  $(".title").fadeIn(1200);
  $(".img1").fadeIn(1200);
});


$(document).ready(function(){
  $("#home").on("click", function(){
    location.reload();
  
  });
});

$(document).ready(function() {
    $('#menu-products').hover(
      function() {
        $('#dropdown-products').stop(true, true).slideDown('fast');
      },
      function() {
        $('#dropdown-products').stop(true, true).slideUp('fast');
      }
    );
  });

  $(document).ready(function() {
    // Function to open the popup
    function openPopup() {
      $('#popup').fadeIn();
    }
  
    // Function to close the popup
    function closePopup() {
      $('#popup').fadeOut();
    }
    
  
    // Attach event listener to all "Purchase" buttons
    $('.buy').on('click', openPopup);
  
    // Attach event listener to the close button
    $('.close').on('click', closePopup);
  
    // Attach event listener to the close-popup button
    $('.close-popup').on('click', closePopup);
  
    // Optionally, handle confirm button click
    $('#confirmPurchase').on('click', function() {
      alert('Purchase confirmed!'); // Replace with your purchase logic
      closePopup();
    });
  });
  


  $(document).ready(function() {
    // Smooth scrolling for navigation links
    $('nav a[href^="#"]').on('click', function(event) {
      // Prevent the default action
      event.preventDefault();
  
      // Get the target element's ID from the href attribute
      var target = $(this).attr('href');
  
      // Animate the scroll to the target element
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 1000); // Duration of the scroll animation in milliseconds
    });
  
  
    
  });
  
  
