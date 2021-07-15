/***********************************************
 * Promises
 */
const getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([123, 234, 345, 456]); // sucess then
        reject([6969]); // failure catch
    }, 1500);
});
getIds.then(ids => {
    console.log(ids);
})
.catch(error => {
    console.log('Error!!!!!!');
});