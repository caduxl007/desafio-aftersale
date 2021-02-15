import React, { useCallback, useEffect, useState } from 'react';

import { Container } from './styles';

interface IWindowProps {
  scheduleAll: boolean;
}

const Window: React.FC<IWindowProps> = ({ scheduleAll }) => {
  const [schedule, setSchedule] = useState(false);

  useEffect(() => {
    setSchedule(scheduleAll);
  }, [scheduleAll]);

  const handleSetSchedule = useCallback(() => {
    setSchedule(!schedule);
  }, [schedule]);

  return <Container schedule={schedule} onClick={handleSetSchedule} />;
};

export default Window;
