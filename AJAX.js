function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("lesson1").innerHTML =
      this.responseText;
    }
  };
  //change the following line to determine which file is opened (note the name of the file on the left in the files pane)
  xhttp.open("GET", "ajax_info_html.txt", true);
  xhttp.send();
}