document.getElementById("reloadLink").addEventListener("click", function (reloud) {
    reloud.preventDefault(); // Prevent the default link behavior
    location.reload(); // Reload the page
});
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}