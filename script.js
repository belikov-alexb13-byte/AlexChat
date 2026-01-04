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

  addMessage("Ты", message);
  input.value = "";

  setTimeout(() => {
    addMessage("Бот", "Привет! Это демо-версия чата 🙂");
  }, 600);
}

function addMessage(author, text) {
  chat.textContent += `${author}: ${text}\n\n`;
  chat.scrollTop = chat.scrollHeight;
}
