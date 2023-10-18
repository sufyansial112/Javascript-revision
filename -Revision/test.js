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
    console.log(` ${name} DB is connected one` )
})('Sufyan');

( () => {
    console.log('Db 2 is also connected')
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
        console.log('number 3')
        break;
    case 1:
        console.log('not given')
        break;

    default:
        break;
}