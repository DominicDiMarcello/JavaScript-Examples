ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2]
    console.log(countNumbers(array))
}

ex2 = () => {
    const array = [12, 55, "2", 22, 11, true]
    console.log(minNumber(array));
}

ex3 = () => {
    array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(shortestString(array));
}

ex4 = () => {
    let array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}

ex5 = () => {
    let array = ["this", "is", 1, 3, 2.1, "a", "test"];
    countIt(array);
}

ex6 = () => {
    let array = ["this", "is", 1, 3, 2.1, "a", "test"];
    let result = countItems(array);
    console.log("Number of Integers: " + result.numIntegers)
    console.log("Number of Decimal Numbers: " + result.numDecimals)
    console.log("Number of Strings: " + result.numStrings)

}

ex7 = () => {
    let person1 = { name: "Alice", age: 22 }
    let person2 = { name: "Bob", age: 21 }
    let person3 = { name: "Charlie", age: 23 }

    let peopleArray = [];
    peopleArray.push(person1);
    peopleArray.push(person2);
    peopleArray.push(person3);

    peopleArray.sort((a, b) => (a.age - b.age))

    console.table(peopleArray)
}

ex8 = () => {
    let p1 = createPerson("Alice", 11)
    let p2 = createPerson("Bob", 22)
    let p3 = createPerson("Charlie", 33)

    let personArray = [];
    personArray.push(p1)
    personArray.push(p2)
    personArray.push(p3)

    console.log(countOver20(personArray))
    //console.table(personArray);
}



countNumbers = (array) => {
    let retval = 0;
    for (let i of array) {
        if (typeof i == "number" && !Number.isInteger(i)) {
            retval ++;
        }
    }
    return retval;
}

minNumber = (array) => {
    let results = array[0] - 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == "number" && i < results) {
            results = array[i]
        }
    }
    return results;
}

shortestString = (array) => {
    array.sort((a, b) => a.length - b.length)
    return array[0]
}

countLetters = (array) => {
    let retval = 0;
    for (let i = 0; i < array.length; i++) {
        retval += array[i].length
    }
    return retval
}

countIt = (array) => {
    console.log(countIntegerNumbers(array));
    console.log(countDecimalNumbers(array));
    console.log(countStrings(array));
}

countIntegerNumbers = (array) => {
    let retval = 0;
    for (let i of array) {
        if (Number.isInteger(i)) [
            retval++
        ]
    }
    return "Number of Integers: " + retval
}

countDecimalNumbers = (array) => {
    let retval = 0;
    for (let i of array) {
        if (typeof i == "number" && !Number.isInteger(i)) {
            retval++
        }
    }
    return "Number of Decimal Numbers: " + retval
}

countStrings = (array) => {
    let retval = 0;
    for (let i of array) {
        if (typeof i == "string") {
            retval++
        }
    }
    return "Number of Strings: " + retval
}

countItems = (array) => {
    let retval = {
        numIntegers: 0,
        numDecimals: 0,
        numStrings: 0
    }
    for (let i of array) {
        if (Number.isInteger(i)) {
            retval.numIntegers++
        }
        if (typeof i == "number" && !Number.isInteger(i)) {
            retval.numDecimals++
        }
        if (typeof i == "string") {
            retval.numStrings++
        }
    }     
    return retval
}

createPerson = (name, age) => {
    retval = {
        name: "",
        age: 0
    }
    retval.name = name;
    retval.age = age;

    return retval
}

countOver20 = (personArray) => {
    let retval = 0;
    for (let i in personArray) {
        if (personArray[i].age > 20) {
            retval++
        }
    }
    return retval;
}

const main = async () => {
    ex8();
}

main();