# Nest.JS Starter Template

## What's Included

- OpenAPI/Swagger
- Health EP `/health`
- Helmet
- Dockerfile
- Helm Chart
- GitHub Action workflows to lint, test, build image, and verify helm chart

## NPM Scripts

| Syntax             | Description                                                         |
| ------------------ | ------------------------------------------------------------------- |
| minikube:start     | Creates a minikube cluster for testing                              |
| minikube:stop      | Stops the minikube cluster                                          |
| minikube:delete    | Deletes the minikube cluster                                        |
| minikube:copyImage | Load the build image from build:image into the minikube cluster     |
| build              | Compile the TypeScript to JavaScript                                |
| build:image        | Build the container image                                           |
| build:docs         | Builds the docs folder                                              |
| start:dev          | Run the server with hot reloading on save                           |
| start              | Start the server                                                    |
| lint               | Check if code passes linting rules                                  |
| lint:fix           | Automatically fix any formatting or linting rules that can be fixed |
| helm:deploy        | Deploy the chart with the local to your cluster                     |
| helm:uninstall     | Delete the chart release from your cluster                          |
| helm:test          | Run the packaged tests (postman) for the helm release               |
| test               | Run the unit tests                                                  |

## How to use published chart

First add the repo `helm repo add nestjs-starter  https://bryopsida.github.io/nestjs-starter/`, then fetch updates `helm repo update`, and finally, install with `helm upgrade --install starter nestjs-starter/nestjs-starter --wait`.
