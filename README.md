<div align="center">
  
# REVEL-UP PROJECT

### Spring & MyBatis를 이용한 웹 개발 프로젝트
🍀리사이클 & 업사이클 제품만을 판매하는 크라우드펀딩 웹 개발🍀

![REVELUP](https://github.com/her9797/REVEL-UP/assets/153487372/ad048d61-e7e9-45a0-a0ae-7cb1e8dac968)


</div>

### 개발환경

<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=OpenJDK&logoColor=white"> ![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white) <img src="https://img.shields.io/badge/Thymeleaf-005F0F?style=for-the-badge&logo=Thymeleaf&logoColor=white"> ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### ERD 설계
|ERD(논리)|ERD(물리)|
|---|---|
|![CROWD-ERD1](https://github.com/her9797/REVEL-UP/assets/153487372/08ae7af0-8848-4179-86a5-20301a998dd0)|![CROWD-ERD2](https://github.com/her9797/REVEL-UP/assets/153487372/658c8281-2c57-4c72-96b6-61aa6fc8edee)|




### PART

|회원|공지사항|심사|결제|
|---|---|---|---|
|![login](https://github.com/her9797/REVEL-UP/assets/153487372/46a93d23-1a01-4b73-b2ec-31d54bc94eb9)|![pay](https://github.com/her9797/REVEL-UP/assets/153487372/ec3226b3-1888-48a6-97d0-48f111ba061f)|![audit](https://github.com/her9797/REVEL-UP/assets/153487372/52bd18ac-37dd-411e-8731-89468ab6e91c)|![noti](https://github.com/her9797/REVEL-UP/assets/153487372/299f2873-23b1-467e-a656-4088fa0bbf99)|
|로그인 페이지|카카오페이 결제|심사 처리|공지사항 등록|


### 기능
```
로그인
 - 스프링 시큐리티를 이용한 로그인 및 JavaMailSender를 이용한 사용자 인증 구현
 - 사용자 인터페이스 개선을 위한 Thymeleaf와 HTML을 활용한 프론트엔드 개발

결제
 - 카카오페이 테스트 API를 사용하여 결제 기능 구현
 - 테스트 결제 요청, 결제 승인, 결제 취소 등의 기능을 포함한 결제 프로세스 개발
 - API 응답 데이터를 처리하고, 사용자에게 결제 정보를 제공하는 프론트엔드 인터페이스 개발

공지사항
 - Spring 프레임워크를 활용하여 공지사항 관리 기능 구현
 - Thymeleaf와 HTML을 사용하여 공지사항 등록, 수정, 삭제 기능 개발
 - MyBatis를 이용하여 데이터베이스와 연동하여 공지사항 데이터 CRUD 작업 구현

심사
 - 펀딩 등록 시 심사 정보를 동시에 등록하는 로직 개발
 - 펀딩 등록과 심사 정보 등록 사이의 트랜잭션 처리로 데이터 일관성 유지

```
