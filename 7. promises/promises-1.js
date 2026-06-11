function promise(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved after " + time + " milliseconds");
        }, time);
    });
}

console.log('promise started ! ')
 promise(5000).then((message) => {
    console.log(message);
}).catch((error) => {    console.error("Promise rejected: " + error);
});

console.log('promise end !');