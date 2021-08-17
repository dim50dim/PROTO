//////////////////////////////////////////////////////////////////
class Student  {
    constructor (a,b,c,d,e) {
        this.firstName = a;
        this.secondName = b;
        this.dayOfBirth = c;
        this.arr = d;
        this.arr2 = e;
    }
    present(){
        ( this.arr.length <= 10) ? this.arr.push(true) : false;
            
    }
    absent(){
        ( this.arr.length <= 10) ? this.arr.push(false) : false;

    }
    mark(num){
      //  if( this.num > 0  || this.num <=10) { 
             this.arr2.push(num);
    //    }
      
    }
    summary(){
        if(this.mark / this.mark.length > 9 && this.present / this.absent > 0.9)return 'Ути какой молодчинка!';
        if(this.mark / this.mark.length < 9 || this.present / this.absent < 0.9)return 'Норм, но можно лучше';
        if(this.mark / this.mark.length < 9 && this.present / this.absent < 0.9)return 'Man you are doing shit';
        
    }
}


////////////////////////////////////////////////////////////////////
let student = new Student('Alex','Ivanov','11.22.1233',[],[]);
console.log(student);


student.present();
student.present();
student.present();
student.present();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.mark(8);
student.mark(8);
student.mark(8);
student.summary();

let student2 = new Student('Mike','Smith','29.22.1233',[],[]);
console.log(student2);

student2.present();
student2.present();
student2.absent();

student2.absent();
student2.mark(7);
student2.mark(7);
student2.mark(6);
student.summary();
let student3 = new Student('John','Black','22.44.2354',[],[]);
console.log(student3);

student3.present();
student3.present();
student3.absent();

student3.absent();
student3.mark(5);
student3.mark(6);
student3.mark(9);
student.summary();
