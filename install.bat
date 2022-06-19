nvm install lts
nvm use 16.15.1
npm install --location=global pnpm
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
pnpm install
cp .\.env.example .env
pnpm run dev
REM pnpm install
REM pnpm install @fortawesome/fontawesome-free
cp -R .\node_modules\@fortawesome\fontawesome-free\ .\public\vendor\fontawesome-free
REM pnpm install jquery
cp -R .\node_modules\jquery\dist\ .\public\vendor\jquery\
REM pnpm install bootstrap
cp -R .\node_modules\bootstrap\dist\ .\public\vendor\bootstrap\
REM pnpm install jquery-easing
cp -R .\node_modules\jquery-easing\dist\ .\public\vendor\jquery-easing\
REM pnpm install chart.js@2.9.4
cp -R .\node_modules\chart.js\dist\ .\public\vendor\chart.js\