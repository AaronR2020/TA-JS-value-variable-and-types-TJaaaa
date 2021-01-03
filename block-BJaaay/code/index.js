//  Loop basics
let sum=0;
let num=0;
// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.
for(let i=1;i<11;i++){
    console.log(i);
}

// Using `console.log` log all the evan values from 1 to 10.
for(let j=1;j<11;j++){
    if(j%2==0){
        console.log(j);
    }
}

// Using `console.log` log all the od values from 1 to 10.
for(let j=1;j<11;j++){
    if(j%2!=0){
        console.log(j);
    }
}

// Calculate the sum of all numbers from 1 to 10.
for(let k=1;k<11;k++){
    sum+=k;
}
console.log(sum);

// Log all the values from 1 to 10 using while loop
while(num<11){
console.log(num);
num++;
}
