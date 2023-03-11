import moment from 'moment';
import { useEffect, useState } from 'react';

export default function Clock({ clock, clockList, setClockList }) {
  const [time, setTime] = useState({});
  const updateClock = () => {
    const now = moment().utcOffset(Number(clock.timezone));
    let second = now.seconds() * 6,
      minute = now.minutes() * 6 + second / 60,
      hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;

    setTime({
      second,
      minute,
      hour
    })
  };
  const removeClock = (clockId) => setClockList(clockList.filter(item => item.id !== clockId));

  useEffect(() => {
    let interval = setInterval(updateClock, 1000);

    return () => {
      clearInterval(interval)
    };
  }, [clock]);

  return (
    <li className='clock-item'>
      <div className='name'>{clock.name}</div>
      <div className='remove' onClick={() => removeClock(clock.id)}>x</div>
      <div className="circle">
        <div className="face">
          <div className="hour" style={{ transform: `rotate(${time.hour}deg)` }}></div>
          <div className="minute" style={{ transform: `rotate(${time.minute}deg)` }}></div>
          <div className="second" style={{ transform: `rotate(${time.second}deg)` }}></div>
        </div>
      </div>
    </li>
  );
}