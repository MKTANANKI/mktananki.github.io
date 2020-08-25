if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
	

    navigator.serviceWorker.register('/sw.js', {
        scope: '/' 
    })
    .then(function (response) {
            // Service worker registration done
            console.log('Registration Successful', response);
			navigator.serviceWorker.register('"https://cdn.moengage.com/webpush/releases/serviceworker_cdn.min.latest.js"');
        }, function (error) {
            // Service worker registration failed
            console.log('Registration Failed', error);
        });
    });
}
var headerHt = $('#header').height(),
    footerHt = $('#footer').height();

$(window).on('load', function () {
    $('section').css('min-height', $(window).height() - (headerHt + footerHt - 2));
    $('#menu li:first-child a').addClass('active');
    $('html,body').animate({
        scrollTop: $('#about').offset().top - headerHt
    }, 500);
});

$(window).on('scroll', function () {
    var ws = $(this).scrollTop(),
        btmReached = ($(window).scrollTop() == ($(document).height() - $(window).height())),
        aboutHt = $('#about').height(),
        experienceHt = $('#experience').height() + aboutHt - 30,
        academicsHt = $('#academics').height() + experienceHt - 30,
        certHt = $('#certifications').height() + academicsHt - 30,
        portfolioHt = $('#portfolio').height() + certHt - 30,
        contactHt = $('#contact').height() + portfolioHt - 30;
    if (ws <= aboutHt) {
        $('#menu li').removeClass('active');
        $("[data-nav='about']").closest('li').addClass('active');
    } else if (ws > aboutHt && ws <= experienceHt) {
        $('#menu li').removeClass('active');
        $("[data-nav='experience']").closest('li').addClass('active');
    } else if (ws > experienceHt && ws <= academicsHt) {
        $('#menu li').removeClass('active');
        $("[data-nav='academics']").closest('li').addClass('active');
    } else if (ws > academicsHt && ws <= certHt) {
        $('#menu li').removeClass('active');
        $("[data-nav='certifications']").closest('li').addClass('active');
    } else if (ws > certHt && ws <= portfolioHt && !btmReached) {
        $('#menu li').removeClass('active');
        $("[data-nav='portfolio']").closest('li').addClass('active');
    } else if (ws > portfolioHt && ws <= contactHt || btmReached) {
        $('#menu li').removeClass('active');
        $("[data-nav='contact']").closest('li').addClass('active');
    }
});

function navigateTo(nav) {
    var elem = event.target;
    $('body').removeClass('show-menu');
    $('#menu li').removeClass('active');
    $(elem).closest('li').addClass('active');
    $('html,body').animate({
        scrollTop: $('#' + nav).offset().top - (headerHt)
    }, 500);
}

function toggleMenu(evt){
    evt.preventDefault();
    $('body').toggleClass('show-menu');
}

function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "muralikrishnatananki@gmail.com",
	Password : "TestPassword",
	To : 'muralikrishnatananki@gmail.com',
	From : "muralikrishnatananki@gmail.com",
	Subject : "Test Subject",
	Body : "Test email body",
	}).then(
		message => alert("mail sent successfully")
	);
}
