/*
🎖 Write a program to calculate the total price of your phone purchase. With these conditions
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted like ($334.76).
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
*/

const SPENDING_THRESHOLD = 200;
let spending=SPENDING_THRESHOLD;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
let phone_NO=0;
let total=0;
let access_NO=0;
let exit=false;
// your code goes here
while(spending>0&&exit==false){
        let val=Number(prompt("enter 1 to buy phone 2 to buy accessories and 3 to checkout 4 to exit without change"));
        switch(val){
            case 1:
            if((spending-PHONE_PRICE)>0)    
            {phone_NO++;
                spending-=PHONE_PRICE
            }
            else{
                alert("not enogh money");
            }   
            break;
            case 2:
                if((spending-ACCESSORY_PRICE)>0) {
                    access_NO++;
                    spending-=ACCESSORY_PRICE
                }   
                
                else{
                    alert("not enogh money");
                }  
                break;     
            case 3:total=(((PHONE_PRICE*phone_NO)+(ACCESSORY_PRICE*access_NO))*0.08+((PHONE_PRICE*phone_NO)+(ACCESSORY_PRICE*access_NO)));
            if(total>SPENDING_THRESHOLD){
                alert("you have crossed the thresshold level please press 4 and try again")
            }
            else{
                alert(`You have purchased ${phone_NO} phones and ${access_NO} accessories \n you have to pay \$${total} your available balance is\$ ${spending}`)
            }
            break;
            case 4:exit=true;
        }
    }


// ⛑ Answer of the above will `$334.76`.
