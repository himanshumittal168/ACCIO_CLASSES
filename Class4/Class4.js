// // // console.log("A");
// // // function abc()  //function defination
// // // {
// // //     console.log("HELLO"); //function body
// // // }
// // // console.log("B");
// // // abc(); // function calling

// // // these a &b are known as Arguments
// // // function abc(a,b)  
// // // {
// // //     console.log(a,b);
// // // }

// // // abc(2,10);



// // function add(a,b)
// // {
// //     let ans=a+b;
// //     return ans;
// // }

// // // console.log(add(2,5))
// // let result=add(2,5);
// // console.log(result);


// // DRY->Dont Repeat YourSelf
// // 5 10 15 20 25 30 35 40 45 50

// // for(let i=1;i<=10;i++)
// //     console.log(i*5);

// // for(let i=1;i<=10;i++)
// //     console.log(i*2);


// // function table(x)
// // {
// //     for(let i=1;i<=10;i++)
// //         console.log(i*x)
// // }


// // table(2);

// // function abc(a)
// // {
// //     if(a==2)
// //         return;  // void empty no return
// //     if(a==3)
// //         return 10;  // number
// //     if(a==4)
// //         return "ACCIO";  //string
// //     if(a==5)
// //         return 1.1;  //float,decimal
// // }

// // console.log(abc(5))
// // HW-> Can a function return a function (TRUE) *CLOSURE*




// // function abc()
// // {
// //     abc()
// // }


// function printTillN(N, i) {
//     //Write your code here
//         if(i>N){
//             return 
//         }
//         process.stdout.write(i+" ")
//         printTillN(N,i+1)
//     }

// // EXCEPTION
// // FAITH
// // RELATION B/w Step1 and Step2
// // Base Case

// // Question [1] Print Decreasing   
// // I/p -> 5
// // O/p -> 5 4 3 2 1 

// // Step1 -> Exception     abc(5)    5 4 3 2 1
// // Step2 ->Faith          abc(4)    4 3 2 1   
// // Step3 ->Relation       abc(5)    Print 5 abc(4)
//                 // SMALL TASK+recursion 
// // Step4 ->Base Case      abc(0)    Stop

// // GOLDEN RULE-> Never ever Doubt Recursion


// // function printDec(x)  //l1
// // {
// //     if(x==0)  //l2
// //         return;  // Base Case  l3
// //      console.log(x); //l4
// //     printDec(x-1); //l5
// //     console.log(x); //l6
// // }

// // printDec(5);


// // // pd(5)->(5)->pd(4)->(4)->pd(3)->(3)->pd(2)->(2)->pd(1)->(1)->pd(0)
// // pd(5)->[5]->pd(4)->[4]->pd(3)->[3]->pd(2)->[2]->pd(1)->[1]->pd(0)->

// // Question2- Print Increasing
// // I/p-> 5    
// // O/p-> 1 2 3 4 5 

// // Step1-> Exception   abc(5)    1 2 3 4 5
// // Step2-> Faith       abc(4)    1 2 3 4 
// // Step3-> Relation    abc(5)    abc(4)  Print 5
// // Step4-> Base Case   abc(0)    STOP 🛑

// function pi(x) 
// {
//     if(x==0)  //l1
//         return;  //l2
//     pi(x-1);//l3
//     console.log(x); //l4
// }

// // pi(5);

// pi(3);
// // 3l1->3l3->2l1->2l3->1l1->1l3->0l1->0l2->1l4


// fact(5)--- fact(4)*5   24*5=120
// fact(4)     fact(3)*4  6*4=24

// 5!-> 5*4*3*2*1  -> 120
// 4!-> 4*3*2*1    -> 24
// 3!-> 3*2*1      -> 6


// STEP1 Exception   fact(x)    -- x!   (x*(x-1)*(x-2)......1)
// STEP2 Faith       fact(x-1)  -- (x-1)!  ((x-1)*(x-2)*(x-3)......1)
// STEP3 Relation    fact(x)   fact(x-1)*x


// function fact(x)
// {
//     if(x==1)  //BASE CASE  l1
//         return 1;  //l2
//     let rec_ans=fact(x-1);//l3
//     let my_ans=rec_ans*x;//l4
//     return my_ans;//l5
// }

// fact(4)
// 4l1->4l3->3l1->3l3->2l1->2l3->1l1->1l2-> 2l4->3l4->4l4->Line no 151




// Q1 Decrease Print Increase Print

// Step1->    abc(4)->   4 3 2 1 1 2 3 4

// Step2-> abc(3)->      3 2 1 1 2 3

// Step3->  abc(4)->    PRINT4  abc(3)  PRINT4

// function pdi(x)
// {
//     if(x==1)
//         return;
//     console.log(x);
//     pdi(x-1);
//     console.log(x);
// }



// pdi(5)



// Fibonani->
// [0 1 1 2 3 5 8 13 21 34 55 89 144]

// fib(i)=fib(i-1)+fib(i-2);
// //  0 1 2 3 4 5 6 7 8 9 10 11 12 13


// function fib(i)
// {
//     if(i==0 || i==1)
//         return i;
//     let rec_ans=fib(i-1);
//     let rec_ans2=fib(i-2);
//     let my_ans=rec_ans+rec_ans2;
//     return my_ans;
// }



// Power    a,b    a^b    2,3     8
Multiply    2,5     5*2=10

2+2+2+2+2

2,1=>2       2,2=>2,1+2
2,2=>4       2,3->2,2+2
2,3=>6       2,4->2,3+2
2,4=>8
function Multiply(a,b)
{
    if(b==1)
        return a;
    let rec_ans=Multiply(a,b-1);
    let my_ans=rec_ans+a;
    return my_ans;
}

function power(a,b)
{
    if(b==1)
        return a;
    let rec_ans=power(a,b-1);
    let my_ans=rec_ans*a;
    return my_ans;
}

// Step1    a,b    a^b    2,4     2^4
// STEp2    a,b-1   a^b-1  2,3    2^3

// STEP3    a,b  ( a,b-1)*a 



// 2^4=2^3*2


