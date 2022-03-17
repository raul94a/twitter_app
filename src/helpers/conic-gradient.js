export const getConicGradient = (degrees) => {
    function colors() {
        let firstColor = 'blue';
        let secondColor = 'darkblue'
        if (degrees > 270) {
            firstColor = 'yellow';
            secondColor = 'darkgoldenrod'
        }
        if (degrees > 320) {
            firstColor = 'red';
            secondColor = 'darkred'
        }
        return {
            firstColor: firstColor,
            secondColor: secondColor
        }
    }
    let progressColors = colors()
    return `conic-gradient(
        ${progressColors.firstColor} ${degrees}deg,
        ${progressColors.secondColor} ${degrees}deg
    )`;

}