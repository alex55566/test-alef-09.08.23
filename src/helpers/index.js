export function update(val, arr, prop) {
    const obj = arr.find(n => n.id === val.id);
    if (obj) {
        Object.assign(obj, val);
    } else {
        arr.push(val);
    }
    return arr
}

export function getAgeString(age) {
    let count = age % 100
    if (count >= 10 && count <= 20) {
        return 'лет'
    }

    else {
        count = age % 10
        if (count === 1) {
            return 'год'
        } else if (count >= 2 && count <= 4) {
            return 'года'
        } else {
            return 'лет'
        }
    }
}
