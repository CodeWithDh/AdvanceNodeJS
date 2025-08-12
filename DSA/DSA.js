function fibonacci(n){
    if(n<2){
        return n;
    }else{
        
        return (fibonacci(n-1)+fibonacci(n-2));
    }
}

function BinarySearch(arr,n){
    let mid=Math.floor((arr.length)/2);
    let leftarr=[];
    let rightarr=[];
    if(n===arr[mid]){
        return mid;
    }else if(n<arr[mid]){
        console.log("left: ",leftarr)
        return BinarySearch(leftarr,n)
    }else if(n>arr[mid]){
        console.log("right: ",rightarr)
        return BinarySearch(rightarr,n)
    }else{
        return -1;
    }
}

// console.log(fibonacci(2));

console.log(BinarySearch([2,4,6,9,20],20))