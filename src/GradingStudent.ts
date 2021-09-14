const gradingStudents = (grades: number[]): number[] => {
  return grades.map((grade) => {
    return grade < 38 || grade % 5 < 3 ? grade : grade + (5 - (grade % 5));
  });
};

var lists = [73, 67, 38, 33];

console.log(gradingStudents(lists));
