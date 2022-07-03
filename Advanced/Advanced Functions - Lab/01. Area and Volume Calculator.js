function areaVol(areaIn, volIn, input) {

    const data = JSON.parse(input);

    const result = [];

    for (let cube of data) {
        const current = {
            area: areaIn.call(cube),
            volume: volIn.call(cube)
        };
        result.push(current)
    }

    return result

}

areaVol(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`
);


function area() {
    return Math.abs(this.x * this.y);
};


function vol() {
    return Math.abs(this.x * this.y * this.z);
};



