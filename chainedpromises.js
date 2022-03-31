let state1 = true;
let state2 = false;

const firstPromise = (state) => {
	return new Promise((resolve, reject) => {
		if (state) {
			resolve('State 1 is true');
		} else {
			reject('State 1 is false');
		}		
	});
};

const secondPromise = (state) => {
	return new Promise((resolve, reject) => {
		if (state) {
			resolve('State 2 is true');
		} else {
			reject('State 2 is false');
		}		
	});
};

let start = firstPromise(state1);

start
	.then((response) => {
		console.log(response);
		return secondPromise(state2);
	})
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	});