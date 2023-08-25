build:
	docker build -t image2:volumes .
run:
	docker run -d -p 80:3002 --env-file ./config/.env -v logs4:/app/data --rm --name container3 image2:volumes 
run-dev:
	docker run -d -p 80:3002 --env-file ./config/.env -v '/home/fess/Desktop/Projects/обучение/docker/logs-app-master:/app' -v /app/node_modules --rm --name container3 image2:volumes
stop:
	docker stop container3
delete:
	docker container prune