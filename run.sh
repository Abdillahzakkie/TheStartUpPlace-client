heroku container:login
docker build -t registry.heroku.com/the-startup-place/web .
docker push registry.heroku.com/the-startup-place/web
heroku container:release web -a the-startup-place