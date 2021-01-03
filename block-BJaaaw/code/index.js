// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
 let num=prompt(`enter  number `);
 if(num%2==0){alert("Even")}
 else{alert("odd")}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let numA=prompt(`enter fisrt number `);
let numB=prompt(`enter second number `);
numA=Number(numA);
numB=Number(numB);
if(numA>numB){
  alert(`${numA} is bigger`);
}
else{
  alert(`${numB} is bigger`);
}
// 3. Convert the above code using`?` terniary operator
numA>numB? `${numA} is bigger`:`${numB} is bigger`
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let house_name=prompt(`enter House Name `);

if(house_name=="stark"){alert(`Winter is coming`);}
else if(house_name=="lannister"){alert(` A lannister always pays his debt`);}
else{
  alert(`all men must die`);
}

// 5. Convert the above code using`?` terniary operator
// Switch
switch(house_name){
  case "stark":alert(`Winter is coming`);break;
  case "stark":alert(` A lannister always pays his debt`);break;
  default:alert(`all men must die`)
  
}


// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month_no=Number(prompt(`enter month number `));
switch(month_no){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12: alert("31 days");break;
  case 2: alert(`29 days`);break;
  default:alert("30 days");
}
/* 7.
- Write a program that take the salery of the user using prompt
 and alert the in -hand amount.
 You will find out the in -hand amount by deducting the tax amoun from salery.
 Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %
*/



let salary=Number(prompt("enter salary;"));

if(salary<=20000){
  salary=salary-salary*10/100;
  alert(salary);
}
else if(salary<=40000){
  salary=salary-salary*20/100;
  alert(salary);
}

else if(salary>50000){
  salary=salary-salary*30/100;
  alert(salary);
}
//checkout why not working
alert(`trying with switch`)
let salary=Number(prompt("enter salary;"));
switch(salary){
  case salary<=20000: 
   salary=salary-salary*10/100;
  alert(salary);

  break;
  case salary<=40000: 
   salary=salary-salary*20/100;
  alert(salary);
  break;
  case salary>50000:  
  salary=salary-salary*10/100;
  alert(salary);
  break;
}
alert(salary);

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks=prompt("enter marks;");
switch(marks){
  case marks>100: alert("marks cant be above 100");break;
  case (marks>80 && marks<100): alert("Grade A");break;
  case (marks>50 && marks<80): alert("Grade B");break;
  case (marks>30 && marks<50): alert("Grade C");break;
 case marks > 0: alert("grade D"); break;
}

if(marks>100){
  alert("cant be above 100");
}
else if(marks>80 && marks<100){
  alert("Grade A");
}
else if(marks>50 && marks<80){
  alert("Grade B");
}
else if(marks>30 && marks<50){
  alert("Grade C");
}
else{
  alert("grade D");
}



/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Not a valid input`
  - Anything else should alert`Not a valid input`
*/
let weather=prompt("What is the weather like outside?");
switch(weather){
  case "sunny": alert("Wear a T-shirt");break;
  case "rainy ": alert(" Don't forget to take your raincoat");break;
  case "hot ": alert(" Get a hanky");break;
  case "freezing ": alert(" Not a valid input");break;
 default: alert("Not a valid input ");
}
