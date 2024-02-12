import { getRandomColor } from '../../helpers/getRandomColor';

export const StatisticItem = ({ id, label, percentage }) => {
  const liStyle = {
    backgroundColor: getRandomColor(),
  };

  return (
    <li className="item" style={liStyle} key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};
