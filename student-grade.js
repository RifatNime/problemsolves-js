function grade(num){
    if(num >= 0 && num <= 100){

        console.log("Your marks: ",num);

        if(num >= 80 && num <= 100){
            return "A+";   
        }
        else if(num >= 70 && num < 80){
            return "A";
        }
        else if(num >= 60 && num < 70){
            return "A-";
        }
        else if(num >= 50 && num < 60){
          return "B";
        }
        else if(num >= 40 && num < 50){
          return "C";
        }
        else if(num >= 33 && num < 40){
          return "D";
        }
        else{
            return "Fail";
        }
    }
    else{
        console.log("your result not found");
        return;
    }
}
const mygradenum = grade(70);
console.log('You have got grade', mygradenum , "in 100");

/////////////-------------------------------///////////////////////////
var students = [['Roy', 80], ['Joy', 77], ['Jamil', 88], ['Ishitha', 95], ['Kamal', 68]];
var avgMarks = 0;

for (var i=0; i < students.length; i++) {
        avgMarks += students[i][1];
        var avg = (avgMarks/students.length);
}
console.log("Average grade: " + (avgMarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}