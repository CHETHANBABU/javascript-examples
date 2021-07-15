/*******************
 * async / await
 */
const getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([123, 234, 345, 456]); // sucess then
    }, 1500);
});
async function getCallAW() {
    const IDS = await getIds;
    console.log('11 ------------ ', IDS);
}
getCallAW();

async function getNewCall() {
    const IDS = await getIds;
    return IDS;
}
getNewCall().then(ID => {
    console.log(`20 --------------------- ${ID}`);
});