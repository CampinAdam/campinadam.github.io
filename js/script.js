/**
 * Checks if the user's preferred color scheme is dark and sets the HTML attribute accordingly.
 */
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.getElementsByTagName("html")[0].attributes["data-bs-theme"].value =
    "dark";
}

/**
 * Retrieves the user's settings from local storage and sets the HTML attribute accordingly
 */
var localSettings = localStorage.getItem("settings");
if (localSettings) {
  var settings = JSON.parse(localSettings);
  if (settings.theme) {
    document.getElementsByTagName("html")[0].attributes["data-bs-theme"].value =
      settings.theme;
  }
}

/**
 * Saves the user's current theme setting to local storage before the page is unloaded.
 */
window.addEventListener("beforeunload", function () {
  var settings = {
    theme:
      document.getElementsByTagName("html")[0].attributes["data-bs-theme"]
        .value,
  };
  localStorage.setItem("settings", JSON.stringify(settings));
});

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
  easing: "easeInOutQuad",
});

 
        $('h3').addClass('text-body-emphasis fs-3');
        $('.btn').addClass('shadow-sm'); 1

        $(document).ready(function () {
            if ($('html').attr('data-bs-theme') == 'dark') {
                $('#theme-toggle').addClass('bi-moon-fill');
            } else {
                $('#theme-toggle').addClass('bi-sun-fill');
            }

            $('.navbar-nav>a, .navbar-brand').click(function () {
                $('.navbar-collapse').collapse('hide');

            });

            $('#theme-toggle').click(function () {
                if ($('html').attr('data-bs-theme') == 'dark') {
                    $('html').attr('data-bs-theme', 'light').fadeIn();
                    $('#theme-toggle').removeClass('bi-moon-fill').addClass('bi-sun-fill').fadeIn();
                } else {
                    $('html').attr('data-bs-theme', 'dark').fadeIn();
                    $('#theme-toggle').removeClass('bi-sun-fill').addClass('bi-moon-fill').fadeIn();
                }

            });

            if ($(window).width() < 992) {
                $('#about-text').toggleClass('fs-5 p-5 p-4');

            }
        });
