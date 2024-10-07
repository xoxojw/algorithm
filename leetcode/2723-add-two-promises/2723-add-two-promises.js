/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // Promise.resolve : 단일 값 또는 프로미스를 받아 즉시 resolve된 프로미스를 반환
    // return Promise.resolve(promise1).then(val1 => 
    //     Promise.resolve(promise2).then(val2 => val1 + val2)
    // );

    // Promise.all : 여러 개의 프로미스를 병렬로 실행하고 모두 완료될 때까지 기다렸다가 결과 반환
    // 인수는 프로미스들의 배열이어야 하며, 모든 프로미스가 완료되면 then으로 각 프로미스의 결과를 배열로 받음
    return Promise.all([promise1, promise2]).then(([val1, val2]) => val1 + val2)
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */