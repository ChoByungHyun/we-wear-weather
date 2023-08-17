import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

export const LatLonAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['weather'],
    queryFn: () => {
      const response = axios.get(
        'https://api.openweathermap.org/data/2.5/weather?lat=10.99&lon=44.34&appid=c7f82955ebcd743198b54b7aa82fbdf4',
      );
      return response;
    },
  });
};
