#!/bin/bash

mv go.mod server && cd $_
printf 'package main\n\nimport (\n\t"fmt"\n\t"time"\n)\n\nfunc main() {\n\ttime.Sleep(1000 * time.Millisecond)\n\tfmt.Println("Hello World 👋")\n}' > main.go
go get "github.com/joho/godotenv"
mkdir env && cd $_
touch .env.example
printf 'package env\n\nimport (\n\t"log"\n\t"os"\n\n\t"github.com/joho/godotenv"\n)\n\nfunc Process(key string) string {\n\terr := godotenv.Load("env/.env", ".env")\n\t	if err != nil {\n\t\tlog.Fatal("Error loading .env, make sure there is one")\n\t}\nreturn os.Getenv(key)\n}' > env.go

cd ../.. && rm -r go.sh