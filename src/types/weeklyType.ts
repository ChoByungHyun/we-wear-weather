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
