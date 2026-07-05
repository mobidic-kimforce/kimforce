# KIMFORCE 웹사이트 소스 (Vite + React + Three.js)

라이브 사이트(kimforce.com)의 **소스코드**. 레포 루트에는 이걸 빌드한 결과물(index.html + assets/)이 배포용으로 들어있음.

## 수정 & 재배포
```bash
cd app
npm install
npm run build          # → app/dist 생성
cp -r dist/* ../       # 빌드 결과를 레포 루트로 복사 (Cloudflare Pages 정적 서빙)
cd .. && git add -A && git commit -m "..." && git push   # main push = 라이브 배포
```

## 구조
- src/App.jsx — 전체 레이아웃·섹션·폼·결제
- src/i18n.js — 4개 언어(ko/en/ja/zh) 사전
- src/three/Scene.jsx — 3D 히어로(지구본+아크+파티클)
- src/three/Brand.jsx — 3D 브랜드 오브젝트(토러스노트)
- src/styles.css — 전체 스타일
- Formspree: https://formspree.io/f/xwvzjnly
