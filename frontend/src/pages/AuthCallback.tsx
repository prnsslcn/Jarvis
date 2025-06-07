import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("access_token", token);
      // ✅ 이후 zustand나 context로도 동기화 가능
      navigate("/dashboard");
    } else {
      navigate("/login"); // 토큰이 없을 경우
    }
  }, [navigate]);

  return <p>로그인 처리 중입니다...</p>;
};

export default AuthCallback;
