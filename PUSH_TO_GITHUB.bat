@echo off
echo ================================================
echo  PUSHING SHIKUR PORTFOLIO TO GITHUB
echo ================================================
echo.

cd /d "C:\Users\hp\Desktop\shikur-portfolio"

echo [1/6] Initializing Git repository...
git init

echo [2/6] Setting main branch...
git branch -M main

echo [3/6] Adding remote origin...
git remote add origin https://github.com/Shikur-Ebrahim/portfolio.git

echo [4/6] Staging all files...
git add .

echo [5/6] Creating first commit...
git commit -m "feat: Initial portfolio project - Shikur Ebrahim Muhammed"

echo [6/6] Pushing to GitHub...
git push -u origin main

echo.
echo ================================================
echo  SUCCESS! Your code is now on GitHub!
echo  Visit: https://github.com/Shikur-Ebrahim/portfolio
echo ================================================
pause
