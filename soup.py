from urllib.request import Request, urlopen
import re
from bs4 import BeautifulSoup


for j in range(18):
    with open(f"Let Me Game In Peace {j+1}.txt", 'w') as f:
        for i in range(100):
            if j * 100 + i == 0:
                continue
            print(f"Loading... {j * 100 + i}")
            req = Request('https://boxnovel.com/novel/let-me-game-in-peace-boxnovel/chapter-' + str(j * 100 + i) + '/')
            req.add_header('User-Agent', 'Mozilla/5.0')
            content = urlopen(req)
            html = content.read().decode("utf-8")
            soup = BeautifulSoup(html, 'html.parser')
            #print(soup.prettify())
            content = soup.find_all("div", class_="text-left")[0].get_text()
            content = content.replace("Thank you for reading on myboxnovel.com", "")
            content = content.replace("\n\n\n", "\n")
            #print(content)
            content = content.split("\n")
            for c in content:
                if c.strip() == "":
                    continue
                elif c.startswith("Chapter"):
                    f.write(f"<h3 id='chapter{str(j * 100 + i)}'>{c}</h3>")
                elif c.startswith("Translator:"):
                    f.write(f"<h5>{c}</h5>")
                else:
                    f.write(f"<p>{c}</p>")
                f.write("\n")

    print("Done")


