// 1. convert radian to degree

function radianToDegree(radian) {
    if (typeof radian !== 'number') {
        return 'Please Enter a number!';
    }

    const pi = Math.PI;

    // calculation
    const degree = (180 / pi) * radian;

    // calculated value in round figure
    const degreeInRound = Math.round(degree);
    return degreeInRound;

}

const radian = 5;
const degrees = radianToDegree(radian);
console.log(degrees);