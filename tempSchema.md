# 기초 스키마

## User
```
_id
slug
name
country
cover_img
email
verified
phone
bio
logo
social
  twitch
  facebook
  kakao
  naver
  steam
  bnet
```

## 대회
```
_id
slug
name
status
logo
game {
  name
}
authorization: myAuth
organizer {
  _id
  name
  logo
  bio
  slug
}
startAt
participantType  // 대회 유형
participantCount  // 대회 인원
checkInDeadline
receptionEnable
location
country
__typename
```