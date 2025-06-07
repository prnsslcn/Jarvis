import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthCallback from "./pages/AuthCallback";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 후 JWT 콜백 처리 */}
        <Route path="/auth/callback" element={<AuthCallback />} />

        {/* 로그인 페이지 */}
        <Route path="/login" element={<Login />} />

        {/* 로그인 후 메인 대시보드 */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 기본 경로 리디렉션 */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
