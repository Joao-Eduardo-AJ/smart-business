interface IMetrics {
  number: string;
  legend: string;
}

export const Metrics = ({ number, legend }: IMetrics) => (
  <div className="w-max flex flex-col gap-2">
    <p className="text-lg1 lg:text-lg2">{number}</p>
    <p className="text-md">{legend}</p>
  </div>
);
