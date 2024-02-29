# community_ArNook_test

community_ArNook의 ***Cypress Test code*** 저장소

## Cypress 설치 & 실행
```
$ npm i --save-dev cypress
$ npx cypress run
```

<br>

## Cypress App 실행
```
$ npm cypress open
```
> 초기 위의 명령어를 이용했지만 실행되는 App이 정상적으로 작동하지 않음

### npm Script 작성하기
명확한 App의 실행과 동작을 위해 *package.json*에 아래 구문 추가
```
{
  "scripts": {
    "cypress:open": "cypress open"
  }
}
```
### 실행
```
$ npm run cypress:open
```

<br>

