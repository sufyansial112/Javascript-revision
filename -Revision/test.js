// console.log('test')

const gamename  = new String("SufyanSial") 
const newString = gamename.slice(0, 6)
console.log(newString)

const anotherNUmber = 10000000
// console.log(anotherNUmber.toLocaleString(`en-PK`))

// Objects

// const mySymb = Symbol("mynumber123")

const newObject = {
    "myname": "sufyan-sial",
    mySymb: "mynewnnymber123",
    name: "sufyan",
    place: "noor mahal",
    age: 24,
    email: "sufyansial112@gmail.com",
    price: 23
}

newObject.greetings = function(){
    return ('Hello user sufyan')
}
newObject.greetings2 = function(){
    return(` hello user ${this.myname}`)
}

// console.log(newObject["mySymb"])
// console.log(newObject["myname"])
// console.log(newObject.greetings())
// console.log(newObject.greetings2())

const obj1 = {1: 'a', 2:'b'}
const obj2 = {3: 'a', 4:'b'}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const objInArr = [
    {
        id: 123,
        name:'Sufyan'
    },
    {
        id: 456,
        name:'Sufyan'
    },
    {
        id: 789,
        name:'Sufyan'
    }
]
// console.log(objInArr[0].id)

const obj4 = Object.keys(obj1)
// console.log(obj4)

//Destructuring the object

const myNewObject = {
    name: "Sufyansiaal",
    sex: "male",
    age: 24
}

const {name: MaharSufyan, sex} = myNewObject
// console.log(MaharSufyan, sex)

//Functions 

const newFunction = function(username = "sufi"){
    if (!username){
    return `Please enter a user`
    }
return `${username} just logged in`

}
// console.log(newFunction())

function valuesAre(...value){
    return value
}
// console.log(valuesAre(200,300,400,500))

const object1 = {
    usernames: 'Sufyan and Ali',
    id: 1 
}

function objectinFunc(anyObject){
    return `the username is ${object1.usernames} and ids are ${object1.id}`
} 
// console.log(objectinFunc(object1))

const myArray = [12,13,14,15]

function FunwithArray(myArray){
    return `the number is ${myArray[1]} `
}
// console.log(FunwithArray([43,45,56,78]))


  const  user1= {
    name:"Sufyaaaaan",
    designation: "Assistant",

    welcomeMessage: function(){
     console.log(`${this.name}, welcome to your destination`)
    }
    
    }

// user1.welcomeMessage()
// user1.name = "ali"
// user1.welcomeMessage()

const newUser2 = () => {
    return (
        console.log("this is a arrow function")
    )
}
// newUser2()

// IIFE - immediately invoked function expression

( function Chai(name){
    // console.log(` ${name} DB is connected one` )
})('Sufyan');

( () => {
    // console.log('Db 2 is also connected')
}

)()

// Switch statement

const  number = 3

switch (number) {
    case 1:
        console.log('not given')
        break;
    case 2:
        console.log('not given')
        break;
    case 3:
        // console.log('number 3')
        break;
    case 1:
        console.log('not given')
        break;

    default:
        break;
}

// for loop
//Printing ttable

for (let i = 1; i <= 3; i++) {
    const element = [i];
    // console.log(element)
    for (let j = 1; j <= 10; j++) {
        // console.log(`${element} * ${j} = ${element * j}`)
        
    }
    
}
// break and continue

for (let i = 0; i <=10; i++) {
    const element = i
    if (element == 5){
        // console.log('5 dedected')
        continue
    }
    // console.log(element)
}

// for of loop 

const arr = [1,2,3,4,5]

for (const array of arr) {
    // console.log(array)
}

const greetings = "hello world"

for (const greet of greetings) {
    if(greet === " "){
        break;
    }
    // console.log(greet)

}

const map = new Map()

map.set('Pk' , "Pakistan")
map.set('ban' , "bangladesh")

// console.log(map)

for (const [key, value] of map){
    // console.log(key, "-", value)
}

// for in loop

const myobject= {
    name: " Sufyan",
    Sex: "male"
}
for (const key in myobject) {
//  console.log(`${key} is  ${myobject[key]}`)  
}
// Filter map and reduce

const ArrEach = [1,2,3,4,5,6,7]

const newArrEach = ArrEach.forEach((item) => {
    console.log( item)
})
// console.log(newArrEach)

const pushArr = []
const arrtoPush = [1,2,3,4,5,6,7,8]
arrtoPush.forEach((num) => {
    if(num > 4){
        pushArr.push(num)
    }}
)
// console.log(pushArr)

const arrytoPushe = [1,2,3,4,5,6,78,99,44,55,90,86]

const filteredArr = arrytoPushe.filter((num) => {
    return num > 50 
})
// console.log(filteredArr)

// MAp method

const arrarr = [1,2,3,4,5,6,7,8,9,10]

const arrmaparr = arrarr
.map((num)=>num * 10)
.map((num) => num + 1)
.filter((num) => num < 55)
// console.log(arrmaparr)

//reduce method

const arrreduced = [1,23,45,43,12]

const reducerss = arrreduced.reduce((acc,currval) => {
    return acc + currval }, 0)
    console.log(reducerss)

    const shoppingCart = [{
        name: "javascript course",
        price: 1234
    },{
        name: "python course",
        price: 1500
    },{
        name: "react course",
        price: 2604
    },{
        name: "vue course",
        price: 4500
    }]

    const newShopCart = shoppingCart.reduce((acc, currval) => {
        return acc + currval.price
    },0)
    console.log(newShopCart)