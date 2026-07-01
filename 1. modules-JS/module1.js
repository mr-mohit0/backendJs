//module.exports
//require is important for node js
function add(a,b)
{
    return a + b;
}
function sub(a,b) {
    return a - b;
}
function division(a,b)
{
    if (b == 0) throw new Error('divide by 0 is not allowed ');
    return a / b;
}
module.exports = { add,sub, division 
}
//or
// module.exports = [add,sub, division,"hello"
// ] 