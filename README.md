<div align="center">
  
# REVEL-UP PROJECT

### Spring & MyBatis를 이용한 웹 개발 프로젝트
🍀리사이클 & 업사이클 제품만을 판매하는 크라우드펀딩 웹 개발🍀

![revelup-main](https://github.com/her9797/semi-project/assets/153487372/ad5c94cf-d322-463a-bbb2-5770f3ad1065)

</div>

### 개발환경

<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=OpenJDK&logoColor=white"> ![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white) <img src="https://img.shields.io/badge/Thymeleaf-005F0F?style=for-the-badge&logo=Thymeleaf&logoColor=white"> ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### ERD 설계
|ERD(논리)|ERD(물리)|
|---|---|
|![CROWD-ERD1](https://github.com/her9797/REVEL-UP/assets/153487372/465a08c9-a9cb-4676-aa08-636029580535)|![CROWD-ERD2](https://github.com/her9797/REVEL-UP/assets/153487372/e83b4f3c-5031-4787-bddd-51c64b74cb42)|



### PART

|회원|공지사항|심사|결제|
|---|---|---|---|
|![로그인 페이지](https://github.com/her9797/semi-project/assets/153487372/630e9faf-1a58-4a2e-9268-206b4c33a056)|![noti](https://github.com/her9797/REVEL-UP/assets/153487372/eda30e5c-8f71-486b-b5ca-51194c51d9d3)|![audit](https://github.com/her9797/REVEL-UP/assets/153487372/c2c800e4-438e-4037-b05d-0f1e0a5bf582)|![pay](https://github.com/her9797/REVEL-UP/assets/153487372/e9afa0ea-fa3f-4600-8cf2-be2976fbf565)|
|로그인 페이지|공지사항 등록|심사 처리|카카오페이 결제|


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
