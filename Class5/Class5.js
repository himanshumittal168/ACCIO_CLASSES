// // q1-Print Decreasing
// // Input 5
// // Output 5 4 3 2 1
  

// //                                         n,pd(n-1)
// // Step1) Exception (umeed)    pd(n)   ->   n,n-1,n-2,n-3,.........1;
// // Step2) Faith  (vishwas)       pd(n-1) ->     n-1,n-2,n-3,n-4,.....1;
// // Step3) Relation      pd(n)   ->   PRINT n and then call pd(n-1);


function pd(n)
{
    if(n==0)
        return;
    console.log(n);
    pd(n-1);
}
// // tc sc O(N)

// // q2 -> Print Increasing
// // Input-5
// // Output-1 2 3 4 5

// // Step1 Exception  pi(n)   ---------> [1,2,3,4,5............n]

// // Step2 Faith    pi(n-1)------->      [1,2,3,4,5,........,n-1]
// // Step3 Relation b/w    pi(n)---> pi(n-1) then print n


function pi(n)  //l1
{
    if(n==0) //l2
        return;//l3
    pi(n-1);//l4
    console.log(n);//l5
}

// pi(5);


// 5l1->5l2->5l4->
//                 4l1->4l2->4l4->
//                                 3l1->3l2->3l4->
//                                                 2l1->2l2->2l4->
//                                                                 1l1->1l2->1l4->   (1L5)
//                                                                                 0l1->0l2->0l3  









// function abcd()
// {
//     console.log("HIMANSHU");//l1
//     console.log("UTKARSH");//l2
//     console.log("MADHUR");//l3
// }

// abcd();





// q3) Print Dec Increasing
// input -> 5
// output-> 5 4 3 2 1 1 2 3 4 5 


// Step1 pdi(n)---------->  n,n-1,n-2,...1,1,...,n-2,n-1,n
// //   pdi(4)---- 4 3 2 1  1 2 3 4

// Step2 pdi(n-1)---->        n-1,n-2,n-3,...1,1,...n-2,n-1;
// // pdi(3)-- 3 2 1 1 2 3

// Step3 Relations   pdi(n)---  n[CALL]n
// pdi(5)---   5[pdi(4)]5


function pdi(n)
{
    if(n==0)
        return;
    console.log(n);
    pdi(n-1);
    console.log(n);
}

pdi(0);


// function xPowerN(x, n) {
//     // Write your code here
    
//     if(n==0){
//       return 1;
//     }
//     return x * xPowerN(x,n-1);
//   }



//            2,5->2,4
function power_brute(a,b)
{
    if(b==0)
        return 1;
    // let rec_ans=power(a,b-1);
    // let my_ans=rec_ans*a;

    // let my_ans=power(a,b-1)*a;
    // return my_ans;
    return power(a,b-1)*a;
}


function power_better(a,b)
{
    if(b==1)
        return a;
    let rec_ans=power_better(a,b/2);
    let my_ans=rec_ans*rec_ans;
    if(b%2!=0)
        my_ans=my_ans*a;
    return my_ans;
}
