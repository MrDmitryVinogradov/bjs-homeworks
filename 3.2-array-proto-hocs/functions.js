//Задача 1

// getNames
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    return weapons.map(thisArg => thisArg.name);
}

// getCountReliableWeapons

function getCountReliableWeapons(durability) {
    return weapons.filter(element => element.durability > durability).length;
}

// hasReliableWeapons

function hasReliableWeapons(durability) {
    if (getCountReliableWeapons(durability) > 0) {
        return true
    }
    else {
        return false
    }
}

// getReliableWeaponsNames

function getReliableWeaponsNames(durability) {
    return weapons.filter(element => element.durability > durability).map(element => element.name);
}

// getTotalDamage 

function getTotalDamage() {
    return weapons.reduce((accumulator, currentValue) => accumulator + currentValue.attack, 0);
}

// Задача 2

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {
    }
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(500);
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    return arr1.every((currentValue, index) => currentValue === arr2[index]) && arr1.length === arr2.length;
}

// memorize
function memorize(fn, limit) {
    const memory = [];
    const obj = {};
    return (...args) => {
        const findInMemory = memory.find(element => compareArrays(element.args, Array.from(arguments)));
        if (findInMemory) {
            return findInMemory.result;
        }
        else {
            obj.args = Array.from(arguments);
            obj.result = fn(...args);
        }
        memory.push(obj);
        if (memory.length > limit) {
            memory.splice(limit);
        }
        return obj.result;
    }
}
