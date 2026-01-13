let arr = [1,1,2,2,4,5,5,69,78,78]

function returnX(){
    let x=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==arr[x]){
            arr[x] = arr[i]
            
              
        }
    }
    return arr
}

console.log(returnX());