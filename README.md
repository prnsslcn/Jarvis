# Jarvis - Smart Work Dashboard

**Jarvis**는 직장인을 위한 맞춤형 통합 워크 대시보드입니다.  
하루를 효율적으로 시작할 수 있도록, 메일, 날씨, 뉴스, 할 일 등을 위젯 형태로 제공합니다.

---

## MVP 기능 (1차 목표)

- OAuth2 로그인 (Google 또는 Microsoft)
- 대시보드 기본 레이아웃 (헤더 + 위젯 그리드)
- Gmail/Outlook 메일 연동
- 실시간 날씨 위젯
- GPT 요약 기반 뉴스 위젯
- 할 일 추가/삭제/완료 기능
- 사용자 위젯 설정 저장 (활성/비활성, 순서)
- 다크모드 및 반응형 대응

---

## 기술 스택

### Frontend
- TypeScript + React
- TailwindCSS
- Zustand (상태 관리 예정)
- Vite

### Backend
- TypeScript + NestJS
- OAuth2 (Google/Microsoft)
- PostgreSQL
- Redis (세션 및 캐시)
- SSE (실시간 데이터 처리)

---

## 로컬 개발 환경 설정

```bash
# 1. 레포지토리 클론
git clone https://github.com/your-org/jarvis.git
cd jarvis

# 2. 프론트엔드
cd frontend
npm install
npm run dev

# 3. 백엔드
cd ../backend
npm install
npm run start:dev
```

## 확장 예정 기능
- 일정 통합 보기
- 이중 메일 계정 동시 로그인 처리 (개인 + 회사)
- Slack/Notion 연동
- 드래그&드롭 기반 위젯 커스터마이징
- 사용량 통계
- Electron 기반 데스크톱 앱 배포
