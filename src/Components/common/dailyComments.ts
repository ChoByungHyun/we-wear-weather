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
    tops: string;
    bottoms: string;
    footwear: string;
    accessories: string;
  };
} = {
  summer: {
    description: '너무 더운 날씨예요. 얇은 재질의 옷과 짧은 옷이 좋겠어요',
    tops: '얇은 반팔 티셔츠나 나시 티',
    bottoms: '짧은 반바지 또는 민소매 원피스',
    footwear: '쾌적하고 통기성이 좋은 샌들 또는 슬리퍼',
    accessories: '모자와 선글라스',
  },
  hot: {
    description: '더운 날씨예요. 반팔 티셔츠와 반바지가 좋겠어요.',
    tops: '반팔 티셔츠 또는 얇은 셔츠',
    bottoms: '반바지 또는 가벼운 면바지',
    footwear: '슬리퍼 또는 캔버스 슈즈',
    accessories: '모자와 선글라스',
  },
  warm: {
    description: '따뜻한 날씨에요. 가벼운 긴팔 셔츠나 얇은 가디건이 좋겠어요.',
    tops: '가벼운 긴팔 셔츠 또는 얇은 가디건',
    bottoms: '면바지 또는 슬랙스',
    footwear: '캔버스 슈즈 또는 로퍼',
    accessories: '시계와 손목에 팔찌',
  },
  cool: {
    description: '날씨가 시원해요. 가을 재킷이나 스웨터가 딱이겠죠.',
    tops: '가을 재킷 또는 스웨터',
    bottoms: '슬랙스 또는 청바지',
    footwear: '구두나 스니커즈',
    accessories: '스카프와 손목에 팔찌',
  },
  chilly: {
    description: '으슬으슬한 날씨에요. 가벼운 자켓이나 스카프를 착용하면 좋겠어요.',
    tops: '가벼운 자켓',
    bottoms: '청바지 또는 면바지',
    footwear: '부츠 또는 닫힌 슈즈',
    accessories: '헤드밴드나 목도리',
  },
  cold: {
    description: '좀 추워요. 두꺼운 외투와 목도리, 장갑을 준비하세요.',
    tops: '두꺼운 외투',
    bottoms: '슬랙스나 두꺼운 청바지',
    footwear: '따뜻한 부츠',
    accessories: '털 모자와 목도리, 장갑',
  },
  superCold: {
    description: '꽤 추워요. 두꺼운 패딩이나 코트, 털 모자와 부츠를 꼭 착용하세요.',
    tops: '두꺼운 패딩 또는 코트',
    bottoms: '기모나 두꺼운 슬랙스',
    footwear: '따뜻한 부츠',
    accessories: '털 모자와 목도리, 장갑',
  },
  winterCold: {
    description: '매우 추워요. 두꺼운 패딩이나 코트, 털 모자와 부츠를 꼭 착용하세요.',
    tops: '두꺼운 패딩 또는 코트',
    bottoms: '기모나 발열 속옷, 두꺼운 슬랙스 또는 기모 바지',
    footwear: '따뜻한 부츠',
    accessories: '털 모자와 목도리, 장갑',
  },
};
