// let emp={
//     emp_id:101,
//     empname:'reddy',
//     empdes:'software engineer'
// }
// console.log(emp.emp_id);
// function Student(name,age){
//     this.name=name;
//     this.age=age;
// }
// var std1=new Student('reddy',21);
// var std2=new Student('bhavana',19);
// var std3=new Student('akash',21);
// console.log(Student)
 function getscores(){
    return[10,20,30,40]
 }
let [x,y,...args]=getscores()
console.log(x)

let students={
    fname:"reddy",
    lname:"podamala"
}
let{fname:firstname,lname:lastname}=students;
console.log(firstname)


const sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    
    {item: 'Nintendo Switch', stock: 4, original: 299.99 },
    
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
    
];
let salesprice=sales.map((value)=>{
    if(value.discount){
        value.sale=value.original-(value.original*value.discount)
        value.total=value.sale*value.stock
    }
    else{
        value.sale=value.original
        value.total=value.sale*value.stock
    }
    return value
})
//console.log(salesprice)
const employee=[
    {empname:'konda',empage:50,sal:5000},
    {empname:'mohan',empage:60,sal:5070},
    {empname:'akash',empage:59,sal:5800},
    {empname:'sai',empage:70,sal:6000}
]
console.log(employee)
let pfs=employee.map((value)=>{
    if(value.empage>=60)
    {
        value.pf=value.sal*0.12
    }
    else{
        value.pf='applicable only above age is 60'
    }
return value
})
console.log(pfs)
var js = (function(x) {return x*x;}(10));
