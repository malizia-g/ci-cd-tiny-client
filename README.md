# basic-docker-heroku-ci

- install heroku: npm install -g heroku
- heroku login -i
- heroku create -a python-api-service
- git remote -v
- git add *
- git commit -m "prova"
- heroku stack:set container
