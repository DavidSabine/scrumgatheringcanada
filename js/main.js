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
    reOrderSponsors();

});

function reOrderSponsors() {
  shuffleElements(document.querySelectorAll('.northern-lights-sponsors .row.sponsor'));
  shuffleElements(document.querySelectorAll('.sponsor-gallery img'));
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

// $(window).load(function () {
//     handleTopNavAnimation();
// });

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
