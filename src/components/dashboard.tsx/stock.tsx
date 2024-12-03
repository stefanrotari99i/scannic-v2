import PropTypes from "prop-types";
import classNames from "classnames";

interface Stock {
  percentage: number;
  color: string;
}

export const StockBar = ({ stockData }: { stockData: Stock[] }) => {
  return (
    <div className="flex items-center gap-2 w-full mt-3">
      {stockData.map((stock, index: number) => (
        <div
          key={index}
          className={classNames("h-2 rounded-lg", stock.color)}
          style={{ width: `${stock.percentage}%` }}
        />
      ))}
    </div>
  );
};

StockBar.propTypes = {
  stockData: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

interface StockDetail {
  label: string;
  value: number;
  color: string;
}
// Components/StockDetails.js
export const StockDetails = ({ stocks }: { stocks: StockDetail[] }) => {
  return (
    <div className="flex items-center gap-6 mt-4">
      {stocks.map((stock, index) => (
        <div key={index} className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: stock.color }}
          />
          <p className="text-sm font-semibold text-gray-400">
            {stock.label}:{" "}
            <span className="text-gray-900 ml-2">{stock.value}</span>
          </p>
        </div>
      ))}
    </div>
  );
};
