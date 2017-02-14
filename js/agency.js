/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

// Overlays
var maxWidth = 850;
function resizeServicesOverlay() {
    var height = $('#services .col-md-4').width();
    $('#services .col-md-4').height(height);
}
function colWidth() {
    var colWidth = $('#services .col-md-4').width();
    //$('#services .col-md-4 h2').css('width', colWidth * .75 );
    $('#services .col-md-4 h2').css('left', colWidth/2 );
    return colWidth/2;
}

function resizeImages() {
    var height = $('#services .col-md-4').width();
    $('#services .col-md-4 img').height(height);
}
resizeImages();
resizeServicesOverlay();
var leftAmount = colWidth();
$(window).resize(function() {
    if (serviceClicked == false) {
        resizeImages();
        resizeServicesOverlay();
        leftAmount = colWidth();
    }
    
})

// Click Effect 


var serviceClicked = false;

var primaryWidth = window.innerWidth * .72506;
var secondaryWidth = window.innerWidth * .13;
var headerMargin = $('.clickableService h2').css('margin-top');
var headerHeight = Number($('.clickableService h2').height()) + Number(headerMargin.substring(0, headerMargin.length -2)) + 15;
$('.clickableService p, .clickableService ul').css('top', headerHeight);
$('.clickableService hr').css('margin-top', headerHeight);

function reduceLargeScreen() {
    var $all = $('#services .col-md-4');
    $all.css('width', '33%');
    $all.find('p').css('left', '0px');
    $all.find('img').css('height', 'auto')
        .css('padding-top', '0')
        .css('margin-top', '0')
        .css('display', 'block');
    $all.find('ul, p').css('display', 'none');
    $all.find('hr').css('display', 'block')
        .css('margin-top', 0);
    $all.find('h2').css('transition', '.2s');
    $all.find('#overlay').css('background', 'linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8))');
    $all.find('h2').css('opacity', '0')
        .css('font-size', '36px')
        .css('position', 'relative')
        .css('transform', 'translateX(0%)')
        .css('text-align', 'center')
        .css('left', '0px')
        .css('padding-top', '35px')
        .css('opacity', '1');
}

function serviceExpansionLargeScreen(target) {
    onePunch++;
    $(target).find('h2').css('transition', '0s')
        .css('opacity', '0');
    serviceClicked = true;
    var $all = $('#services .col-md-4');
    if (window.innerWidth > maxWidth) {
         $all.not(target).animate({
            width: secondaryWidth
        }, 300)
        setTimeout(function() {
            $(target).animate({
                width: primaryWidth
            },300)
        }, 3.5)
    }
    $all.not(target).find('#overlay').css('background', 'linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8))');
    $all.not(target).find('h2').css('opacity', '0')
        .css('font-size', '16px')
        .css('position', 'relative')
        .css('transform', 'translateX(0%)')
        .css('text-align', 'center')
        .css('left', '0px')
        .css('padding-top', '65px')
        .css('opacity', '1');
    $(target).find('#overlay').css('background', 'linear-gradient(rgba(0,0,0,.95), rgba(0,0,0,.95))');
    $(target).find('h2').css('position', 'absolute')
        .css('font-size', '36px')
        .css('left', leftAmount)
        .css('text-align', 'left')
        .css('transform', 'translateX(-50%)')
        .css('padding-top', '0px')
        .css('opacity', '1');
    $(target).find('img').css('display', 'none');
    $(target).find('p').css('display', 'block');
    $(target).find('ul').css('display', 'block');
    $(target).find('p').css('left', leftAmount - $(target).find('h2').width()/2);
    $(target).find('hr').css('display', 'none');
    $all.not(target).find('p').css('left', '0px');
    $all.not(target).find('img').css('margin-top', '27%')
        .css('height', 'auto')
        .css('display', 'block');
    $all.not(target).find('ul, p').css('display', 'none');
    $all.not(target).find('hr').css('display', 'block')
        .css('margin-top', 0);
    $all.not(target).find('h2').css('transition', '.2s');
    $(this).css('cursor', 'auto')
}
function serviceExpansionSmallScreen(target, boolean) {
    onePunch++;
    $(target).find('h2').css('transition', '0s')
        .css('opacity', '0');
    serviceClicked = true;
    var $all = $('#services .col-md-4');
    if (window.innerWidth > maxWidth) {
        if (boolean) {
            $all.not(target).animate({
                width: secondaryWidth
            }, 300)
        }
        setTimeout(function() {
            $(target).animate({
                width: primaryWidth
            },300)
        }, 3.5)
    }
    $(target).css('height', 'auto');
    if (boolean) {
        $all.not(target).find('h2').css('opacity', '0')
            .css('font-size', '16px')
            .css('position', 'relative')
            .css('transform', 'translateX(0%)')
            .css('text-align', 'center')
            .css('left', '0px')
            .css('padding-top', '65px')
            .css('opacity', '1');
        $all.not(target).find('p').css('left', '0px');
        $all.not(target).find('img').css('margin-top', '27%')
            .css('height', 'auto')
            .css('display', 'block');
        $all.not(target).find('.clickableService').css('position', 'absolute');
        $all.not(target).find('ul, p').css('display', 'none');
        $all.not(target).find('hr').css('display', 'block')
            .css('margin-top', 0);
        $all.not(target).find('h2').css('transition', '.2s');
    }
    
    $(target).find('h2').css('width', '100%')
        .css('font-size', '36px')
        .css('padding-top', '0px')
        .css('opacity', '1');
    $(target).find('.clickableService').css('position', 'relative');
    $(target).find('img').css('display', 'none');
    $(target).find('p').css('display', 'block');
    $(target).find('ul').css('display', 'block');
    $(target).find('hr').css('display', 'none');
    $(this).css('cursor', 'auto')
}

$('.col-md-4').on('click', function() {
    if (window.innerWidth > maxWidth) {
        serviceExpansionLargeScreen(this);
    } else {
        serviceExpansionSmallScreen(this, true);
    }
    
})

// Auto opens the click effect on scroll 
var onePunch = 0;
setTimeout(function() {
    $(window).scroll(function() {
       if ($(window).scrollTop() > 400 && $(window).scrollTop() < 900 && onePunch === 0 && window.innerWidth > maxWidth) {       
            onePunch++;
            serviceExpansionLargeScreen('#left');
        } else if ($(window).scrollTop() > 150 && onePunch === 0 && window.innerWidth <= maxWidth) {
            onePunch++;
            serviceExpansionSmallScreen('#left', false);
            serviceExpansionSmallScreen('#middle', false);
            serviceExpansionSmallScreen('#right', false);
        }
       if ($(window).scrollTop() > 900 && onePunch > 0 && window.innerWidth > maxWidth) {
           reduceLargeScreen();
       } 
    })
}, 1000)

// Modal
$('.servicesButton').click(function() {
    $('.modal').modal('show');
});

$('#initialButtonContainer button:first-child').click(function() {
    $('#initialButtonContainer').animate({
      opacity: 0  
    }, 'slow')
    setTimeout(function() {
        $('#initialButtonContainer').css('display','none');
    })
    $('.formSpree').css('display', 'block');
    $('.formSpree').animate({
      opacity: 1 
    }, 'slow')
})

$('#initialButtonContainer button:last-child').click(function() {
    $('#initialButtonContainer').animate({
      opacity: 0  
    }, 'slow')
    setTimeout(function() {
        $('#initialButtonContainer').css('display','none');
    })
    
    $('.calendly-inline-widget').css('display', 'block')
        .css('z-index', 1000);
    $('.calendly-inline-widget').animate({
      opacity: 1 
    }, 'slow')
})