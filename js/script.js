var localStorage = window.localStorage;
var darkMode = localStorage.getItem("darkMode");
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.getElementsByTagName("html")[0].attributes["data-bs-theme"].value =
    "dark";
}
