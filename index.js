function myEach(collection, callback) {
    let arrayOfValues = collection;

    if (Array.isArray(arrayOfValues) === false) {
        arrayOfValues = Object.values(arrayOfValues)
    }

    for (const element of arrayOfValues) {
        callback(element);
    }

    return collection;
}

function myMap (collection, callback) {
    let arrayOfValues = collection;

    if (Array.isArray(arrayOfValues) === false) {
        arrayOfValues = Object.values(arrayOfValues)
    }

    const newArray = [];

    for (const element of arrayOfValues) {
        newArray.push(callback(element))
    }

    return newArray;
}

function myFind(collection, predicate) {
    let arrayOfValues = collection;

    if (Array.isArray(arrayOfValues) === false) {
        arrayOfValues = Object.values(arrayOfValues)
    }

    for (const elem of arrayOfValues) {
        if (predicate(elem) === true) {
            return elem;
        } 
    }

    return undefined;
}

function myFilter(collection, predicate) {
    let arrayOfValues = collection;

    if (Array.isArray(arrayOfValues) === false) {
        arrayOfValues = Object.values(arrayOfValues)
    }

    const filteredArray = [];

    for (const elem of arrayOfValues) {
        if (predicate(elem) === true) {
            filteredArray.push(elem);
        }
    }

    return filteredArray;
}

function mySize(collection) {
    let arrayOfValues = collection;

    if (Array.isArray(arrayOfValues) === false) {
        arrayOfValues = Object.values(arrayOfValues)
    }
    let counter = 0;

    for (const elem of arrayOfValues) {
        counter++;
    }

    return counter;
}

function myReduce(collection, callback, acc = 0) {
    let arrayOfValues = collection;

    if (Array.isArray(arrayOfValues) === false) {
        arrayOfValues = Object.values(arrayOfValues)
    }

    if (acc === 0) {
        let counter = arrayOfValues[0];
        for (let i = 1; i < arrayOfValues.length; i++) {
            counter = callback(counter, arrayOfValues[i]);
        }
        return counter;
    } else {
        let counter = acc;
        for (let i = 0; i < arrayOfValues.length; i++) {
            counter = callback(counter, arrayOfValues[i]);
        }
        return counter;
    }
}

function myFirst(array, int = 0) {
    if (int === 0) {
        return array[int];
    } else {
        const newArr = [];
        for (let i = 0; i < int; i++) {
            newArr.push(array[i])
        }
        return newArr;
    }
}

function myLast(array, int = 0) {
    if (int === 0) {
        return array[array.length - 1];
    } else {
        const newArr = [];
        for (let i = array.length - int; i < array.length; i++) {
            newArr.push(array[i])
        }
        return newArr;
    }
}

function myKeys(object) {
    let arr = [];
    for (const key in object) {
        arr.push(key);
    }
    return arr;
}

function myValues(object) {
    let arr = [];
    for (const key in object) {
        arr.push(object[key]);
    }
    return arr;
}
