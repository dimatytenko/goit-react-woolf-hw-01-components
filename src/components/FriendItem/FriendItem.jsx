import React from 'react';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-item">
      <span className={`friend-status ${isOnline ? 'active' : ''}`}></span>
      <img
        className="friend-avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="friend-name">{name}</p>
    </li>
  );
};
