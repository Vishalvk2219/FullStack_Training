const profile ={
    firstName:'Vishal',
    lastName:'Kumar',
    Education:'B.Tech in AIML',
    hobbies:{
        playing:['Cricket','Video_Games'],
        reading:['books','novel']
    },
    greet:function(){
        console.log(`Hello ${profile.firstName}`);
    }
    
}

//create object alternative
const profile1= new Object();


console.log(typeof(d));
console.log(typeof(profile))
profile.greet()

class person{
    constructor(firstName,lastName,age,mobileNumber){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.mobileNumber=mobileNumber;
    }

    getDetails(){
        console.log(this.firstName,this.lastName);
    }
}

person1= new person('Vishal','Kumar','22','7894561230');
person1.getDetails()

class child extends person{
    constructor(firstName,lastName,Education) {
        super(firstName,lastName);
        this.Education=Education;
    }

    getEducationWithName(){
        console.log(this.firstName,this.lastName,this.Education)
    }
    
}

child1= new child('Vishal','Kumar','B.tech')

child1.getEducationWithName()