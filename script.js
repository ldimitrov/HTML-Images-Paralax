$(window).load(function(){
    var windowHeight = $(window).height(),
        footerHeight = $('footer').height(),
        heightDocument = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

    $('#paralax-animate, #paralax-animate-main').css({
        'height' :  heightDocument + 'px'
    });

    $('header').css({
        'height' : windowHeight + 'px',
        'line-height' : windowHeight + 'px'
    });

    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    window.onscroll = function(){
        var paralax = window.scrollY;

        $('#paralax-animate-main').css({
            'top' : '-' + paralax + 'px'
        });
        
        $('header').css({
            'background-position-y' : 50 - (paralax * 100 / heightDocument) + '%'
        });

        scrollFooter(paralax, footerHeight);
    }
});

function scrollFooter(scrollY, heightFooter)
{
    console.log(scrollY);
    console.log(heightFooter);

    if(scrollY >= heightFooter)
    {
        $('footer').css({
            'bottom' : '0px'
        });
    }
    else
    {
        $('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}