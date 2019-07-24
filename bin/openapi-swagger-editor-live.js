#!/usr/bin/env node
"use strict";

var program = require("commander");
var fs = require("fs");
var swaggerFilePathValue;

program
  .version("0.0.1")
  .arguments("<swaggerFilePath>")
  .option("-p, --port <port>", "Port to be used. Default is 8000")
  .option("-h, --host <hostname|IP>", "Host to be used. Default is 127.0.0.1")
  .option(
    "-f, --folder <folder>",
    "folder to be used for a multifile swagger setup"
  )
  .action(function(swaggerFilePath) {
    swaggerFilePathValue = swaggerFilePath;
  });

program.parse(process.argv);

if (typeof swaggerFilePathValue === "undefined") {
  console.error(
    "Path to Swagger yaml file is required: openapi-swagger-editor-live <swaggerFilePath>"
  );
  process.exit(1);
}

if (typeof program.port === "undefined") {
  program.port = 8000;
}
if (typeof program.host === "undefined") {
  program.host = "127.0.0.1";
}

if (fs.existsSync(swaggerFilePathValue)) {
  require("../index.js").edit(
    swaggerFilePathValue,
    program.port,
    program.host,
    program.folder
  );
} else {
  console.error(swaggerFilePathValue + " does not exist.");
}
