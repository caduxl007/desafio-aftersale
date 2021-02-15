import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { isAfter, isBefore, format } from 'date-fns';

import api from '../../services/api';

import Window from '../../components/Window';

import { Container, Sun, Moon } from './styles';

interface ICoordsProps {
  lat: number;
  long: number;
}

interface IScheduleProps {
  results: {
    sunrise: string;
    sunset: string;
  };
}

const Home: React.FC = () => {
  const [scheduleAll, setScheduleAll] = useState(false);
  const [coords, setCoords] = useState<ICoordsProps>({} as ICoordsProps);
  const [scheduleApi, setScheduleApi] = useState<IScheduleProps>(
    {} as IScheduleProps,
  );

  const handleSetScheduleAll = useCallback(() => {
    setScheduleAll(!scheduleAll);
  }, [scheduleAll]);

  const localUser = useCallback(async () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {
          coords: { latitude, longitude },
        } = position;
        setCoords({ lat: latitude, long: longitude });
      }, console.error);
    } else {
      alert('Não foi possível pegar localização.');
    }
  }, []);

  useEffect(() => {
    async function loadLocalUser(): Promise<void> {
      await localUser();
    }
    loadLocalUser();
  }, [localUser]);

  useEffect(() => {
    const { lat, long } = coords;

    api.get(`json?lat=${lat}&lng=${long}`).then((response) => {
      setScheduleApi(response.data);
    });
  }, [coords]);

  const dayOrNight = useMemo(() => {
    if (scheduleApi.results) {
      const sunrise =
        Number.parseFloat(
          scheduleApi.results.sunrise.replace(/[a-z]|\s+/gi, ''),
        ) - 3;

      const sunset =
        9 +
        Number.parseFloat(
          scheduleApi.results.sunset.replace(/[a-z]|\s+/gi, ''),
        );

      const hour = Number.parseFloat(
        format(new Date().getUTCHours(), 'HH:mm:ss'),
      );

      if (isAfter(hour, sunrise) && isBefore(hour, sunset)) {
        setScheduleAll(true);
        return 'day';
      }

      setScheduleAll(false);
      return 'night';
    }

    return 'day';
  }, [scheduleApi]);

  return (
    <Container theme={dayOrNight}>
      {dayOrNight === 'day' ? <Sun /> : <Moon />}
      <main>
        <h2>HOTEL DEVLÂNDIA</h2>
        <Window scheduleAll={scheduleAll} />
        <Window scheduleAll={scheduleAll} />
        <Window scheduleAll={scheduleAll} />
        <Window scheduleAll={scheduleAll} />
        <Window scheduleAll={scheduleAll} />
        <Window scheduleAll={scheduleAll} />
        <Window scheduleAll={scheduleAll} />
        <Window scheduleAll={scheduleAll} />
        <Window scheduleAll={scheduleAll} />
        <Window scheduleAll={scheduleAll} />
        <Window scheduleAll={scheduleAll} />
        <Window scheduleAll={scheduleAll} />
      </main>

      <button onClick={handleSetScheduleAll} type="button">
        .
      </button>
    </Container>
  );
};

export default Home;
