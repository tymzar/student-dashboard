import { Doughnut as DoughnutJS } from 'react-chartjs-2';

type DoughnutProps = {
  data: any;
  options?: any;
};

export default function Doughnut({ data, options }: DoughnutProps) {
  const plugins = [
    {
      id: 'dasdasda',
      beforeDraw: function (chart: any) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize + 'em sans-serif';
        ctx.textBaseline = 'top';
        var text = 'Foo-bar',
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return <DoughnutJS data={data} options={options} plugins={plugins} />;
}
