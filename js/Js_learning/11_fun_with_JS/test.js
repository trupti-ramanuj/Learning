// const myArr = []
//     % DebugPrint(myArr)

// continious, Holey

//SMI(small integer)
//Packed element
//Double(float, sting, function)


const arrTwo = [1, 2, 3, 4, 5]
//PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
//PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
//PACKED_SMI_ELEMENTS

arrTwo[10] = 11
//HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[19]);