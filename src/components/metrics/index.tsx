import { useInView } from "react-intersection-observer";

interface IMetrics {
  number: string;
  legend: string;
}

export const Metrics = ({ number, legend }: IMetrics) => {
  const { ref, inView } = useInView({
    threshold: 1,
    delay: 350,
  });

  return (
    <div ref={ref} className="w-160 h-110 relative overflow-hidden">
      <p
        className={`transition-all duration-500 text-lg1 lg:text-lg2 absolute top-0 ${
          inView ? "left-0 opacity-100" : "-left-60 opacity-0"
        }`}
      >
        {number}
      </p>
      <p
        className={`transition-all duration-500 w-160 text-md absolute bottom-0 ${
          inView ? "left-0 opacity-100" : "left-100 opacity-0"
        }`}
      >
        {legend}
      </p>
    </div>
  );
};
