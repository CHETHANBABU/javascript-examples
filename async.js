/*********************************
 * synchronous
 */
const second = () => {
    console.log('Second');
}

const first = () => {
    console.log('first');
    second();
    console.log('end');
}
first();
/***********************************
 * asynchronous
 */
console.log('------------------------------------------');
const abc = () => {
    setTimeout(() => {
        console.log('Async call');
    }, 2000);
}

const mnc = () => {
    console.log('Starts');
    abc();
    console.log('ends');
}
mnc();
//-------------------------------------------------------------
function abc1() {
    setTimeout(() => {
        const q = [123, 234, 345, 456];
        console.log('q', q);
        setTimeout((id) => {
            const res = {
                publisher: 'asdfghjkl',
                title: 'zxcvbnm'
            };
            console.log(`${id}--------${res.title}`);
        }, 1000, q[2]);
    }, 1500);
}
abc1();