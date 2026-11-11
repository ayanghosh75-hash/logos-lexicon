@echo off
set PATH=C:\Users\acer\AppData\Local\MinGit\cmd;C:\Program Files\GitHub CLI;%PATH%
cd /d "C:\Users\acer\.gemini\antigravity\scratch\logos-lexicon"

echo [1/4] Setting up Git repository...
git init
git config user.name "Ayan Kumar Ghosh"
git config user.email "ayanghosh75@gmail.com"
git branch -M main

echo [2/4] Staging and committing files...
git add -A
git commit -m "Initialize Logos Lexicon — Multilingual Biblical & Theological Dictionary with Canonical 66 Books, Sermon Studio, Daily Word, and AdSense"

echo [3/4] Ensuring GitHub CLI authentication...
gh auth setup-git

echo [4/4] Creating public GitHub repository ayanghosh75-hash/logos-lexicon...
gh repo create ayanghosh75-hash/logos-lexicon --public --source=. --remote=origin --push --description "Logos Lexicon — Multilingual Biblical & Theological Dictionary, Canonical Scripture (66 Books), Greek/Hebrew Studies, and Sermon Studio"

if %ERRORLEVEL% NEQ 0 (
    echo Repo might already exist or remote needed, trying direct remote push...
    git remote remove origin 2>nul
    git remote add origin https://github.com/ayanghosh75-hash/logos-lexicon.git
    git push -u origin main -f
)

echo [SUCCESS] Pushed to GitHub: https://github.com/ayanghosh75-hash/logos-lexicon
