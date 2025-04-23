export default function updateStudentGradeByCity(arr, city, newGrade) {
  return arr
    .filter((item) => item.location === city)
    .map((item) =>{
        const findGrade = newGrade.find((i) => i.studentId ===item.id)
        return {
            ...item,
            grade: findGrade ? findGrade.grade : 'N/A'
        }
    })
}