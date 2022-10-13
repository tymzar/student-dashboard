import { ScaleTypes } from '@carbon/charts/interfaces';

export const UPV_COURSES = ['SIN', 'ADE', 'TAL', 'TSR', 'ISW', 'IRST'];

export function getGradeOverAttendance(isTimeScale: boolean) {
  const options = {
    toolbar: { enabled: false },
    axes: {
      left: {
        title: 'Attendance (%)',
        mapsTo: isTimeScale ? 'timeValue' : 'value',
      },
      bottom: {
        scaleType: isTimeScale ? ScaleTypes.TIME : ScaleTypes.LABELS,
        mapsTo: isTimeScale ? 'timeKey' : 'key',
      },
      right: {
        title: 'Grade',
        mapsTo: isTimeScale ? 'timeHours' : 'hours',
        correspondingDatasets: ['Attendance'],
      },
    },
    comboChartTypes: [
      {
        type: 'area',
        options: {},
        correspondingDatasets: ['Grade'],
      },
      {
        type: 'line',
        options: {
          points: {
            enabled: true,
          },
        },
        correspondingDatasets: ['Attendance'],
      },
    ],
    timeScale: {
      addSpaceOnEdges: 1,
    },
    curve: 'curveMonotoneX',
    height: '360px',
  };

  const data = isTimeScale
    ? [
        //make array from months 02 - 07
        ...Array.from({ length: 6 }, (_, i) => i + 1).map((month) => ({
          group: 'Grade',
          // if true is true, then the key is a date of months of UPV_COURSES.length months in format 'YYYY-MM-DD' + T00:00:00.000Z
          timeKey: `${new Date().getFullYear()}-${
            month < 9 ? `0${month}` : `0${month}`
          }-01T00:00:00.000Z`,

          //generate random grade from 1-10
          timeValue: Math.floor(Math.random() * 100) + 1,
        })),
        ...Array.from({ length: 6 }, (_, i) => i + 1).map((month) => ({
          group: 'Attendance',
          timeKey: `${new Date().getFullYear()}-${
            month < 9 ? `0${month}` : `0${month}`
          }-01T00:00:00.000Z`,
          timeHours: Math.floor(Math.random() * 10) + 1,
        })),
      ]
    : [
        ...UPV_COURSES.map((course, index) => ({
          group: 'Grade',
          // if true is true, then the key is a date of months of UPV_COURSES.length months in format 'YYYY-MM-DD' + T00:00:00.000Z
          key: course,
          //generate random grade from 1-10
          value: Math.floor(Math.random() * 100) + 1,
        })),
        ...UPV_COURSES.map((course, index) => ({
          group: 'Attendance',
          key: course,
          hours: Math.floor(Math.random() * 10) + 1,
        })),
      ];

  return { options: options, data: data };
}
