function writeRandomCity() {
    var city = Math.floor(Math.random()*canadian_cities.length);
    document.getElementById("randomCity").innerText = canadian_cities[city];
}

$(document).ready(function () {

    $('.davidsphone').text("416-254-3665 (David Sabine's mobile phone)");
    $('.1stemailaddress').text("1st@scrumgathering.ca");
    $('.sponsoremailaddress').text("sponsors@scrumgathering.ca");
    $('.schedule_expand').on('click', function(e){
        e.preventDefault();
        var targetContent = $(this).closest('.schedule_item').find('.panel-collapse');
        targetContent.toggleClass('in');
        $(this).toggleClass('collapsed');
    });
    setInterval(writeRandomCity,1750);

    /*=================================
     ||          Nivo-lightbox
     ==================================*/

    $('.gallery-item').nivoLightbox({
        effect: 'fade',                             // The effect to use when showing the lightbox
        theme: 'default',                             // The lightbox theme to use
        keyboardNav: true,                             // Enable/Disable keyboard navigation (left/right/escape)
        clickOverlayToClose: true,                    // If false clicking the "close" button will be the only way to close the lightbox
        onInit: function () {
        },                         // Callback when lightbox has loaded
        beforeShowLightbox: function () {
        },             // Callback before the lightbox is shown
        afterShowLightbox: function (lightbox) {
        },     // Callback after the lightbox is shown
        beforeHideLightbox: function () {
        },             // Callback before the lightbox is hidden
        afterHideLightbox: function () {
        },             // Callback after the lightbox is hidden
        onPrev: function (element) {
        },                 // Callback when the lightbox gallery goes to previous item
        onNext: function (element) {
        },                 // Callback when the lightbox gallery goes to next item
        errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
    });

    /*=================================
     ||          Registration
     ==================================*/
    $("#registration_form").submit(function (e) {

        e.preventDefault();
        var $ = jQuery;

        var postData = $(this).serializeArray(),
            formURL = $(this).attr("action"),
            $rfResponse = $('#registration_formResponse'),
            $rfsubmit = $("#rfsubmit"),
            rfsubmitText = $rfsubmit.text();

        $rfsubmit.text("Processing...");


        $.ajax(
            {
                url: formURL,
                type: "POST",
                data: postData,
                success: function (data) {
                    $rfResponse.html(data);
                    $rfsubmit.text(rfsubmitText);
                    $('#registration_form input[name=fname]').val('');
                    $('#registration_form input[name=lname]').val('');
                    $('#registration_form input[name=email]').val('');
                    $('#registration_form input[name=age]').val('');
                    $('#registration_form textarea[name=message]').val('');
                },
                error: function (data) {
                    alert("Error occurd! Please try again");
                }
            });

        return false;

    });

    /*=================================
     ||          Submission
     ==================================*/
    $("#submission_form").submit(function (e) {

        e.preventDefault();
        var $ = jQuery;

        var postData = $(this).serializeArray(),
            formURL = $(this).attr("action"),
            $sfResponse = $('#submissionFormResponse'),
            $sfsubmit = $("#sfsubmit"),
            sfsubmitText = $sfsubmit.text();

        $sfsubmit.text("Processing...");


        $.ajax(
            {
                url: formURL,
                type: "POST",
                data: postData,
                success: function (data) {
                    $sfResponse.html(data);
                    $sfsubmit.text(sfsubmitText);
                    $('#submission_form input[name=fname]').val('');
                    $('#submission_form input[name=lname]').val('');
                    $('#submission_form input[name=email]').val('');
                    $('#submission_form input[name=subject]').val('');
                    $('#submission_form textarea[name=message]').val('');
                },
                error: function (data) {
                    alert("Error occurd! Please try again");
                }
            });

        return false;

    });

    /*=================================
     ||          Contact
     ==================================*/
    $("#contactForm").submit(function (e) {

        e.preventDefault();
        var $ = jQuery;

        var postData = $(this).serializeArray(),
            formURL = $(this).attr("action"),
            $cfResponse = $('#contactFormResponse'),
            $cfsubmit = $("#cfsubmit"),
            cfsubmitText = $cfsubmit.text();

        $cfsubmit.text("Sending...");


        $.ajax(
            {
                url: formURL,
                type: "POST",
                data: postData,
                success: function (data) {
                    $cfResponse.html(data);
                    $cfsubmit.text(cfsubmitText);
                    $('#contactForm input[name=name]').val('');
                    $('#contactForm input[name=email]').val('');
                    $('#contactForm textarea[name=message]').val('');
                },
                error: function (data) {
                    alert("Error occurd! Please try again");
                }
            });

        return false;

    });

    if($('.schedule_tabs').length) {
        //$('.schedule_tabs a:first').click();
    }
});


// Countdown jquery

$(function () {
    var hour = 16,
        day = 25,
        month = 03,
        year = 2018;
    var conferenceDay = new Date(year, month - 1, day, hour);
    var dayInMilliseconds = 1000*60*60*24;
    var daysUntilConference = (conferenceDay.getTime() - new Date().getTime())/dayInMilliseconds;
    console.log(daysUntilConference);
    switch(true) {
        case daysUntilConference > 31:
            $('#defaultCountdown').countdown({until: conferenceDay, format:'OdH'});
            break;
        default:
            $('#defaultCountdown').countdown({until: conferenceDay, format:'dHMS'});
    } 
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

/*
 * Change Navbar color while scrolling
 */

$(window).scroll(function () {
    handleTopNavAnimation();
});

$(window).load(function () {
    handleTopNavAnimation();
});

function handleTopNavAnimation() {
    var top = $(window).scrollTop();

    if (top > 10) {
        $('#site-nav').addClass('navbar-solid');
    }
    else {
        $('#site-nav').removeClass('navbar-solid');
    }
}

$(function () {
    $('#navbar-items a[href*=#]:not([href=#]), a.inpage').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            console.log(target);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});
