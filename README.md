# WittyGenieBot

ChatBot using OpenAi's Chatgpt and messaging app Telegram
To host locally, pip install requirements.txt. Otherwise, utilise the telegram bot https://t.me/WittyGenieBot

How to Run:
conda activate chat
pip install -r requirements.txt
python server.py


build docker image:
docker build -t geniebot .
Run docker image:
docker run -dp 3000:3000 geniebot
Show docker images:
docker ps
Stop docker:
docker stop <container id>