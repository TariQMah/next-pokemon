import React from "react";
import ReactApexChart from "react-apexcharts";

interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface ChartProps {
  data: PokemonStat[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const series = React.useMemo(() => {
    return [
      {
        name: "Base Stat",
        data: data.map((item) => item.base_stat),
      },
      {
        name: "Effort",
        data: data.map((item) => item.effort),
      },
    ];
  }, [data]);

  const options = React.useMemo(() => {
    return {
      chart: {
        type: "radar",
        height: 430,
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      title: {
        text: "Stats",
      },
      stroke: {
        width: 2,
      },
      fill: {
        opacity: 0.1,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: data.map((item) => item.stat.name),
      },
    };
  }, [data]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options as any}
          series={series}
          type="radar"
          height={430}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Chart;
