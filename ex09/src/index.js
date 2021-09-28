const product = (aa, bb, cc) => {
    const args = [aa, bb, cc];

    return args.reduce((a, b)=> a * b, 1);
}
console.log(product(7));
module.exports = product;