import { ScaleTypes } from '@carbon/charts/interfaces';
import { UPV_COURSES } from './generateGradeAttendance';
import { generateRandomNumbers } from './generateLeariningTime';

export function getActivityOverTime() {
  const courses = generateRandomNumbers(2);
  const bestOne = courses[0];
  const worstOne = courses[1];

  const data = [
    ...Array.from({ length: 6 }, (_, i) => i + 1).map((month) => ({
      group: `Best - ${UPV_COURSES[bestOne]}`,
      date: `${new Date().getFullYear()}-${
        month < 9 ? `0${month}` : `0${month}`
      }-01T00:00:00.000Z`,
      learningTime: Math.floor(Math.random() * 40) + 20,
      grade: Math.floor(Math.random() * 6) + 4,
    })),
    ...Array.from({ length: 6 }, (_, i) => i + 1).map((month) => ({
      group: `Worst - ${UPV_COURSES[worstOne]}`,
      date: `${new Date().getFullYear()}-${
        month < 9 ? `0${month}` : `0${month}`
      }-01T00:00:00.000Z`,
      learningTime: Math.floor(Math.random() * 25) + 6,
      grade: Math.floor(Math.random() * 6) + 1,
    })),
  ];
  const options = {
    toolbar: { enabled: false },
    axes: {
      bottom: {
        // title: '2019 Annual Sales Figures',
        scaleType: ScaleTypes.TIME,
        mapsTo: 'date',
      },
      left: {
        title: 'Activity (H)',

        mapsTo: 'learningTime',
      },
    },
    bubble: {
      radiusMapsTo: 'grade',
      radiusLabel: 'Grade',
    },
    height: '400px',
  };

  return {
    options: options,
    data: data,
  };

  //  {
  //     title: 'Bubble (linear)',
  //     axes: {
  //       bottom: {
  //         title: 'No. of employees',
  //         mapsTo: 'sales',
  //         includeZero: false,
  //       },
  //       left: {
  //         title: 'Annual sales',
  //         mapsTo: 'profit',
  //         includeZero: false,
  //       },
  //     },
  //     bubble: {
  //       radiusMapsTo: 'surplus',
  //       radiusLabel: 'Surplus',
  //     },
  //     legend: {
  //       additionalItems: [
  //         {
  //           type: 'radius',
  //           name: 'Surplus',
  //         },
  //       ],
  //     },
  //     height: '400px',
  //   },
}
