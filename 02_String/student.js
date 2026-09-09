const student = {
    name : "Shubham",
    age : 24,
    eng : 80,
    math : 90,
    phy : 70,
    get Avg(){
        console.log(this);
        let avg = (this.eng + this.math + this.phy)/3;
        console.log (`${this.name} got avg marks = ${avg}`);
    }
};
student.avg;