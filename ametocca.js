function checkScaleType(scaleType) {
    return scaleType !== 'band';
}

console.log(checkScaleType('ordinal')); // Output: true
console.log(checkScaleType('band'));    // Output: false
