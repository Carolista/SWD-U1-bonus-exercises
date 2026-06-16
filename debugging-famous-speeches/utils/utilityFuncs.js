// HELPER FUNCTION
export function getRandomNumber(max, min = 0, dec = 0) {
    let randNum = min + (Math.random() * (max-min));
    let decFactor = 10**dec;
    return Math.round(randNum * decFactor) / decFactor;
}
