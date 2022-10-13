import { Alignments, Statuses, GaugeTypes } from '@carbon/charts/interfaces';

export function getAttendance() {
  const data = [
    {
      group: 'value',
      value: Math.floor(Math.random() * 100) + 1,
    },
    {
      group: 'delta',
      value: Math.floor(Math.random() * 25) + 1,
    },
  ];
  const options = {
    toolbar: { enabled: false },
    resizable: true,
    width: '100%',
    gauge: {
      showPercentageSymbol: true,
      alignment: Alignments.CENTER,

      status: Statuses.WARNING,
      type: GaugeTypes.FULL,
    },
  };

  return {
    options: options,
    data: data,
  };
}
