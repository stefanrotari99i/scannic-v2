export const MetricCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) => {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-primary/5 text-primary rounded-full w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col items-start mt-1 gap-1">
        <span className="uppercase text-xs font-bold text-gray-500">
          {label}
        </span>
        <h2 className="text-4xl font-bold uppercase">{value}</h2>
      </div>
    </div>
  );
};
