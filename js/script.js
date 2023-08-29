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
