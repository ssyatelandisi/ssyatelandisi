rm docs
npm run build
cp -r build docs
git add .
git commit -m"add"
git push
