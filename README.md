# 트리플 공개채용 과제 

## App View

![ezgif com-gif-maker](https://user-images.githubusercontent.com/83056347/176737652-06cdd8e2-9763-4da6-a383-d0aa8544d3f4.gif)

---------

## 프로젝트 실행 방법
1. `npm install`

2. `npm run dev`

--------

## 사용한 기술 
- Next.js <br/>
    `SEO를 위한 SSR를 쉽게 구현과 자동 코드 분할을 지원하는 Next.js를 통해 유저의 유입을 최대화하고 이탈을 최소화하기 위해 사용`
    <br/> <br/>
- TypeScript <br/>
    `오타로 인해 발생하였던 오류를 타입 추론을 통해 잡아내기 위해 사용` <br/>
    `Props 타입 검증을 런타임이 아닌 컴파일 시점에 수행하여 프로젝트의 생산성을 높이기 위해 사용`
     <br/> <br/>
- styled components <br/>
    `한 컴포넌트에 HTML, CSS, JavaScript를 모두 포함해 가독성을 높이기 위해 사용`<br/>
    `classname을 사용하지 않고 스타일을 줄 수 있어 classname의 중복으로 인한 문제를 사전에 방지하기 위해 사용`
     <br/> <br/>

--------

## 관심사
- 시맨틱 마크업
    - 실제 화면에는 보이지 않지만 시맨틱 마크업을 위한 `h1`,`h2` 태그 사용
    - 지표 문구, 수상 내역은 `list` 태그 사용

- 코드의 중복 방지, 재사용 가능한 컴포넌트
    - 재사용 가능한 스타일은 `styles/animation`으로 구현하여 사용
    - 숫자가 올라가는 애니메이션의 재사용을 위한 `hook(hooks/useCountUp)` 구현 

---------

## Commit 규칙

- Feat : 새로운 기능 추가
- Fix : 버그 수정
- Docs : 문서 수정
- Test : 테스트 코드 추가
- Refact : 코드 리팩토링
- Style : 코드 의미에 영향을 주지 않는 변경 사항
- Chore : 빌드 부분 혹은 패키지 매니저 수정 사항
- Add : 기타 내용 추가

_______ 

*reference<br>
[증가 속도 느려지는 효과](https://easings.net/#easeOutCirc)<br>
[requestAnimationFrame](https://velog.io/@younghwanjoe/requestAnimationFrame%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-%EC%83%81)
