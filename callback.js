// Example built from: https://codepen.io/maximilian-schwarzmueller/pen/gRJjov

var button = document.querySelector("#btn-fetchuser");
var div = document.querySelector("#divfetchuser");

var setTextc = (text) => {
  div.textContent = text
}

const checkAuthc = cb => {
  setTextc('Checking Auth...')
  setTimeout(() => {
    cb(true);
  }, 3000);
};

const fetchUserc = cb => {
  setTextc('Fetching User...')
  setTimeout(() => {
    cb({ name: "Max" });
  }, 3000);
};


button.addEventListener("click", () => {
  checkAuthc(auth => {
    if (auth) {
      fetchUserc(user => {
        setTextc(user.name)
      });
    }
  });
});
