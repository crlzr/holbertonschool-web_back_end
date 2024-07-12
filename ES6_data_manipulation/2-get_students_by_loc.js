// function accepts a list of students (array) and a city as parameters
export default function getStudentsByLocation(array, city) {
  return array.filter(({ location }) => location === city);
}
