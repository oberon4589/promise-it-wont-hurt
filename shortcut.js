var promise;

promise = Promise.resolve('TESTE')

promise.catch(function (err) {
    console.log(err.message)
})