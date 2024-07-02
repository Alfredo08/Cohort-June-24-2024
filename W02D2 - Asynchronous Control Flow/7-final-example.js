
const highOrderFunction = (callback) => {
    const info = {
        fullName: "Alex Miller",
        initials: "AL"
    }
    console.log(1);
    console.log(info);

    const timeOutData = setTimeout(() => {
        console.log(2);
        info.fullName = "Michael Anderson";
        info.initials = "MA";
        callback();
        console.log(3);
        console.log(info);
    }, 0);

    console.log(4);
}

console.log(5);
const result = highOrderFunction(() => {console.log(6)});
console.log(7);