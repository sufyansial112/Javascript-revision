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
console.log(MaharSufyan, sex)