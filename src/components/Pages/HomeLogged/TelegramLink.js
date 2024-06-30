import React from "react";
import "./TelegramLink.css";

function Login() {
  return (
    <div className="content-telegram">
      <a
        className="btn-telegram"
        href="https://web.telegram.org/k/#@ChatterbotTccBot"
        target="_blank"
      >
        <span className="text-telegram">Obtenha informações pelo Telegram</span>
      </a>
    </div>
  );
}

export default Login;
