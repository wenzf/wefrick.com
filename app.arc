@app
wefri4

@aws
runtime nodejs18.x
  region eu-central-1
  timeout 10
# concurrency 1
# memory 1152
# profile default
# region us-west-1
# timeout 30

@http
/*
  method any
  src server

@plugins
plugin-remix
  src plugin-remix.js

@static
  compression true

@tables
gridb
  pk *String  # userId lang