function fibonacci(n){
    if(n<2){
        return n;
    }else{
        
        return (fibonacci(n-1)+fibonacci(n-2));
    }
}

function BinarySearch(arr,target){
    let mid=Math.floor(arr.length/2);
    let leftArr=[];
    let rightArr=[];

    if(arr[mid]===target){
        return mid;
    }else if(target>arr[mid]){
        for(let i=mid+1;arr.length;i++){
            rightArr.push(arr[i]);
        }
        return BinarySearch(rightArr,target);
    }else if(target<arr[mid]){
        for(let i=mid-1;0;i--){
            leftArr.push(arr[i]);
        };
        return BinarySearch(leftArr,target);
    }else{
        return -1
    };
}

// console.log(fibonacci(2));

console.log(BinarySearch([2,4,6,9,20],20))