let students=[
    {name:"Preetham",marks:35},
    {name:"Prajwal",marks:96},
    {name:"Deeksha",marks:67},
    {name:"Jayashankar",marks:100}
]
let names=students.map((s)=>s.name);
console.log(names)
let totalMarks=students.filter((s)=>s.marks>=40)
console.log(totalMarks)