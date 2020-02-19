const log = console.log;

// curry 함수
const curry = f =>
    (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

// map 함수
const map = curry((f, iter) => {
    let res = [];
    for(const a of iter){
        res.push(f(a));
    }
    return res;
});

// filter 함수
const filter = curry((f,iter) => {
    let res = [];
    for(const a of iter){
        if(f(a)) res.push(a);
    }
    return res;
});

// reduce 함수
const reduce = curry((f, acc, iter) => {
    if(!iter){
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for(const a of iter){
        acc = f(acc, a);
    }
    return acc;
});