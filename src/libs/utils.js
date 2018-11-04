export const secToTime = function (s) {
    let t;
    if (s > -1) {
        let hour = Math.floor(s / 3600);
        let min = Math.floor(s / 60) % 60;
        let sec = s % 60;
        if (hour < 10) {
            t = '0' + hour + ':';
        } else {
            t = hour + ':';
        }

        if (min < 10) {
            t += '0';
        }
        t += min + ':';
        if (sec < 10) {
            t += '0';
        }
        t += sec;
    }
    return t;
};
