$(document).ready(function () {

    $('.davidsphone').text("416-254-3665 (David Sabine's mobile phone)");
    $('.1stemailaddress').text("1st@scrumgathering.ca");
    $('.sponsoremailaddress').text("sponsors@scrumgathering.ca");
    if($('#randomCity').length) {
        setInterval(writeRandomCity,1750);
    }
    reOrderSponsors();

});

function writeRandomCity() {
    var city = Math.floor(Math.random()*canadian_cities.length);
    document.getElementById("randomCity").innerText = canadian_cities[city];
}

function reOrderSponsors() {
  shuffleElements(document.querySelectorAll('.northern-lights-sponsors .row.sponsor'));
  shuffleElements(document.querySelectorAll('.great-lakes-sponsors .row.sponsor'));
  shuffleElements(document.querySelectorAll('.maple-leaves-sponsors .sponsor-gallery a'))
  shuffleElements(document.querySelectorAll('body.index #programme img'))
}

function shuffleElements(nodelist) {
 
    allElems = (function(){
    var ret = [], l = nodelist.length;
    while (l--) { ret[ret.length] = nodelist[l]; }
    return ret;
    })();
 
    var shuffled = (function(){
        var l = allElems.length, ret = [];
        while (l--) {
            var random = Math.floor(Math.random() * allElems.length),
                randEl = allElems[random].cloneNode(true);
            allElems.splice(random, 1);
            ret[ret.length] = randEl;
        }
        return ret; 
    })(), l = nodelist.length;
 
    while (l--) {
        nodelist[l].parentNode.insertBefore(shuffled[l], nodelist[l].nextSibling);
        nodelist[l].parentNode.removeChild(nodelist[l]);
    }
 
}

// Countdown jquery
$(function () {
    var msg = "";
    var dayInMilliseconds = 1000*60*60*24;
    var checkinHour = 16,
        checkinDay = 25,
        maineventHour = 9,
        maineventDay = 26,
        month = 03,
        year = 2018;
    var checkinBegins = new Date(year, month - 1, checkinDay, checkinHour);
    var daysUntilCheckinBegins = (checkinBegins.getTime() - new Date().getTime())/dayInMilliseconds;
    var maineventBegins = new Date(year, month - 1, maineventDay, maineventHour);
    var daysUntilMaineventBegins = (maineventBegins.getTime() - new Date().getTime())/dayInMilliseconds;
    if(daysUntilMaineventBegins > 0) {
        $('.index #countdown').removeClass('hide');
        switch(true) {
            case daysUntilCheckinBegins > 1/24:
                $('#defaultCountdown').countdown({until: checkinBegins, format:'HMS'});
                msg = "Check-in Begins";
                break;
            case daysUntilCheckinBegins > 1/24/60:
                $('#defaultCountdown').countdown({until: checkinBegins, format:'MS'});
                msg = "Check-in Begins";
                break;
            case daysUntilCheckinBegins > 0:
                $('#defaultCountdown').countdown({until: checkinBegins, format:'S'});
                msg = "Check-in Begins";
                break;
            case daysUntilMaineventBegins > 1/24:
                $('#defaultCountdown').countdown({until: maineventBegins, format:'HMS'});
                break;
            case daysUntilMaineventBegins > 1/24/60:
                $('#defaultCountdown').countdown({until: maineventBegins, format:'MS'});
                break;
            default:
                $('#defaultCountdown').countdown({until: maineventBegins, format:'S'});
        }
        if(msg.length>0) {
            $('#countdownHeader').text(msg);
        }
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

function handleTopNavAnimation() {
    var top = $(window).scrollTop();

    if (top > 10) {
        $('body.index #site-nav').addClass('navbar-solid');
    }
    else {
        $('body.index #site-nav').removeClass('navbar-solid');
    }
}

$(function () {
    $('#navbar-items a[href*=#]:not([href=#]), a.inpage').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            // console.log(target);
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
