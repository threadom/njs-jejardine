nvm install lts
nvm use 16.15.1
npm install --location=global pnpm
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
pnpm install
cp -R .\node_modules\@fortawesome\fontawesome-free\ .\public\vendor\fontawesome-free
cp -R .\node_modules\jquery\dist\ .\public\vendor\jquery\
cp -R .\node_modules\jquery.easing\ .\public\vendor\jquery.easing\
cp -R .\node_modules\bootstrap\dist\ .\public\vendor\bootstrap\
cp -R .\node_modules\chart.js\dist\ .\public\vendor\chart.js\
cp -R .\node_modules\datatables.net\js\ .\public\vendor\datatables.net\
cp .\.env.example .env
pnpm run dev
pause