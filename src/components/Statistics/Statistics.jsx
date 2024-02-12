import React from 'react';

import { StatisticItem } from './StatisticItem';

export const Statistics = ({ title, stats }) => {
  if (!title) return null;

  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};
