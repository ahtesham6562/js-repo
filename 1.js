
// let a="7"
// if(a==7){
//     console.log("print a" + a)
// }else{
//     console.log("not equal"+a)
// }
// print 1 to 10
// let a=1
// while(a<=10){
//     console.log(a+ "");
//     a++;
// }
// sum of two no
// let a=1
// let sum=0;
// while(a<=10){
//     sum+=a
//     a++;

// }
// console.log("sum="+sum);
// odd no print
// let a=1
// while(a<=20){
//     if(a%2!=0){
//         console.log(a)
//     }a++
// }
// print a table
// let Num=  8
// let a=1
// while(a<=10){
//     console.log(`${Num}*${a}= ${Num*a}`)
//     a++
// }
// let Num
// let a=5
// while(a>=1){
//     console.log(a)
//     a--
// }
// let Num=123456

// while(Num>0){
//     let digit=Num%10
//     console.log(digit)
//   Num=parseInt  (Num/=10)
// }
let  Num=123456
let count=0
while(Num>0){
    let digit=Num%10
    
    count=count*10+digit
    console.log(count)
    Num=parseInt(Num/=10)
}


