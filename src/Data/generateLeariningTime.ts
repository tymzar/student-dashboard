import { Alignments } from '@carbon/charts/interfaces';
import { UPV_COURSES } from './generateGradeAttendance';

export function generateRandomNumbers(amount: number) {
  let arr = [];
  while (arr.length < amount) {
    let r = Math.floor(Math.random() * 6);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

export function generateLearningTime() {
  // generate three unique numbers from range 0-5

  const data = [
    ...generateRandomNumbers(3).map((month) => ({
      group: UPV_COURSES[month],
      value: Math.floor(Math.random() * 30) + 1,
    })),
    {
      group: 'Others...',
      value: Math.floor(Math.random() * 15) + 1,
    },
  ];

  const options = {
    toolbar: { enabled: false },
    resizable: true,
    donut: {
      center: {
        label: 'Hours',
      },
      alignment: Alignments.CENTER,
    },
    width: '100%',
  };

  return {
    options: options,
    data: data,
  };
}
