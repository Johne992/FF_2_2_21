//create function makePromise
function makePromise() {
  //creates a variable with a random number less than 0.5
  var isMomHappy = Math.random() < 0.5;
  //creates a promise called phonePromise
  var phonePromise = new Promise(function(resolve, reject) {
    //creates a variable fiveSeconds with 5000 as the value
    var fiveSeconds = 5000;
    setTimeout(function() {
      if (isMomHappy) {
        var phone = {
          brand: 'Samsung',
          color: 'black'
        };
        resolve(phone); // fulfilled
      } else {
        var reason = new Error('mom is very disappointed');
        reject(reason); // reject
      }
    }, fiveSeconds);
  });
  
  var interval = setInterval(function() {
    log("I still don't know if I'll get it...");
  }, 1000);

  phonePromise.then(function(phone) {
    log("I got a new phone! It's a " + phone.brand);
    reset(interval);
  }, function(error) {
    log("I didn't get a phone because " + error.message);
    reset(interval);
  });

  $('#promises-demo p').remove();
  $('#promises-demo button').attr('disabled', true);
}

function log(message) {
  $('#promises-demo').append($('<p />').text(message));
}

function reset(interval) {
  clearInterval(interval);
  $('#promises-demo button').attr('disabled', false);
}