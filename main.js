
// var N1 = Number (window.prompt("enter number 1"));
// var N2=Number (window.prompt("enter number 2"));
// var N3=Number (window.prompt("enter number 3"));
// var max = -999;
// var min = 999;


// if(N1 >max )
// { 
//     max=N1;
//     if(N2 >max)
//     {
//         max=N2;
//         if(N3>max)
//         {
//             max=N3;
//         }
//     }
// }
// if(N1<min)
// {
//     min=N1;
//     if(min>N2)
//     {
//         min=N2;
//     }
//     if(min>N3)
//     {
//         min=N3
//     }
// }
// console.log(max);
// console.log(max);
// var N1 = Number (window.prompt("enter number 1"));
// if(N1 % 2 ==0)
// {
//     console.log("even");
// }else{
//     console.log("odd");
// }

// var N1 = Number (window.prompt("enter number 1"));

// var k;
// for(var i =0 ;i <10 ;i++)
// {
    
  
//     k=N1*i;
    
//     console.log(k);
 
// }

// var N1 = Number (window.prompt("enter number 1"));
// var N2 = Number (window.prompt("enter number 2"));
// var N3 = Number (window.prompt("enter number 3"));
// var N4 = Number (window.prompt("enter number 4"));
// var N5 = Number (window.prompt("enter number 1"));
// var tot=0;

// var avg=0;
// var percent;
// tot=N1+N2+N3+N4+N5;
// console.log(tot);
// avg=tot/5;
// console.log(avg);

// percent=tot/500*100;

// console.log(percent);

// var N1 = Number (window.prompt("enter number 1"));

// if( N1==1)
// {
//     console.log("31");
// }
// if(N1==2)
// {
//     console.log("29");
// }
// if(N1==3)
// {
//     console.log("30");
// }
// if(N1==4)
// {
//     console.log("31");
// }
// if(N1==5)
// {
//     console.log("30");
// }
// if(N1==6)
// {
//     console.log("30");
// }
// if(N1==7)
// {
//     console.log("31");
// }
// if(N1==8)
// {
//     console.log("30");
// }
// if(N1==9)
// {
//     console.log("31");
// }
// if(N1==10)
// {
//     console.log("30");
// }
// if(N1==11)
// {
//     console.log("31");
// }
// if(N1==12)
// {
//     console.log("30");
// }


// var N1 = Number (window.prompt("enter number"));
// switch(true) {
//     case (N1>=90):
//     console.log("A");
//       break;
//     case (N1<90&&N1>=80):        
//     console.log("B");
//       break;
//       case (70<=N1&&N1<80):
//     console.log("C");
//       break;
//       case (50<=N1&& N1<70):
//        console.log("D");
//       break;
//       // code block
//   }

// let word = prompt("Please enter word:");

// switch(true) {
//     case (word=='a'):
//     console.log("vowel");
//       break;
//     case (word=="o"):        
//     console.log("vowel");
//       break;
//       case (word=="u"):
//     console.log("vowel");
//       break;
//       case (word=="l"):
//        console.log("vowel");
//       break;
//       case (word=="i"):
//        console.log("vowel");
//       break;
//       default:
//         console.log("not vowel");
//       // code block
//   }


// var N1 = Number (window.prompt("enter number"));
// var operator = prompt("enter operator")
// var N2 = Number (window.prompt("enter number2"));
// switch(true) {
//     case (operator=='+'):
//     console.log(N1+N2);
//       break;
//     case (operator=="-"):        
//     console.log(N1-N2);
//       break;
//       case (operator=="*"):
//     console.log(N1*N2);
//       break;
//       case (operator=="/"):
//        console.log(N1/N2);
//       break;
      
//       // code block
//   }

// var sentence = prompt("Please enter a word:");
// var count=0;
// var letter=0;
// var vowel= false;
// for(var i =0;i<sentence.length;i++)
// {
//     if(sentence.charAt(i)== ' ' )
//     {
//         count++;
        
//     }  
//     if(sentence.charAt(i)=="a"||sentence.charAt(i)=="o"||sentence.charAt(i)=="u"||sentence.charAt(i)=="l"||sentence.charAt(i)=="i"){
//         vowel++;

//     }
// }
// console.log("number of letters in word:"+(i-count));
// console.log("number of spaces in sentence:"+count);
// console.log("number of vowels in sentence:"+vowel);

// var text = prompt("Enter text");
// var i=0;
// var wordCounter=1;

// while (i< text.length) {
//     var j=i;
//     var charCounter=0;
//     var vowelCounter=0;
//     while (text[j]!=' ') {
//         charCounter+=1;
//         if(text[j]=="a"||text[j]=="o"||text[j]=="u"||text[j]=="l"||text[j]=="i"){
//             vowelCounter+=1;
//         }
//         j+=1;
//     }
//     console.log("charCounter"+charCounter.toString());
//     console.log("vowelCounter"+vowelCounter.toString());
//     if (text[i]==' ') {
//         wordCounter+=1;
//     }
//     console.log("wordCounter"+wordCounter.toString());
//     console.log("------------------------------");
//     i=j;
// }

// const array1 = new Array(3, 1, 7, 9);
// const array2 = new Array(2, 4, 1, 9, 3);
// var sum = 0;

// for (var i = 0; i < array1.length; i++) {
//     var found = false;
//     for (var j = 0; j < array2.length; j++) {
//         if (array1[i] == array2[j]) {
//             found = true;
//             break;
//         }
//     }

//     if (!found) {
//         sum += array1[i];
//     }    
    
//     for (var k = 0; k < array2.length; k++) {
//         var isInArray1 = false;
//         if (array2[i] == array1[k]) {
//             isInArray1 = true;
//             break;
//         }   
//     }
    
//     if (!isInArray1) {
//         sum += array2[i];
//     }
// }
// console.log(sum);
function dotproduct(array1, array2) {
    const array3 = [];
    var sum=0;

    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            array3[i] = array1[i] * array2[j];

        }
        
    }

    return array3;
}

const Array1 = [2, 4, 5];
const Array2 = [2, 4, 5];

console.log(dotproduct(Array1, Array2));














 

