# We Wear Weather

오늘, 시간대별, 주간 날씨를 제공하고 현재 시간의 날씨에 맞는 옷차림 이미지를 제공하여 사용자가 현재 날씨가 어떤지, 어떤 옷을 입어야하는지를 시각적으로 제공하는 모바일 서비스

<h2>팀원 소개</h2>

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/haron-lee"><img src="https://avatars.githubusercontent.com/u/88657261?v=4" width="180px;" alt=""/><br /><sub><b>이도하</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/ChoByungHyun"><img src="https://avatars.githubusercontent.com/u/102468625?v=4" width="180px;" alt=""/><br /><sub><b>조병현</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/d-charlie-kim"><img src="https://avatars.githubusercontent.com/u/74645799?v=4" width="180px;" alt=""/><br /><sub><b>김도경</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/dananote"><img src="https://avatars.githubusercontent.com/u/124513796?v=4" width="180px;" alt=""/><br /><sub><b>노태희</b></sub></a><br /></td>
  </tbody>
</table>
</div>

# 목차

- [We Wear Weather](#we-wear-weather)
- [목차](#목차)
  - [🔗 배포 링크](#-배포-링크)
  - [⚙️ 실행 방법](#️-실행-방법)
  - [👩‍💻 기능 UI](#-기능-ui)
  - [⌛ 진행 과정](#-진행-과정)
    - [회의 및 기록](#회의-및-기록)
  - [브랜치 전략](#브랜치-전략)
  - [커밋 메시지 컨벤션](#커밋-메시지-컨벤션)
  - [🤝팀 규칙](#팀-규칙)
    - [formatting 및 lint 전략](#formatting-및-lint-전략)
    - [기타](#기타)
    - [협업툴](#협업툴)
  - [📂 폴더 구조](#-폴더-구조)
  - [🛠️ 기술 스택](#️-기술-스택)

## 🔗 배포 링크

[배포 링크](http://we-wear-weather.vercel.app)
<!--deployLink:http://we-wear-weather.vercel.app-->
## ⚙️ 실행 방법

```
npm install
npm run start
```

## 👩‍💻 기능 UI

현재위치 수집, 성별/나이 수집, 홈, 모달, 카드위젯, 서치, 주간, 설정
| 위치정보 수집 | 성별/나이 수집 | 현재위치에 따른 옷차림 |
| --- | --- | --- |
| <img src="https://github.com/dananote/To-do-list/assets/124513796/e85151e4-5988-4ad3-8c3e-aab6e1580633" width="250" /> | <img src="https://github.com/dananote/To-do-list/assets/124513796/d75c3db7-bfa0-4b58-b6da-8d17e6fbc452" width="250"/> | <img src="https://github.com/dananote/To-do-list/assets/124513796/1a1056e6-1bc5-4317-b401-eed6a967acc4" width="250"/> |

| 카드 위젯 / 낮                                                                                                         | 카드 위젯 / 밤                                                                                                        | 위치 검색                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/dananote/To-do-list/assets/124513796/497c2638-8525-4e33-9cff-a27a56c6f41d" width="250" /> | <img src="https://github.com/dananote/To-do-list/assets/124513796/17fe4adc-4fd6-463c-9e51-83a509832042" width="250"/> | <img src="https://github.com/dananote/To-do-list/assets/124513796/c881b12f-4062-46a1-933b-17b4126e3062" width="250"/> |

| 주간 날씨                                                                                                              | 설정                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/dananote/To-do-list/assets/124513796/6399603f-fd40-41cb-8909-eb33d53d3122" width="250" /> | <img src="https://github.com/dananote/To-do-list/assets/124513796/e1d934b8-3963-4514-a89c-9b6c4b373286" alt="main_image"/> width="250" |

## ⌛ 진행 과정

### 회의 및 기록

- 매주 진행 상황 및 이슈 공유
- 공유된 회의 내용을 노션에 기록
- 회의 내용을 토대로 다음주 이슈를 선정 및 Github 이슈로 등록
  ![image](https://github.com/haron-lee/we-wear-weather/assets/88657261/74e0b061-1069-44e2-9764-45cf5e9d1886)

## 브랜치 전략

- main
- develop
- 기능별 브랜치: feature/forecast

## 커밋 메시지 컨벤션

| 타입             | 설명                                                      |
| ---------------- | --------------------------------------------------------- |
| Feat             | 새로운 기능 추가                                          |
| Fix              | 버그 수정                                                 |
| Env              | 개발 환경 관련                                            |
| Style            | 코드 자체의 변경이 없는 경우, formatting, semicolon 등    |
| Refactor         | 코드 리팩토링 (더 효율적인 코드로 변경 등)(기능은 동일)   |
| Design           | CSS 등 사용자 UI 디자인 변경                              |
| Comment          | 필요한 주석 추가 및 변경                                  |
| Docs             | 내부 문서 추가/수정                                       |
| Test             | 테스트 코드, 리팩토링 테스트 코드 추가                    |
| Chore            | 빌드, 패키지 매니저 수정, 그 외 기타 수정 (.gitignore 등) |
| Rename           | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우       |
| Remove           | 파일 또는 폴더를 삭제하는 작업만한 경우                   |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                    |
| !HOTFIX          | 급하게 치명적인 버그를 고치는 경우                        |

## 🤝팀 규칙

### formatting 및 lint 전략

```json
// formatting
{
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": true,
  "singleQuote": true,
  "proseWrap": "preserve",
  "semi": true,
  "printWidth": 120,
  "endOfLine": "lf",
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "arrowParens": "always"
}
```

```json
// ESLint
{
  "env": {
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {},
  "ignorePatterns": ["dist/", "node_modules/"]
}
```

### 기타

- 폴더명: 대문자
- React Function: 함수 표현식
- 함수: 함수 선언문
- 함수이름: camel
- 컴포넌트: pascal
- 훅,로직파일: camel
- 상수변수: 대문자

### 협업툴

- discord
- notion

## 📂 폴더 구조

```
project-root/
│
├── public/ # 정적 파일들
│ ├── index.html
│ └── manifest.json
│
├── src/ # 소스 코드
│ ├── Components/    # 재사용 컴포넌트들
│ ├── Hooks/         # custom hooks
│ ├── Api/           # api 함수들
│ ├── Assets/        # images, icons
│ ├── Atom/          # Recoil Atoms
│ ├── Pages/         # 페이지별 컴포넌트
│ ├── Router/        # 라우팅
│ ├── Types/         # TypeScript 타입
│ ├── Utils/         # 공통 함수
│ ├── App.tsx        # App 컴포넌트
│ ├── index.tsx      # 진입점 파일
│ └── GlobalStyle.ts # 전역 스타일 설정파일
│
├── .env
├── .gitignore
├── .prettierrc.js
├── .eslintrc
├── package.json
├── tsconfig.json
└── README.md


```

## 🛠️ 기술 스택

<img src="https://img.shields.io/badge/Typescript-blue?style=square"/> 
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> 
<img src="https://img.shields.io/badge/ReactQuery-FF4154?style=flat&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/Axios-56347C?style=flat-square&logo=Axios&logoColor=white"/> 
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/git-F05032?style=flat&logo=git&logoColor=white">
<!--portfolio-->
