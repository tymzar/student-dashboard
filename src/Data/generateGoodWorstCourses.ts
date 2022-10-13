import { UPV_COURSES } from './generateGradeAttendance';
import { generateRandomNumbers } from './generateLeariningTime';

const randomCourses = generateRandomNumbers(6);
const bestOnes = randomCourses.slice(0, 3);
const worstOnes = randomCourses.slice(3, 6);

export function getGoodCoursesGrades() {
  const data = {
    labels: bestOnes.map((course) => UPV_COURSES[course]),
    datasets: [
      {
        data: bestOnes.map((course) => Math.floor(Math.random() * 7) + 4),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return data;
}

export function getWorstCoursesGrades() {
  const data = {
    labels: worstOnes.map((course) => UPV_COURSES[course]),
    datasets: [
      {
        data: worstOnes.map((course) => Math.floor(Math.random() * 5) + 1),
        backgroundColor: [
          'rgba(255, 199, 2, 0.2)',
          'rgba(154, 122, 235, 0.2)',
          'rgba(205, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 25, 1)',
          'rgba(125, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return data;
}
