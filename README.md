[![Build And Test](https://github.com/RenoMuijsenberg/S3-Festival-Planner-Angular/actions/workflows/main.yaml/badge.svg)](https://github.com/RenoMuijsenberg/S3-Festival-Planner-Angular/actions/workflows/main.yaml)
[![Push Image To DockerHub](https://github.com/RenoMuijsenberg/S3-Festival-Planner-Angular/actions/workflows/docker-image.yaml/badge.svg)](https://github.com/RenoMuijsenberg/S3-Festival-Planner-Angular/actions/workflows/docker-image.yaml)
[![SonarCloud Quality Scan](https://github.com/RenoMuijsenberg/S3-Festival-Planner-Angular/actions/workflows/sonar-cloud.yaml/badge.svg)](https://github.com/RenoMuijsenberg/S3-Festival-Planner-Angular/actions/workflows/sonar-cloud.yaml)

![01-startup-series-dribbble](https://user-images.githubusercontent.com/43666923/191464472-29613f1a-6a0e-4acf-8420-798d98cbb5ea.gif)

# FestivalPlanner

## Project

### Project inspriration

To view the idea behind this project check: [Project inspiration](https://github.com/RenoMuijsenberg/S3-Festival-Planner-Angular/wiki).

### Project issues

To view the tickets/issues in this project check: [Issues](https://github.com/users/RenoMuijsenberg/projects/1)

## Setup and use git for this project

### Clone project and setup local branches

* Open a terminal that is able to use git commands.
* Navigate to the folder you want to project in with `cd {folder/folder}`
* To clone the project use `git clone https://github.com/RenoMuijsenberg/S3-Festival-Planner-Angular.git`
* Create local development branch and track the origin/dev branch `git checkout --track origin/dev`

### Using Git flow

#### Init Git flow
* Open a terminal in the project folder
* Type `git flow init`
* `Branch name for production releases: [main]` (enter)
* `Branch name for "next release" development: [] dev` (type dev and press enter)
* The reset of the prompts press enter to use default value

#### Start working on feature
* Open a terminal in the project folder
* Type `git flow feature start {feature name}`

#### Push to feature branch
* Open a terminal in the project folder
* `git add .`
* `git commit -m"{commit message}"`
* `git push origin {feature branch}`

#### Finish feature
* Open a terminal in the project folder
* `git flow feature finish {feature name}`

## Start developing

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
