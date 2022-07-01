# 트리플 공개채용 과제 

## App View

![ezgif com-gif-maker](https://user-images.githubusercontent.com/83056347/176737652-06cdd8e2-9763-4da6-a383-d0aa8544d3f4.gif)

---------

## 프로젝트 실행 방법

```bash
$ npm install
$ npm run dev
```

--------

## 사용한 기술 
트리플에서 사용하는 기술을 미리 사용해보기 위해 아래의 기술을 사용<br>

### Next.js

- CSR에 대비 빠른 로딩과 SSG, SSR을 쉽게 구현할 수 있도록 지원

### TypeScript

- 개발 생산성을 높이기 위해 사용
  - 오타로 인해 발생할 수 있는 오류들을 타입 추론을 통해 사전에 잡아냄
  - 사전(컴파일 시점)에 오류를 잡아줘서, 불필요한 디버깅 시간 단축

### styled-components

- 스타일을 마크업과 비즈니스 로직과 같은 파일에 작성하여, 관심사별 응집도를 높이기 위해 사용
- classname을 사용하지 않고 스타일을 줄 수 있어 classname의 중복으로 인한 문제를 사전에 방지하기 위해 사용
- props를 전달하여 동적으로 스타일링하기 위해 사용

--------

## 과제를 진행하면서 고민했던 점들

### 접근성
- 실제 화면에는 보이지 않지만, 페이지 구조상 필요한 heading(h1, h2)를 스크린 리더가 읽을 수 있도록 [`VisuallyHidden`](https://github.com/linehyang/triple-frontend-homework/blob/main/components/VisuallyHidden.tsx)이라는 컴포넌트를 사용
- 지표, 수상 내역 등 리스트를 그려야 하는 컴포넌트에 `ul`, `li` 태그 사용

### 중복을 방지하고, 재사용 가능한 코드 작성
  - 좌측 이미지, 지표, 수상 내역들이 mount 되었을 때 애니메이션을 적용하기 위해, [`useMounted`](https://github.com/linehyang/triple-frontend-homework/blob/main/hooks/useMounted.tsx) 커스텀 훅 작성
  - 증가 속도가 느려지는 숫자를 재사용하기 위해 [`useCountUp`](https://github.com/linehyang/triple-frontend-homework/blob/main/hooks/useCountUp.tsx) 커스텀 훅 작성
  - 영역별 등장 애니메이션을 재사용하기 위해 [`fadeInUp`](https://github.com/linehyang/triple-frontend-homework/blob/main/styles/animation.ts) 적송

### 컨벤션
- 일관된 커밋 규칙
  - Feat : 새로운 기능 추가
  - Fix : 버그 수정
  - Docs : 문서 수정
  - Refact : 코드 리팩토링
  - Style : 코드 의미에 영향을 주지 않는 변경 사항
  - Chore : 빌드 부분 혹은 패키지 매니저 수정 사항
  - Add : 기타 내용 추가
- CSS property 순서를 정함 (position -> sizing -> font -> 기타)

_______ 

## Reference
- [증가 속도 느려지는 효과](https://easings.net/#easeOutCirc)<br>
- [requestAnimationFrame](https://velog.io/@younghwanjoe/requestAnimationFrame%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-%EC%83%81)
