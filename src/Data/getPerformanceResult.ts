import { UPV_COURSES } from './generateGradeAttendance';
import { Alignments } from '@carbon/charts/interfaces';

export function getPerformanceResult() {
  const data = [
    ...UPV_COURSES.map((course) => ({
      group: 'Your performance',
      course: course,
      grade: Math.floor(Math.random() * 10) + 1,
    })),
    ...UPV_COURSES.map((course) => ({
      group: 'Class performance',
      course: course,
      grade: Math.floor(Math.random() * 10) + 1,
    })),
  ];
  const options = {
    toolbar: { enabled: false },
    radar: {
      axes: {
        angle: 'course',
        value: 'grade',
      },
      alignment: Alignments.CENTER,
    },
    data: {
      groupMapsTo: 'group',
    },
    height: '400px',
    width: '100%',
  };

  return { data: data, options: options };
}
