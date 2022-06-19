# njs-jejardine
nodejs french tool to administrate vegetable garden

Using :
    - nvm, nodejs, npm, pnpm
    - adonisjs, eslint, prettier, webpack
    - typescript, edge (template)

## Install and run

nvm install lts
nvm use 16.15.1
npm install --location=global pnpm
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
pnpm install
cp .\.env.example .env
pnpm run dev

## Making OF

1. Download and install nwm from https://github.com/coreybutler/nvm-windows
   1. Click on "Download Now!" (https://github.com/coreybutler/nvm-windows/releases)
   2. Download and intall nwm-setup.exe
2. Create project sources directory
   1. Here C:\Sources\njs-pic\
3. Set visual studio code run as admnistrator
   1. Right click on Visual Studio Code shortcut
   2. Select tab "Compatibility"
   3. Check "Run as administrator"
4. Run visual studio and open directory
5. Install nodejs long time support version
   1. On VSC Terminal (CTLR+%)
   2. Type >> nvm install lts
   3. Type >> nvm use <lts version number>
6. Install pnpm
   1. Type >> npm install -g pnpm
7. Bypass windows script restriction
   1. Type >> Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
8. Init adonis Project
   1. Type >> cd ..
   2. Type >> pnpm create adonis-ts-app njs-pic
   3. Choose: web
   4. Type project name >> njs-pic
   5. Type y for eslint >> y
   6. Type y for pretty >> y
   7. Type y for webpack >> y
9. Adding database support
    1. Type command >> cd .\njs-pic\
    2. Type command >> pnpm add @adonisjs/lucid
       1. Missing peer openapi-types
    3. Type command: node ace configure @adonisjs/lucid
       1. Choose: SQLite
       2. Choose: In the browser
10. Copy and edit README.md file
11. Create project on github
12. Init project on git
    1. Configure git user name and email
       1. Type command >> git config --global user.name "<User Name>"
       2. Type command >> git config --global user.email "<User Email>"
    2. Init git project
       1. Type command >> git init
       2. Type command >> git add .
       3. Type command >> git commit -m "first commit"
       4. Type command >> git branch -M main
       5. Type command >> git remote add origin https://github.com/threadom/njs-pic.git
       6. Type command >> git push -u origin main
13. Copy sb-admin-2 free
14.
   pnpm install
   pnpm install @fortawesome/fontawesome-free
   cp -R .\node_modules\@fortawesome\fontawesome-free\ .\public\vendor\fontawesome-free
   pnpm install jquery
   cp -R .\node_modules\jquery\dist\ .\public\vendor\jquery\
   pnpm install bootstrap
   cp -R .\node_modules\bootstrap\dist\ .\public\vendor\bootstrap\
   pnpm install jquery-easing
   cp -R .\node_modules\jquery-easing\dist\ .\public\vendor\jquery-easing\
   pnpm install chart.js@2.9.4
   cp -R .\node_modules\chart.js\dist\ .\public\vendor\chart.js\