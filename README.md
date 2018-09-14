# Node GrapqlQL boilerplate project..

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
  - dynamoose
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

실행

```
$ DYNAMO_ENDPOINT=http://localhost:8000; dynamodb-admin
```

## DB Migrate

```bash
ts-node migrate
```

## 개발

### 로컬 실행하기

```
$ yarn start
```

## API 개발 순서

1. `api`에서 함수 및 graphql 파일 작성
1. `src/graphql.ts`파일에서 `xxx.resolvers.ts` 파일을 `import`해 줘야 함.. 그래야 컴파일 시 js 파일이 생성 됨.
1. `middleware`에서 퍼미션 넣어 주기

## middleware 용 인증 코드 보내기

http header 에 인증 토큰을 같이 보내 줘야 한다.

```json
{
  "Authorization": "[jwt_token]"
}
```

grapql 툴 띄우기

> http://127.0.0.1:3000

## Tip

- `bcrypt`는 aws lambda 에서 돌아가지 않는다. 대신 `bcryptjs`를 사용 해 줘야 한다.
