# Eric's Web App Template

### Overview

This template offers a lightweight set of frameworks that cover the basics of modern web apps while maintaining modular design that allows each app to easily swap out parts as needed. Apps created with this template should be deployable to a any server and support: Frontend, Backend, Shared Code Library, Database, Web Routing, and CI/CD Pipeline. 

### Use Cases

- I want to create a web app by copying this template and updating Github secrets + variables
- I want my app to be reachable via the internet without needing to configure an HTTP server
- I want my app to function without relying on any code outside of the app
- I want my app to continue to function if the original template is updated

## Design Decisions

### High level

This template defines a Monorepo that uses a package manager.

### Build Tool
This template comes with a build tool that automates the build process and allow for easy dev tooling

- Vite (Chosen)
- Rollup
- Parcel

### Package Manager
This package uses a package manager for maintaining and installing dependencies

- npm (Chosen)
- Yarn
- pnpm

### Monorepo Tooling
This template uses monorepo tooling to automate cross package dependencies

- NPM workspaces (Chosen)
- TurboRepo
- Lerna
- Nx

### CI/CD Pipeline
This template provides a CI/CD pipeline for automating the deployment and testing of the app

- Github Actions (Chosen)
- Bash

### Frontend
This template provides a frontend for generating web code vended to users

1. Language
    - Typescript (Chosen)
    - Javascript
1. Framework
    - React (Chosen)
    - Next.Js
1. Style
    - TailwindCSS (Chosen)
    - Styled Components

### Backend
This template provides a backend server for running continuous logic and providing API endpoints + websockets

1. Language
    - Typescript + Node (Chosen)
    - Javascript + Node
    - Python
    - Java
1. Framework
    - Fastify (Chosen)
    - Express
    - FastAPI

### Shared Code
This template provides a shared code repo for creating libraries, data types, and logic that need to be used across multiple packages. This code is compiled at runtime as needed by other packages.

1. Language
    - Compiled Typescript (Chosen)
        - Compiled to CJS and ESM
    - Javascript
    - Python
    - Java

### Database
This template provides a database for data storage

- PostgreSQL (Chosen)
- Mysql
- MongoDB

### HTTP Routing
This template provides HTTP routing to allow external web connections to the app

- Nginx (Chosen)
- Apache2

### Containerization
This template provides containerization for improving reliability of deployments and allow for deploy anywhere

- Docker (Chosen)

### Extra
This template also makes use of the following tools

- Testing - TBD
- Linter - eslint
- Script Helpers 
    - dotenv - Passing env vars
    - concurrently - Multithreading scripts
    - del-cli - File cleanup
- Dev Tools
    - tsx - backend
    - vite - frontend
    - tsc - shared code

## Old content to be refitted into this design doc

This template exists to resolve the following pain points endured in previous iterations of my website:
1. Code - Single monolith webapp
    1. When one app is re-built, all apps are rebuilt
    1. Configs need to be granular per folder to accommodate each app
    1. Introducing a new framework to one app requires a config visible to all apps
    1. Multiple different types of backend are fighting for urls
1. Deployment - Bash + Build files
    1. Using bash scripts for CI/CD is fragile and has high code cost
    1. Some apps may require unique deploy logic
    1. When one app needs to be re-deployed, all apps are re-deployed
    1. Apps depend upon the server configuration
    1. Testing and building are done on dev then the build is sent to the prod server

This template aims to fix these pain points as follows:
1. Code - Each app is their own repo
    1. No mixed builds
    1. Configs only impact one app
    1. Frameworks only impact one app
    1. Each app has its own backend
1. Deployment - Github Actions + Docker
    1. Github actions is robust and visible
    1. Deployment is decoupled from apps logic
    1. Each app maintains its own deployment pipeline
    1. Docker prevents server differences from impacting apps
    1. Docker can be deployed locally to test prod env before deploy