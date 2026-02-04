/**
===========Problem 2: Student Marks Analyzer=============

Function name: analyzeMarks(marksObj)

Statement:
 Return total marks, average marks, highest scoring subject, and lowest scoring subject.

 Test case 1
        Input: { math: 78, english: 65, physics: 88, bangla: 55 }

Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }


============================
            hints
============================
    1. Total ===> use for in loop or manual method
    2. use "Object.keys(obj_Name).length" for find object length
    3. To find highest mark set a variable value -Infinity.
    4. To find lowest mark set a variable value Infinity.

 */

function analyzeMarks(marksObj) {
  let subjectBasedMarks = { math: 78, english: 65, physics: 88, bangla: 55 };

  // first method for addition
  let total = 0;
  for (let key in subjectBasedMarks) {
    let marks = subjectBasedMarks[key];
    total += marks;
  }

  // Second method for addition
  let totalMarks =
    subjectBasedMarks.math +
    subjectBasedMarks.english +
    subjectBasedMarks.physics +
    subjectBasedMarks.bangla;

  let avgMarks = totalMarks / Object.keys(subjectBasedMarks).length.toFixed(2);

  let highestMark = -Infinity;
  let lowestMark = Infinity;

  let highestSubject = null;
  let lowestSubject = null;

  for (const key in subjectBasedMarks) {
    let mark = subjectBasedMarks[key];

    if (mark > highestMark) {
      highestMark = mark;
      highestSubject = key;
    }

    if (mark < lowestMark) {
      lowestMark = mark;
      lowestSubject = key;
    }
  }

  return {
    total: totalMarks,
    average: avgMarks,
    highestSubject,
    lowestSubject,
  };
}

let result = analyzeMarks();
console.log(result);
