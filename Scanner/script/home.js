function showSideBar() {
  const sidebar = document.querySelectorAll(".sidebar");
  sidebar.forEach(function (element) {
    element.style.display = "flex";
  });
}

function closeSidebar() {
  const sidebar = document.querySelectorAll(".sidebar");
  sidebar.forEach(function (element) {
    element.style.display = "none";
  });
}

function clickProjectsButton() {
  // Specify the URL of the page you want to redirect to
  var targetPageUrl = "projects/projects.html";

  // Redirect to the specified page
  window.location.href = targetPageUrl;
}