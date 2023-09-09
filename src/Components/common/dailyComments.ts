export const commentBasedWeather = {
  thunderstorm: '천둥번개를 동반한 비가 내리고',
  drizzle: '이슬비가 내리고',
  lightRain: '약간의 비가 내리고',
  rain: '비가 내리고',
  heavyRain: '많은 비가 내리고',
  shower: '소나기가 내리고',
  snowRain: '눈 또는 비가 내리고',
  lightSnow: '약간의 눈이 내리고',
  snow: '눈이 내리고',
  heavySnow: '많은 눈이 내립니다',
  sleet: '진눈깨비가 내리고',
  clear: '맑고',
  lightCloud: '적은 양의 구름이 있는',
  heavyCloud: '많은 양의 구름이 있는',
  cloud: '흐리고',
  mist: '안개가 가득한',
} as Record<string, string>;

export const commentBasedTemp = {
  summer: '한여름 날씨예요',
  hot: '더운 날씨예요',
  warm: '따뜻한 날씨예요',
  cool: '서늘한 날씨예요',
  chilly: '쌀쌀한 날씨예요',
  cold: '추운 날씨예요',
  superCold: '매우 추운 날씨예요',
  winterCold: '한겨울 날씨예요',
} as Record<string, string>;

export const commentAboutClothes = {
  summer: '시원한 반바지에 민소매 옷을 추천해요',
  hot: '반소매나 얇은 셔츠면 좋겠어요',
  warm: '가디건 혹은 적당한 두께의 긴팔 티를 추천해요',
  cool: '맨투맨이나 후드티를 입을 때가 됐어요',
  chilly: '셔츠나 재킷을 꼭 걸쳐야겠는걸요',
  cold: '옷을 여러 겹 껴입으세요',
  superCold: '코트나 야상 같은 외투를 입으셔야 해요',
  winterCold: '패딩과 목도리로 꽁꽁!',
} as Record<string, string>;

export const commentAboutCaution = {
  hot: '더위를 피할 손풍기가 있나요?',
  rain: '우산 챙기는 것 잊지 마세요!',
  chilly: '그리고 얇은 겉옷 하나 챙기는 건 어떨까요?',
  cold: '따뜻하게 입으시고 감기 조심하세요!',
  normal: '즐거운 하루 보내세요!',
} as Record<string, string>;

export const commentAboutClothesDetail: {
  [key: string]: {
    description: string;
  };
} = {
  superhot: {
    description:
      '날씨가 많이 덥네요. 시원한 반팔 티셔츠와 반바지를 입는게 좋겠어요 어디 놀러가신다면 쉬폰 원피스로 휴양지 기분을 내는건 어떤가요?',
  },
  hot: {
    description: '더운 날씨예요. 반팔 티셔츠와 반바지가 좋겠어요.',
  },
  warm: {
    description:
      '따뜻한 날씨에요. 가벼운 긴팔 셔츠나 얇은 가디건이 좋겠어요. 하의는 바람이 잘 통하는 린넨 바지를 입어도 좋을거 같아요',
  },
  cool: {
    description:
      '날씨가 시원해요. 안에 가벼운 긴팔 티나 얇은 셔츠를 입고 겉에 자켓을 걸치는게 좋겠어요! 가을분위기 물씬 나게 트렌치 코드를 걸쳐도 좋을거같아요!',
  },
  chilly: {
    description:
      '약간 쌀쌀한 날씨네요. 감기에 걸릴 수 있으니 안에는 얇는 니트를 입으시고 겉옷으로 자켓을 입는게 좋겠어요. 하의는 긴바지를 입는 것이 어때요 ?',
  },
  cold: {
    description: '좀 추워요. 두꺼운 외투와 목도리, 장갑을 준비하세요.',
  },
  superCold: {
    description: '꽤 추워요. 두꺼운 패딩이나 코트, 털 모자와 부츠를 꼭 착용하세요.',
  },
  freeze: {
    description: '매우 추워요. 두꺼운 패딩이나 코트, 털 모자와 부츠를 꼭 착용하세요.',
  },
};
