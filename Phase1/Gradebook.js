function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

//FIXME: Better option than Ifs

function getGrade(score) {
  const gradeScale = [
    { threshold: 100, grade: 'A++' },
    { threshold: 90, grade: 'A' },
    { threshold: 80, grade: 'B' },
    { threshold: 70, grade: 'C' },
    { threshold: 60, grade: 'D' },
  ];

  for (const { threshold, grade } of gradeScale) {
    if (score >= threshold) {
      return grade;
    }
  }

  return 'F';
}

// function getGrade(score) {
//   if (score === 100) {
//     return 'A++';
//   }
//   if (score >= 90) {
//     return 'A';
//   }
//   if (score >= 80) {
//     return 'B';
//   }
//   if (score >= 70) {
//     return 'C';
//   }
//   if (score >= 60) {
//     return 'D';
//   }
//   return 'F';
// }

function hasPassingGrade(score) {
  return getGrade(score) !== 'F';
}

function studentMsg(totalScores, studentScore) {
  let result = 'passed';
  if (!hasPassingGrade(studentScore)) {
    result = 'failed';
  }

  return (
    'Class average: ' +
    getAverage(totalScores) +
    '. Your grade: ' +
    getGrade(studentScore) +
    '. You ' +
    result +
    ' the course.'
  );
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 77));
