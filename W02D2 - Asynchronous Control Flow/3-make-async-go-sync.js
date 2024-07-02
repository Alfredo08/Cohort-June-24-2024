
const delay = () => {
    return new Promise((resolve) => {
        return setTimeout(() => {
            console.log("Wait for me!");
            resolve();
        }, 2000);
    });
}



const waitForDelay = async () => {
    await delay();
    console.log("Start");
    await delay();
    console.log("End after 2 seconds");
}

waitForDelay();