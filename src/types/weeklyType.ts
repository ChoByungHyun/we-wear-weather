export type CloudsType = {
  all: number;
};

export type WeatherType = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type MainType = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};

export type WindType = {
  speed: number;
  deg: number;
  gust: number;
};

export type SysType = {
  pod: string;
};

export type ItemType = {
  dt: string;
  dt_txt: string;
  clouds: CloudsType;
  main: MainType;
  pop: number;
  sys: SysType;
  visibility: number;
  weather: WeatherType[];
  wind: WindType;
};

// forecast 전체 타입
export type coordType = {
  lat: number;
  lon: number;
};

export type cityType = {
  coord: coordType;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
};

export type ForecastAllType = {
  city: cityType;
  cnt: number;
  cod: string;
  list: ItemType[];
  message: number;
};
