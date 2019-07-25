# OpenAPI Swagger Editor Live

A live swagger editor that saves your changes back to the file.

## Installation

```
npm install openapi-swagger-editor-live -g
```

## Usage

```
openapi-swagger-editor-live <swagger file path here>
```

You can also specify host or port number by passing --host or --port option:

```
openapi-swagger-editor-live <swagger file path here> --host=0.0.0.0 --port=8000
```

If you're using multiple files with swagger:

```
openapi-swagger-editor-live <swagger file path here> --folder=api
```

## Docker

### Usage

#### CLI

```
docker run -it -e EDITOR_PORT=3001 -p 3001:3001 -v /local/path/to/swagger.yaml:/swagger/swagger.yaml vmaillart/openapi-swagger-editor-live
```

Port by default is 8000.

#### Docker compose

```
version: "3"

services:
  swagger-editor:
    image: vmaillart/openapi-swagger-editor-live
    environment:
      - EDITOR_PORT=3001
    volumes:
      - /local/path/to/swagger.yaml:/swagger/swagger.yaml
    ports:
      - "3001:3001"
```
