const chat = document.getElementById("chat");
const input = document.getElementById("input");
const sendBtn = document.getElementById("send");

sendBtn.onclick = sendMessage;
input.addEventListener("keydown", e => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const message = input.value.trim();
  if (!message) return;

  addMessage("user", message);
  input.value = "";

  setTimeout(() => {
    addMessage("bot", "Привет! Скоро я стану умным ИИ 🤖");
  }, 600);
}

function addMessage(type, text) {
  const msg = document.createElement("div");
  msg.className = "message " + type;
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}
