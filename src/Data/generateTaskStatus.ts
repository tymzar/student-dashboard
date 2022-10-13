import { Alignments } from '@carbon/charts/interfaces';

const TASK_STATUS = ['To Do', 'In Progress', 'Done'];

export function generateTaskStatus() {
  const data = [
    ...TASK_STATUS.map((status) => ({
      group: status,
      value: Math.floor(Math.random() * 14) + 1,
    })),
  ];

  const options = {
    toolbar: { enabled: false },
    resizable: true,
    donut: {
      center: {
        label: 'All tasks',
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
