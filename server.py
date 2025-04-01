import json
import requests
from http.server import BaseHTTPRequestHandler, HTTPServer

# 🔹 Вкажи свій Telegram-токен і ID користувача
TELEGRAM_BOT_TOKEN = "7982808384:AAFKF5Zp-xsBEb-kinSVVCH8Kb19oTVyzW8"
TELEGRAM_CHAT_ID = "692994741"

def send_to_telegram(data):
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    payload = {"chat_id": TELEGRAM_CHAT_ID, "text": data}

    response = requests.post(url, json=payload)
    return response.status_code == 200

class SimpleHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_POST(self):
        if self.path == "/submit":
            content_length = int(self.headers["Content-Length"])
            post_data = self.rfile.read(content_length)

            try:
                data = json.loads(post_data)
                text = data["text"]
                print(text)

                # 🔹 Відправляємо в Telegram
                if send_to_telegram(text):
                    response = {"message": "Дані надіслано в Telegram"}
                else:
                    response = {"message": "Помилка надсилання в Telegram"}

                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps(response).encode("utf-8"))

            except (json.JSONDecodeError, ValueError):
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"message": "Помилка у форматі JSON"}).encode("utf-8"))

server = HTTPServer(("0.0.0.0", 5000), SimpleHandler)
print("Сервер запущено на порту 5000")
server.serve_forever()