# GGF

## 사용 플랫폼

- aws
  - lambda
  - dynamodb
- node
  - typescript
  - graphql-yoga
  - handlebars
  - joi
  - jsonwebtoken
- mailgun
- tdd : jest

## 설치

```
$ sudo npm install -g typescript ts-node yarn
```

## 초기화

```
$ yarn
```

## 개발용

### dynamodb local service

download : https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/DynamoDBLocal.html

#### 시작하기

```
$ java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
```

### 개발용 GUI

#### 설치

```
$ sudo yarn global add dynamodb-admin -g
```

#### 실행

```
$ DYNAMO_ENDPOINT=http://localhost:8000; dynamodb-admin
```

#### 웹 브라우저로 띄우기

> http://127.0.0.1:8001


## DB Migrate

```bash
ts-node migrate
```

기본 데이터 베이스를 만들어 줍니다.

## 개발

### 로컬 실행하기

```
$ yarn start
```

### Deploy
```
$ yarn deploy
```

### Test
```
$ yarn test
```

## API 개발 순서

1. `handelers`에서 함수 구현
1. `typeDefs`에서 graphql 제작
1. `resolvers`에서 함수 연결
1. `middleware`에서 퍼미션 넣어 주기

## 인증 코드 보내기

http header 에 인증 토큰을 같이 보내 줘야 한다.

```json
{
  "Authorization": "[jwt_token]"
}
```

grapql 툴 띄우기

> http://127.0.0.1:3000
