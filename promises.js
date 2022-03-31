var button = document.querySelector("#btn-promise");
var div = document.querySelector("#divpromise");

var setTextp = (text) => {
  div.textContent = text
}
/**
* Now when your function returns a value that will be delivered in the feture you return a Promise of that value.  Promise contructure will recive a anonimous function (in this case an arrow funct) that will recive the functions that handle the results of the async call. In this case we take resolve() and reject(). Now it easy t handle errors
*/
const checkAuthp = () => {
  return new Promise((resolve, reject) => {
    setTextp('Checking Auth...')
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

const fetchUserp = () => {
  return new Promise((resolve, reject) => {
    setTextp('Fetching User...');
    setTimeout(() => {
      resolve({ name: "Max" });
    }, 2000);
  });
};
/**
* When the Promise is completed it will execute the method then with the passed callback function. Here we the nesting of functions its reduced due to the chaining of then() calls.
*/
button.addEventListener("click", () => {
  checkAuthp()
     .then(
        isAuth => {
          if (isAuth) {
            return fetchUserp()
          }
        }
      )
      .then(
        user => {
          setTextp(user.name)
        }
      )
});
