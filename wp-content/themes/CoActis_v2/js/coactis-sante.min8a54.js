window.addEventListener("DOMContentLoaded", function () {

    // Survey Banner =========

    var surveyBannerFooter = document.querySelector('.banner-survey-footer');
    if (surveyBannerFooter != null) {
        var footer = document.querySelector('footer');
        window.addEventListener('scroll', function (event) {
            var b = Math.max(0, window.innerHeight + window.pageYOffset - footer.offsetTop);
            surveyBannerFooter.style.bottom = b + 'px';
        }, { passive: true });
    }

    var surveyBanner = document.querySelector('.banner-survey');
    if (surveyBanner != null) {
        var surveyClose = document.querySelector('.banner-survey-close');
        if (surveyClose != null) {
            surveyClose.addEventListener('click', function (event) {
                surveyBanner.parentNode.removeChild(surveyBanner);
                updateScrollToTop();
            });
        }
    }
})