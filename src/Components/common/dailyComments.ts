export const commentBasedWeather = {
  thunderstorm: ['천둥번개를 동반한 비', '가 내리고'],
  drizzle: ['이슬비', '가 내리고'],
  rain: ['비', '가 내리고'],
  lightRain: ['약간의 비', '가 내리고'],
  heavyRain: ['많은 비', '가 내리고'],
  shower: ['소나기', '가 내리고'],
  heavyShower: ['많은 양의 소나기', '가 내리고'],
  snowRain: ['눈 또는 비', '가 내리고'],
  snow: ['눈', '이 내리고'],
  lightSnow: ['약간의 눈', '이 내리고'],
  heavySnow: ['많은 눈', '이 내리고'],
  sleet: ['진눈깨비', '가 내리고'],
  clear: ['맑은', ''],
  cloud: ['흐린', ''],
  lightCloud: ['적은 양의 구름', '이 있는'],
  heavyCloud: ['많은 양의 구름', '이 있는'],
  mist: ['안개', '가 낀'],
} as Record<string, Array<string>>;

export const commentBasedTemp = {
  superhot: '한여름 날씨예요',
  hot: '더운 날씨예요',
  warm: '따뜻한 날씨예요',
  cool: '서늘한 날씨예요',
  chilly: '쌀쌀한 날씨예요',
  cold: '추운 날씨예요',
  superCold: '매우 추운 날씨예요',
  freeze: '한겨울 날씨예요',
} as Record<string, string>;

export const commentAboutClothes = {
  superhot: '시원한 반바지에 민소매 옷을 추천해요',
  hot: '반소매나 얇은 셔츠면 좋겠어요',
  warm: '가디건 혹은 적당한 두께의 긴팔 티를 추천해요',
  cool: '맨투맨이나 후드티를 입을 때가 됐어요',
  chilly: '셔츠나 재킷을 꼭 걸쳐야겠는걸요',
  cold: '옷을 여러 겹 껴입으세요',
  superCold: '코트나 야상 같은 외투를 입으셔야 해요',
  freeze: '패딩과 목도리로 꽁꽁!',
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
      '시원하게 입어야 해요. 민소매와 반바지도 좋고, 린넨 소재의 옷도 도움이 될 거에요. 어디 놀러가신다면 쉬폰 원피스로 휴양지 기분을 내는건 어떤가요? 선크림 바르는 것 잊지 마세요!',
  },
  hot: {
    description:
      '적당히 시원하게 반팔 티셔츠나 반바지를 입으면 좋겠어요. 얇은 셔츠나 얇은 면바지도 괜찮을 날씨에요. 취향에 따라 예쁘게 코디해 보세요.',
  },
  warm: {
    description: '가벼운 긴팔 셔츠나 얇은 가디건이 좋겠어요. 하의는 바람이 잘 통하는 린넨 바지를 입어도 좋을거 같아요',
  },
  cool: {
    description:
      '안에 가벼운 긴팔 티나 얇은 셔츠를 입고 겉에 자켓을 걸치는게 좋겠어요! 가을분위기 물씬 나게 트렌치 코드를 걸쳐도 좋을거같아요!',
  },
  chilly: {
    description:
      '감기에 걸릴 수 있으니 안에는 얇는 니트를 입으시고 겉옷으로 자켓을 입는게 좋겠어요. 하의는 긴바지를 입는 것이 어때요?',
  },
  cold: {
    description:
      '도톰한 외투를 입는게 좋겠어요! 도톰한 후리스 같은 외투는 어떨까요? 추운 날씨에 가장 중요한 목을 보호하기위해 목 끝까지 잠그고 나가볼까요?',
  },
  superCold: {
    description:
      '두꺼운 패딩이나 코트를 꼭 입는게 좋겠어요. 발이 시리면 패딩을 입어도 몸이 시릴 수 있으니 부츠나 털신발을 신어보는건 어떨까요?',
  },
  freeze: {
    description:
      '와 매우매우 추워요. 오늘은 안나가는게 좋겠어요. 하지만 일정이 있다면 겹겹이 입고 나가야겠어요. 안에 히트텍을 입고 이너로는 스웨트셔츠, 외투는 두툼한 패딩을 입어볼까요? 이런 날씨에는 털모자와 장갑, 목도리, 부츠도 잊지말아요! 건강이 최우선!',
  },
};
export const commentAboutTempGap = {
  summer: '일교차가 있어 추울 수 있으니 가벼운 겉옷을 챙겨주세요.',
  winter: '일교차가 있어 더울 수 있으니 얇게 겹쳐입어주세요.',
} as Record<string, string>;
