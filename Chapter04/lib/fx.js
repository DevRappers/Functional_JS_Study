const log = console.log;

// map 함수
const map = (f, iter) => {
    let res = [];
    for(const a of iter){
        res.push(f(a));
    }
    return res;
};

// filter 함수
const filter = (f,iter) => {
    let res = [];
    for(const a of iter){
        if(f(a)) res.push(a);
    }
    return res;
};

// reduce 함수
const reduce = (f, acc, iter) => {
    if(!iter){
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for(const a of iter){
        acc = f(acc, a);
    }
    return acc;
};