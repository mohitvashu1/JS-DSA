function Recursion(num){
  if(num===0){return }

    console.log(num);
    num=num-1;
    Recursion(num)
}

let num=20;
Recursion(num)