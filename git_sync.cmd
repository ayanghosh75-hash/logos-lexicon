@echo off
set PATH=C:\Users\acer\AppData\Local\MinGit\cmd;C:\Program Files\GitHub CLI;%PATH%
cd /d "C:\Users\acer\.gemini\antigravity\scratch\logos-lexicon"
git add -A
git commit -m "Production verified: Canonical 66 Books, Sermon Studio, Daily Word, AdSense ca-pub-3020259399527859, and Support badge"
git push origin main
echo Sync complete!
