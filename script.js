// function fibonaaci(n){
//    const fib =[0,1]
//   for(let i=2;i<n;i++){
//    fib[i]=fib[i-1]+fib[i-2]
//   }
//   return fib
// }

// console.log(fibonaaci(7))

// facotorial of a number

// function facotorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// }

// console.log(facotorial(5));

// prime number
// function isPrime(n){
//   if(n<2){
//     return false
//   }
//   for(let i=2; i<n;i++){
//     if(n%i===0){
//       return false
//     }
//   }
//   return true
// }

// console.log(isPrime(8))

// is power of two
// function isPowerOfTwo(n){
//   if(n<1){
//     return false
//   }
//   while(n>1){
//     if(n%2!==0){
//       return false
//     }
//     n=n/2
//   }
//   return true
// }

// console.log(isPowerOfTwo(3))

// another way to do it

// function isPowerBitweise(n) {
//   if (n < 1) {
//     return false;
//   }
//   return (n & (n - 1))=== 0;
// }
// console.log(isPowerBitweise(3))

// recursion fibnoacci

// function recursiFibanacci(n){
//   if(n<2){
//     return n
//   }
//   return recursiFibanacci(n-1)+recursiFibanacci(n-2)
// }
// console.log(recursiFibanacci(6))

// recursive factorial

// function recursiFactorial(n){
//   if(n===0){
//     return 1
//   }

//   return n*recursiFactorial(n-1)
// }

// console.log(recursiFactorial(5))

// linear search

// function linearSearch(arr,target){
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]===target){
//       return i
//     }
//   }
//   return -1
// }

// console.log(linearSearch([-5,2,10,4,6]))

// binary search function

// function binanrySearch(arr,target){
//   let leftIndex=0
//   let rightIndex=arr.length -1
//   while(leftIndex<=rightIndex){
//     let mideleIndex=Math.floor((leftIndex+rightIndex)/2)
//     if(target<arr[mideleIndex]){
//       rightIndex=mideleIndex -1
//     }
//     else{
//       leftIndex = mideleIndex +1
//     }

//   }
//   return -1
// }

// console.log(binanrySearch([-5,2,4,6,10]))

// bubble sort arr

// function bubleSort(arr){
//   let swapped
//   do{
//     swapped =false
//     for( let i=0;i<arr.length-1;i++){
//       if(arr[i]>arr[i+1]){
//         let temp = arr[i]
//         arr[i]=arr[i+1]
//         arr[i+1]=temp
//         swapped=true
//       }
//     }
//   }while(swapped)
// }
// const arr = [-6,20,8,-2,4]
// bubleSort(arr)
// console.log(arr)

// insortion sort
// function inserctionSort(arr){
//   for(let i=1;i<arr.length;i++){
//     let numberToInsert=arr[i]
//     let j=i-1
//     while(j>=0 && arr[j]>numberToInsert){
//       arr[j+1]=arr[j]
//       j=j-1
//     }
//     arr[j+1]=numberToInsert
//   }
// }

// const arr =[8,20,-2,4,-6]
// inserctionSort(arr)
// console.log(arr)

// quick sort

// function quickSort(arr){
//   if(arr.length<2){
//     return arr
//   }
//   let pivote = arr[arr.length-1]
//   let left=[]
//   let right=[]
//   for(let i=0;i<arr.length-1;i++){
//     if(arr[i]<pivote){
//       left.push(arr[i])
//     }
//     else{
//       right.push(arr[i])
//     }
//   }
//   return[...quickSort(left),pivote,...quickSort(right)]
// }

// const arr =[8,20,-2,4,-6]
// console.log(quickSort(arr))

// cartesian product
// function carteisanProduct(arr1, arr2) {
//   const result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       result.push([arr1[i], arr2[j]]);
//     }
//   }
//   return result;
 
// }


// const arr1 = [1, 2];
// const arr2 = [3, 4, 5];
// console.log(carteisanProduct(arr1,arr2));

// climbing staircase
// function climblisataircase(n){
//   const noOfways=[1,2]
//   for(let i=2;i<=n;i++){
//     noOfways[i]=noOfways[i-1]+noOfways[i-2]
//   }
//   return noOfways[n-1]
// }

// console.log(climblisataircase(1))
// console.log(climblisataircase(2))
// console.log(climblisataircase(3)


// tower of hanoi

// function towerOfHanoi(n,fromRod,toRod,usingRod){
//   if(n===1){
//     console.log(`move disk 1 from ${fromRod} to ${toRod}`)
//     return
//   }
//   towerOfHanoi(n-1,fromRod,usingRod,toRod)
//   console.log(`move disk ${n}from ${fromRod} to ${toRod}`)
//   towerOfHanoi(n-1,usingRod,toRod,fromRod)
// }

// towerOfHanoi(2,'A','C','B')