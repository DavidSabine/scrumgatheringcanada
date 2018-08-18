$(document).ready(function () {

    $('.1stemailaddress').text("1st@scrumgathering.ca");
    $('.sponsoremailaddress').text("sponsors@scrumgathering.ca");
    reOrderSponsors();

});

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
        $('body.ontarioscrumcommunity #site-nav, body.index #site-nav').addClass('navbar-solid');
    }
    else {
        $('body.ontarioscrumcommunity #site-nav, body.index #site-nav').removeClass('navbar-solid');
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
