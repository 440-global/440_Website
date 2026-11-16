import { formatNumber } from "@/lib/utils";
import { cn } from "@/lib/utils";

const Progress = ({ title, totalQty, currentQty, showMetrics, className , progClass }) => {
  const percentage = Math.ceil((currentQty / totalQty) * 100);
  const getColor = (percentage) => {
    let color
    if (percentage < 50) {
      color = 'bg-yellow-500'
    } else if (percentage > 50 && percentage < 75) {
      color = 'bg-green-500'
    } else {
      color = 'bg-orange-500'
    }
    return color
  }

  return (
    <div className={cn("my-4", className)}>
      <div className="flex justify-between mb-1">
        <p className="text-(--muted)">{title}</p>
        {
          showMetrics && 
          <p className="font-bold text-(--text)">
            {percentage}% ({formatNumber(totalQty)} units)
          </p>
        }
      </div>

      <div className={cn("w-full h-2 rounded-full bg-gray-200", progClass)}>
        <div
          className={`h-full rounded-full ${getColor(percentage)} transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;
