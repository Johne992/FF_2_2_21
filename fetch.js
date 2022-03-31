function fetchedFunction(){
  let file = "ajax_info.txt"

  fetch (file)
  .then(x => x.text())
  .then(y => document.getElementById("fetched").innerHTML = y);
}

