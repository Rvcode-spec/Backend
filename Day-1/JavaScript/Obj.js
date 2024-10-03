let Obj={
    name:"Ravi",
    salary: 10000,
    age:23,
    fun:parent=()=>{
        child=()=>
        {
            console.log(this);
        }
        child()

    }
}
console.log(Obj.fun())