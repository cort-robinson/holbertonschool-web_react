import React from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button aria-label="Close"
        style={{
          position: 'absolute',
          right: '0',
          top: '0',
          padding: '1em',
          border: 'none',
          background: 'transparent',
        }}
        onClick={
          () => console.log('Close button has been clicked')
        }>
        <img src={icon} alt="" style={{width: '1.5em'}} />
      </button>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}
