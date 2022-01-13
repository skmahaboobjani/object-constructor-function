

// nested objects
// function fn()
// {
//     var obj={
//         name:{
//             first:"mabu",
//             last:"jani",
//             last:"shaik",
//         },
//         color:"red",
//         height:7,
//         voice:"clean",
//         course:["react","js","html","css"]
//     }
//     console.log(obj.name.last)
//     console.log(obj.course[2])
//     console.log(obj.voice)


//     }
    

// fn()

// constructor function

// function fn()
// {
//      this.name="mabu"
//       this.hello="jani"
//      this.age=20
     
    
// }
// var person= new fn()
// console.log(person)


// constructor function using parameters

// function fn(name,age,color)
// {
//     this.name=name
//     this.age=age
//     this.color=color

// }
// var person= new fn("mabu",20,"red")
// console.log(person)



function fn(name,age,color)
{
    this.name=name
    this.age=age
    this.color=color
}
var person=new fn("mabu",20,"red")
console.log(person)