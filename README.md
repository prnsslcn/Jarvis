# Jarvis: 워크 대시보드

직장인을 위한 통합 실시간 대시보드입니다. Gmail, 날씨, 뉴스, 일정 등 업무에 필요한 핵심 정보를 위젯 형태로 제공합니다.

## 🎯 프로젝트 목표

- 직장인이 매일 아침 책상에 앉아 바로 확인할 수 있는 개인 맞춤형 정보 제공
- Gmail, Outlook, 날씨, 뉴스, 할 일 등 핵심 위젯 통합
- 실시간 데이터 반영을 통한 업무 준비 시간 단축

## 🛠 기술 스택

### Frontend
- React + TypeScript
- TailwindCSS
- Zustand / Context API
- OAuth 로그인 연동

### Backend
- NestJS + TypeScript
- Google/Microsoft OAuth 인증
- SSE (Server-Sent Events) 기반 실시간 데이터
- PostgreSQL (or 다른 RDB)

## 🧩 주요 기능 (MVP 기준)

| 기능         | 설명                                  |
|--------------|---------------------------------------|
| Google 로그인 | OAuth2.0 기반 사용자 인증              |
| 메일 요약     | Gmail/Outlook 최근 메일 리스트 표시     |
| 날씨 정보     | 현재 지역 기준 실시간 날씨 표시         |
| 뉴스 요약     | 관심사 기반 뉴스 헤드라인 요약         |
| 할 일 목록    | 간단한 일정 체크 및 추가                |
