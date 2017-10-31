//When the Dom is ready run the function to set carousel options
$(document).ready(function() {

    $('#quote-carousel').carousel({
        pause: true,
        interval: 8000
    });

});





//Creating the smooth scrolling effect for the page
$(".smooth-scroll").click(function (event) {
    event.preventDefault();
    $('html,body').animate({scrollTop: $(this.hash).offset().top}, 900);
    document.activeElement.blur();

});

// Collapse the menu when a link is selected on mobile
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});


// Create Function to validate form before it submits
$(function() {
    $('.error').hide();

    $("#myForm").on('submit', function(e){
        // Make sure to reset the visibility of the error message each attempt
        $('.error').hide();

        // Initialize form variables
        var name = $('#name').val(),
            email = $('#email').val(),
            msg = $('#message').val(),
            testEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



        if (name === '') {
            $('#name-error').show();
            $('#name').focus();
            return false;
        }

        if (email === '') {
            $('#email-error').show();
            $('#email').focus();
            return false;

        }
        if (!(testEmail.test(email))) {
            $('#email-invalid').show();
            $('#email').focus();
            return false
        }


        if (msg === '') {
            $('#message-error').show();
            $('#message').focus();
            return false;

        }

        var dataString = 'name='+ name + '&email=' + email + '&message=' + msg;
        alert (dataString);
        $.ajax({
            type: "POST",
            url: "contactform.php",
            data: dataString,
            success: function() {
                $('#contact_form').html("<div id='success'></div>");
                $('#success').html("<h3>Contact Form Submitted!</h3>")
                    .append("<p>I will be in touch.</p>")
                    .hide()
                    .fadeIn(1500, function() {
                        $('#success');
                    });

            }
        });
        e.preventDefault();

    });
});
