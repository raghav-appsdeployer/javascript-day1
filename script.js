// question 1
const question1 = ()=>{
let numeric = 10;
console.log(numeric,`type of ${numeric} is:`,typeof numeric);
let string = "Raghav Sharma";
console.log(string,`type of ${string} is:`, typeof string)
let a  = null;
console.log(a,`type of ${a} is:`,a)
let b = 123456789n;
console.log(b,`type of ${b} is:`, typeof b);
let c;
console.log(c,`type of ${c} is:`,typeof c);
let d = true;
console.log(d,`type of ${d} is:`,typeof d)

}

question1()



const obj = {
    fruit:'Apple',
    price:20
    
}
// question 2 
const question2 = ()=>{
    console.log( `first type of obj is:`,typeof obj," and then after using toString method it will be: ", typeof obj.toString())
}
question2()

// question 3
const question3 = ()=>{
    // adding new keys
    const newObj = {...obj,color:'red',shape:'spherical'}
    console.log(newObj)
    // change existing value
    const changeObj = {...obj,fruit:'mango',price:30}
    console.log(changeObj)
}
question3()
// question 4
const  question4 = ()=>{
const a = prompt('enter first no.:')
const b = prompt('enter second no.:')
const add = Number(a)+Number(b)
const sub = a-b
const multiplication = a*b
const div = a/b
const modulus = a%b
document.write(`addition will be ${add} <br>`)
document.write(`subtraction will be ${sub} <br>`)
document.write(`multiplication will be ${multiplication} <br>`)
document.write(`division will be ${div} <br>`)
document.write(`percentage of one number to the other number of the two numbers will be ${modulus} <br>`)
}
// question 5
const question5 = (a=4)=>{
    const  AreaOfCircle = 3.14*a*a
   const value =  AreaOfCircle.toFixed(2);
    console.log(value)

}
question5(123)
// question 6 
const question6 = ()=>{
    let date = new Date()
    let hour = date.getHours()
    
    if (hour < 12) {
      console.log('good morning')
    } else if (hour < 18) {
      console.log('good afternoon')
    } else {
      console.log('good evening')
    }
}
question6()

// question 7
const question7 = ()=>{
    let date = new Date()
    let hour = date.getHours()
    switch (hour<12 || hour<18 || hour<24 ) {
        case hour<12:
        console.log('good morning');
          break;
        case hour < 18:
            console.log('good afternoon');
          break;
        case hour<24:
            console.log('good evening')
            break;
        default:
            console.log('time incorrect')
      }
}
question7()


// question8

const question8 = ()=>{
const a = prompt('english marks')
const b = prompt('maths marks')
const c = prompt('chemistry marks')
const d = prompt('physics marks')
const e = prompt('hindi marks')

const addition = Number(a)+Number(b)+Number(c)+Number(d)+Number(e)
const average = addition/5
console.log("average will be",average)
}