"use strict"
/**
 * Deep assign
 * @param source source object that should be copied
 * @returns {Object} copied object
 */
function deepAssign(source){
    if (source == null || source == undefined) throw new TypeError('source cannot be null');

    let objNew = new Object(); 
    let propNames = Object.getOwnPropertyNames(source);

    // Iterate through property names and receipt
    //a property descriptor for an own property of a source
    for (var i = 0; i<propNames.length; i++){
        let propName = propNames[i];
        let desc = Object.getOwnPropertyDescriptor(source, propName);
        let descNames = Object.getOwnPropertyNames(desc);
        let descFull = new Object();

        // Iterate through descriptor names and receipt
        // a string-valued name and a property descriptor
        for (var j = 0; j<descNames.length; j++){
            let keyName = descNames[j];
            let keyValue = desc[keyName];

            if (typeof keyValue !== 'object'){
                descFull[keyName]= keyValue;
            } else {
                if(keyValue == null){
                    descFull[keyName] = null;
                } else {
                    descFull[keyName] = deepAssign(keyValue)
                    }
                }
        }
        Object.defineProperty(objNew, propName, descFull); // modify an existing property on an object
    }
    return objNew // return the copying object
}

var foo = {o:34};
var source = {a:{d:'aaa', b:0, c:null}, c:5, foo};
var target = deepAssign(source);

console.log(target); // => {a:{d:'aaa', b:0, c:null}, c:5, foo:{o:34}}