
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


// function dotproduct(array1, array2) {
//     const array3 = [];
//     var sum=0;

//     for (var i = 0; i < array1.length; i++) {
//         for (var j = 0; j < array2.length; j++) {
//             array3[i] = array1[i] * array2[j];
           
//         }
        
//     }
    
//     return array3;
// }
// ---------------------------------------------------------------------------------------------------------------------------
// const Array1 = [2, 4, 5];
// const Array2 = [2, 4, 5];

// console.log(dotproduct(Array1, Array2));

// const arr = new Array(5,4,3,6,2,7,9,1,8,10);

// let n = arr.length;

// for (let i = 1; i < n; i++) {
//     let key = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > key) {
//         arr[j + 1] = arr[j];
//         j = j - 1;
//     }

//     arr[j + 1] = key;
// }
// console.log(arr);
// ------------------------------------------------------------------------------------------------------------------------
// const word = ["My", "Go", "Code","My","Go"];


// let frequency = {
//     Go : 3,
//     My : 2,
//     Code :1,

// } 

// function removeDuplicates(word) { 
//     let unique = []; 
//     word.forEach(element => { 
//         if (!unique.includes(element)) { 
//             unique.push(element); 
//         } 
//     }); 
//     return unique; 
// } 

// function compare(a,b)
// {
//     return frequency[b]-frequency[a];
// }


// console.log(word.sort(compare) );
// console.log(removeDuplicates(word));
// ---------------------------------------------------------------------------------------------------------------
// var string = prompt("Enter a string:");
// console.log(string);

// function checker(string) {
//     var regex = /^(.).*\1$/;

//     if (regex.test(string)) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }

// checker(string);
// -------------------------------------------------------------------------------------------------------------
// function isPalindrome(word) {
    
//     if (word.length <= 1) {
//         return true;
//     }

   
//     if (word[0] === word[word.length - 1]) {
//         return isPalindrome(word.slice(1, -1));
//     } else {
//         return false;
//     }
// }

// var userInput = prompt("Enter a word:").toLowerCase(); 
// if (isPalindrome(userInput)) {
//     console.log("It's a palindrome!");
// } else {
//     console.log("It's not a palindrome.");
// }
// -------------------------------------------------------------------------------------------------------------------------


// var day = prompt("enter day");
// var month =prompt("enter month");
// var year = prompt("enter year");


// console.log(timeformilkandcookies(day,month));

// function timeformilkandcookies(day,month)
// {
//     if (day==24&&month==11 )
//     {
//         return true;
//     }else{
//         return false;
//     }
// }

// --------------------------------------------------------------------------------------------------------------------

// const user1=["samuel",24];
// const user2=["joel",36];
// const user3=["lily",24];

// compareage(user1,user2);




// function compareage(x,y){
//     for(var i = 0 ; i< x.length;i++)
//     {
//         for(var k = 0 ; k< y.length;k++)

//     if(x[1]>y[1])
//     {
//         console.log(x+" is older than "+y);

//     }else if(x[1]==y[1])
//     {
//         console.log(x+" same age as "+y);
//     }else if(x[1]<y[1])
//     {
//         console.log(y+" is older than "+x);
//     }
// }


// }
// --------------------------------------------------------------------------------------------------------------------------

// const numbers=prompt([]).split(",").map(Number);

// console.log(ispositivedominance(numbers))   ;


// function ispositivedominance(numbers){
//     var positive=0;
//     var negative=0;
//     var uniqueValues=[];
//     for(var i =0 ; i<numbers.length;i++)
//     {
//         if(numbers[i]<0)
//         {
//             negative++;
//         }
//         else if(numbers[i]>0 &&!uniqueValues.includes(numbers[i]))
//         {
//             positive++;
//             uniqueValues.push(numbers[i]);
//         }
        

//     }
//     if(positive>negative)
//     {
//         return true;    
//     }else {
//         return false;
//     }
    
// }



 

