# Neutripuro_Heroku
Repository for Neutripuro website to be deployed on Heroku

### Deploy to Heroku

```sh
	$ heroku login
	Enter your Heroku credentials.
	...
	$ git init
	$ heroku create -app <Heroku App>
	Creating <Heroku App>... done, stack is cedar-14
	http://<Heroku App>.herokuapp.com/ | git@heroku.com:<Heroku App>.git
	Git remote heroku added
	$ heroku git:remote -a <Heroku App>
	$ git add .
	$ git commit -m "<Whatever feels rigth>"
	$ git push heroku master
	...
	-----> Java app detected
	...
	-----> Launching... done
		http://arcane-lowlands-8408.herokuapp.com deployed to Heroku
```


### Errors Fixing

```sh
-----> executing ./gradlew
			/tmp/*/bin/compile: line 41: ./gradlew: Permission denied
```
	Fix by setting the executable flag on your gradlew file.
		Either	chmod +x gradlew (on unix systems)
		OR 		git update-index --chmod=(+|-)x <file>
	Do not forget to commit changes to GitHub.


