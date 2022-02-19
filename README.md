# Next.js 로 Blog 만들기

1. What is Next.js

- React Framework for Production

2. Next.js 프로젝트 만들기

- create-next-app
- npx create-next-app appName
- npm dev or yarn dev

3. 라우팅 설정하기

- 정적 폴더 우선 순위
- 동적 폴더 라우트 관리
- php와 같이 직관적으로 표현 가능

4. Sanity 연결하고 데이터 가져오기

- Static Generation란 ?
  - 미리 모든 데이터를 준비한 다음에 정적 페이지로 만들어 파일단위로 서비스 하는 방식 (빌드 할때 처리)
- Server-side Rendering
  - 해당 페이지를 서버에서 바로 생성해서 내려주는 방식(Node방식)(요청이 올때마다 생성 )

---

- 현재 블로그 방식은 Static 방식으로 진행

---

- getStaticProps(Static Generation)
  - Fetch data at build time
- getStaticPaths (Static Generation)
  - Specify dynamic roues to pre-render pages based on data.
- getServerSideProps(Server-side Rendering)
  - Fetch data on each request.

5. 스타일작업 - Blog Home
6. 스타일 작업 - Blog Post
7. next.config.js
8. next.js 배포 이해하기

---

nextjs를 진행하면서 폰트 관련은 어떤형식으로 진행해야되는지 고민하게되었다.
그래서 단위에 대해 찾아보았는데 나온 단위는 v\*, %, em, rem과 같다.

- 부모요소(컴포넌트)에 대해 반응해야되는 경우는 % em
- browser에 대해 반응해야 되는 경우 v\* rem

%와 em은 부모 크기에 상대적인 영향을 받는 단위라고한다. 부모 요소 크기에따라 반응해야된다면 %, em을 사용하는게 맞는거 같고 요소의 너비와 높이에 때라 반응해야 된다면 %와 v\* 폰트 사이즈에 따라 반응할 경우 em, rem, 대충 끄적여봤는데 상황따라 쓰기 나름인거 같다. 이 방법이 맞다가 아니라 특정 상황에 따라 반응해야된다면 거기에 맞춰서 폰트를 조절해야될거같다. 이 부분은 삽질을 더해보면서 몸소 익혀봐야겠다.

---

next를 맛보기로 진행해보았는데 재밌는 프레임워크인거 같다. react를 하면서 next도 같이 공부를 진행해 봐야겠다.
