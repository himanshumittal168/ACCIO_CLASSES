// q1 
// INDIA
// I -> 2


// INDIAISMYCOUNTRYILOVEINDIA---->

// I+NDIAISMYCOUNTRYILOVEINDIA

// 0 1 2 3 4
// I N D I A

// 0,4 count of I
// let ans=1,4 count of I
// my_ans=ans+1;

const readline = require('readline');
   const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
     });
   rl.on('line', (input) => {
     console.log(countX(input, 0, input.length));
     rl.close();
     });

function countX(str,i,n)  //l1
{
    if(i==n)//l2
        return 0;//l3
    if(str[i]=='x')//l4
    {
        return 1+countX(str,i+1,n);//l5
    }
    return countX(str,i+1,n);//l6
}
   I N D I A
   0 1 2 3 4
("INDIA,0,5")->(1,5)->2,5->3,5->4,5->5,5
                                4,5<-5,5




0 1 2 3 4 5 
X A X I H X

Step1  count(0,5)->2
Step2 count(1,5)->2




COUNTING OF S
Ashish   

A+shish
    s+hish
        h+ish
            i+sh
                s+h
                    h+""
""->h?0
h->s?0
s->i?1
i->h?1
h->s?1
s->a?2(1+self)
a->2






