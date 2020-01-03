var pages = ["dashboard", "time_tracker", "projects", "teams", "clients"];

const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;

const sidemenu = document.getElementById("sidemenu");
const columns = document.getElementById("columns");
const navbar = document.getElementById("toggledMenu");
const width85 = width * 0.8;
const width65 = width * 0.75;
var selectedTabID = 2;

function displayWindowSize() {
  // Get width and height of the window excluding scrollbars
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;
  var headerNavbar = document.getElementById("navbar");
  var navbar = document.getElementById("toggledMenu");

  // Display result inside a div element
  if (w < width85) {
    sidemenu.style.display = "none";
    navbar.style.display = "block";
  }
  if (w > width85) {
    sidemenu.style.display = "block";
    navbar.style.display = "none";
    headerNavbar.style.display = "none";
  }

  if (w < width65) {
    headerNavbar.style.display = "block";
    navbar.style.display = "none";
  }
}

// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);

// Calling the function for the first time
displayWindowSize();

function open_new_project() {
  var modal = document.getElementById("myModal");
  modal.className += " is-active";
}

function hide_sidemenu() {
  var selectedTab1 = document.getElementById("shorttab" + selectedTabID);
  var tabBG = document.getElementById("li" + selectedTabID);
  sidemenu.style.display = "none";
  navbar.style.display = "block";
  selectedTab1.classList += " is-active";
  selectedTab1.style.color = "white";
  tabBG.style.backgroundColor = "blue";
  tabBG.style.marginLeft = "0.5rem";
  tabBG.style.borderTopLeftRadius = "0.3rem";
  tabBG.style.borderBottomLeftRadius = "0.3rem";
  for (var j = 1; j <= 5; j++) {
    var tab1 = document.getElementById("shorttab" + j);
    var tabBG1 = document.getElementById("li" + j);
    var classList1 = tab1.className;

    if (j == id) {
      continue;
    } else {
      tab1.style.color = "black";
      tabBG1.style.backgroundColor = "white";
    }
    if (classList1.includes("is-active")) {
      tab1.classList = "a-toggled";
    }
  }
  // columns.classList += " hero is-fullheight";
}

function show_sidemenu() {
  var selectedTab1 = document.getElementById("tab" + selectedTabID);
  var tabBG = document.getElementById("li" + selectedTabID);
  sidemenu.style.display = "block";
  navbar.style.display = "none";
  selectedTab1.classList += " is-active";

  for (var j = 1; j <= 5; j++) {
    var tab1 = document.getElementById("tab" + j);
    var classList1 = tab1.className;
    if (j == selectedTabID) {
      continue;
    }
    if (classList1.includes("is-active")) {
      tab1.classList = "a";
    }
  }
}

function showContentFullTab(id) {
  id--;

  $(function() {
    $("#panel").load("../pages/" + pages[id] + ".html");
  });
  id++;
  var selectedTab = document.getElementById("tab" + id);
  selectedTab.classList += " is-active";
  selectedTabID = id;
  selectedTab.style.borderTopLeftRadius = "0.3rem";
  selectedTab.style.borderBottomLeftRadius = "0.3rem";
  console.log(selectedTab.className);
  for (var i = 1; i <= 5; i++) {
    var tab = document.getElementById("tab" + i);
    var classList = tab.className;
    if (i == id) continue;
    if (classList.includes("is-active")) {
      tab.classList = "a";
    }
  }
}

function showContentShortTab(id) {
  id--;

  $(function() {
    $("#panel").load("../pages/" + pages[id] + ".html");
  });
  id++;
  var selectedTab1 = document.getElementById("shorttab" + id);
  var tabBG = document.getElementById("li" + id);
  selectedTab1.classList += " is-active";
  selectedTabID = id;
  selectedTab1.style.color = "white";
  tabBG.style.backgroundColor = "blue";
  tabBG.style.marginLeft = "0.5rem";
  tabBG.style.borderTopLeftRadius = "0.3rem";
  tabBG.style.borderBottomLeftRadius = "0.3rem";

  console.log(selectedTab1.className);
  for (var j = 1; j <= 5; j++) {
    var tab1 = document.getElementById("shorttab" + j);
    var tabBG1 = document.getElementById("li" + j);
    var classList1 = tab1.className;

    if (j == id) {
      continue;
    } else {
      tab1.style.color = "black";
      tabBG1.style.backgroundColor = "white";
    }
    if (classList1.includes("is-active")) {
      tab1.classList = "a-toggled";
    }
  }
}
