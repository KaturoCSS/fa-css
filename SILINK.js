function openClan(evt, clanName) {
  var i, tabContentSILINK, tabSILINK;
  tabContentSILINK = document.getElementsByClassName("tabContentSILINK");
  for (i = 0; i < tabContentSILINK.length; i++) {
      tabContentSILINK[i].style.display = "none";
  }
  tabSILINK = document.getElementsByClassName("tabSILINK");
  for (i = 0; i < tabSILINK.length; i++) {
      tabSILINK[i].className = tabSILINK[i].className.replace(" active", "");
  }
  document.getElementById(clanName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
