const user_id=5698   //its value cant be changed again


let account_email="ask@gmail.com"  // this is good practice bcoz it act as per the scope of the variable


var accout_name="Aadarsh"  // this is bad practice bcoz it does not act as per the scope of the variable


account_city="jaipur"  // works but not a godd practice because now it will be globalyy declared and can be changed from anywhere....do not works in strict mode


console.log(user_id)  //for output


console.table([user_id,account_email,accout_name,account_city])  //for output in tabular form