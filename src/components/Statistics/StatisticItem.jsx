export const StatisticItem = ({ id, label, percentage }) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

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
