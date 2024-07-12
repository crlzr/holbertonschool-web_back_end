// return the sum of all the student ids

export default function getStudentIdsSum(array) {
  let sum = 0;

  sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    0,
  );

  return sum;
}
