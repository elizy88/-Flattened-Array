
function flatten() {
    var flat = [];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Array) {
            flat.push.apply(flat, flatten.apply(this, arguments[i]));
        } else {
            flat.push(arguments[i]);
        }
    }
    return flat;
}
console.log(flatten(['a', ['b', 'c', ['d', 1]], 2, [3]]))