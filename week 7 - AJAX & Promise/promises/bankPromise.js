// Promise syntax
var myFirstPromise = new Promise(function (resolve, reject) {
    // do something asynchronous which eventually calls either:
    //
    //   resolve(someValue); // fulfilled
    // or
    //   reject("failure reason"); // rejected
});


var hasAjob = false;

function bankPromise() {
    return new Promise(
        function (resolve, reject) {
            if (hasAjob) {
                var credit = {
                    approved: true,
                    money: 20000
                };
                resolve(credit); // fulfilled
            } else {
                var reason = new Error("Don't have a job!");
                reject(reason); // rejected
            }
        }
    );
}

// consume the promise

function requestCredit() {
    bankPromise()
        .then(
            // fullfiled function
            function (response) {
                alert('Aproved: ' + response.approved + ' Money: ' + response.money);
            },
            // reject function
            /* function(error) {
                alert(error.message);
            } */
        )
        .catch(function (error) {
            alert(error.message);
        })
        .finally(function () {
            console.log("Go home from the bank!")
        });
};

requestCredit();