// create a function to merge two arrays without duplicates javascript arr1=[2,3,4,7] arr2=[3,5,7,9,10]. Without using inbuilt functions
let arr1 = [2,3,4,3,7]
let arr2 = [3,5,7,9,10]

let result = []

for(let i = 0; i < arr1.length; i++){
    let found = false

    for(let j = 0; j < result.length; j++){
        if(arr1[i] === result[j]){
            found = true
            break
        }
    }

    if(found === false){
        result[result.length] = arr1[i]
    }
}

for(let i = 0; i < arr2.length; i++){
    let found = false

    for(let j = 0; j < result.length; j++){
        if(arr2[i] === result[j]){
            found = true
            break
        }
    }

    if(found === false){
        result[result.length] = arr2[i]
    }
}

console.log(result)

//rotate an array to the right by n positions javascript without using inbuilt functions 
let arr = [1,2,3,4,5]
let n = 1

for(let i = 0; i < n; i++){
    let last = arr[arr.length - 1]

    for(let j = arr.length - 1; j > 0; j--){
        arr[j] = arr[j - 1]
    }

    arr[0] = last   
}

console.log(arr)

//create function to find common elements in two arrays without using inbuilt functions in simple javascript
let arr3 = [1,2,3,3,4,5]
let arr4 = [3,4,5,6,7]

let common = []

for(let i = 0; i < arr3.length; i++){
    for(let j = 0; j < arr4.length; j++){
        if(arr3[i] === arr4[j]){
            common[common.length] = arr3[i]
        }
    }
}

console.log(common)