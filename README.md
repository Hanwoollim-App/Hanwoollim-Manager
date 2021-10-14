## 한울림 관리자용 어플리케이션
한양대학교 밴드동아리 한울림의 운영진분들을 위한 어플리케이션.
### 기능
- 합주, 멘토링 예약 관리
- 운영진 및 회장 임명
- 신규회원 승인
- 회원 탈퇴




## 기술스택
- React Native 0.64.2
- TypeScript 4.3.4
- React 17.0.1
- React Hooks
- React Context
- React Navigation

## 사용법
### 설치하기
- node modules

  ```
  yarn install
  ```
- IOS 빌드 시 `/ios`내에서 

  ```
  pod install
  ```
### 실행하기
- 안드로이드

  ```
  npx react-native run-android
  ```
- IOS

  ```
  react-native run-ios
  ```

## 폴더 구조
```
app
├── assets 
│   ├── fonts
│   └── images
├── components    : collection of react-native component codes
│   ├── common    : reusalbe components.
│   ├── navigator : navigation logic
│   └── screens   : components for each pages
│       ├── approval
│       ├── home
│       ├── login : the first page.
│       ├── member
│       ├── notice
│       ├── reservation
│       │   ├── process
│       │   └── timeTable
│       └── signIn
└── utils
    ├── constant  : constant informations for each pages
    │   ├── common
    │   │   └── design
    │   ├── login
    │   ├── main
    │   ├── navigation
    │   └── reservation
    │       ├── process
    │       └── timeTable
    ├── context  : context api codes
    └── types    : type for variables or functions.
```

## 네비게이션 구조
```
MainStackNavigator
├─ LoginStackNavigator
│      ├─ Login
│      └─ SignIn
└─ HomeStackNavigator
       ├─ Home
       ├─ Member
       ├─ NoticeStackNavigator
       │     ├─ NoticeDetail
       │     └─ NoticeUpload
       └─ ReservationStackNavigator
             ├─ ReservationTimeTable
             ├─ ReservationBandProcess
             └─ ReservationBandProcess
```

## 페이지 샘플
|login|signIn|home|
|---|---|---|
|<img width="240" alt="스크린샷 2021-08-20 오후 3 51 27" src="https://user-images.githubusercontent.com/70642609/130192870-4ec6551a-2ba2-4ed7-9d54-3e6d3698fb22.png">|<img width="240" alt="스크린샷 2021-08-20 오후 3 52 06" src="https://user-images.githubusercontent.com/70642609/130192891-52965b88-c2c2-48f2-88ac-a0e02004055c.png">|<img width="240" alt="스크린샷 2021-08-20 오후 3 52 40" src="https://user-images.githubusercontent.com/70642609/130192906-860ffb87-9f71-4c4d-a78d-27df26d0a761.png">|
|notice|reservation|
|<img width="240" alt="스크린샷 2021-08-20 오후 3 53 42" src="https://user-images.githubusercontent.com/70642609/130192933-5c45213c-4e1e-4c3e-9319-9fcbdb3aaa71.png">|<img width="240" alt="스크린샷 2021-08-20 오후 3 54 28" src="https://user-images.githubusercontent.com/70642609/130192958-4faf6803-eed2-42b9-8093-f7d5148f04a8.png">|




