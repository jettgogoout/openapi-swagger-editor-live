FROM node:12-alpine

ENV EDITOR_PORT 8000

RUN npm install -g openapi-swagger-editor-live

CMD openapi-swagger-editor-live /swagger/swagger.yaml --host=0.0.0.0 --port=$EDITOR_PORT