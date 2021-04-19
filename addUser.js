function addUser(users, name, scores, skills, age) {

    users.forEach((user) => {
        if(user.name !== name){
            users.push({name: name, scores: scores, skills: scores, age: age})
        } else{
            console.log((`user already exists`))
        }
    })
    console.log(users)

}
const users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
    ];


    console.log(addUser(users, "Suraj", 90, ['HTM', 'CSS', 'JS'], 24))