run-ngrok : 
	ngrok http --subdomain clintvr 8080

run-node :
	PORT=8080 node app.js

