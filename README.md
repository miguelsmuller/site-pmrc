# **Prefeitura Municipal de Rio Claro - RJ - Site**
![Code quality](https://img.shields.io/scrutinizer/quality/g/miguelsmuller/pmrc-site/master?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/miguelsmuller/pmrc-site?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/miguelsmuller/pmrc-site?style=flat-square)
![GitHub branch checks state](https://img.shields.io/github/checks-status/miguelsmuller/pmrc-site/master?style=flat-square)

## **OVERVIEW**
Implementation of the UI redesign that was presented at [**Behance**](https://www.behance.net/gallery/80414855/Redesign-Rio-Claro-City-Hall-Website) developed for study purposes for Rio Claro City Hall in the State of Rio Janeiro. The original site done in [**WordPress**](https://wordpress.org/) and is online at [**rioclaro.rj.gov.br**](https://rioclaro.rj.gov.br/) and  the new concept being developed in **[Angular](https://angular.io/)**.

**Angular** which is an application design framework and development platform for creating efficient and sophisticated single-page apps. It is for building the application interface using HTML, CSS and, mainly, JavaScript, created by Google's developers and has some basic elements that make this construction interesting, within them we can highlight the components, templates, directives, routing, modules, services, dependency injection and infrastructure tools that automate tasks, such as executing the unit tests of an application. 

- **Version:** 1.0 
- **License:** Proprietary - Private Use - All rights reserved. 
- **Available for consultation and study only**

## **TO-DO**
- [x] Base of site 
- [x] Basic Components
- [x] Page - Home
- [ ] Page - Content
- [ ] Page - Structure 
- [ ] Page - News
- [ ] Page - Contact
- [ ] Micro interactions
- [ ] Improve image efficiency - https://web.dev/uses-optimized-images

## **DOC CONTENT** 
* [Project Requirements](#project-requirements)
* [Running Locally](#running-locally)
* [Project Workflow](#project-workflow)   
* [Contributing](#contributing)
* [Deploy](#deploy)   
* [Changelog](#changelog)  

<br>

# **DEVELOPMENT AND OPERATION**  
## **PROJECT REQUIREMENTS**  
### **INSTALL ALL DEPENDENCIES**
Make sure that you also have **[NodeJS](https://nodejs.org/)** and **[NPM](https://www.npmjs.com/)** installed on your computer.
- **`$ node --version`** 
- **`$ npm --version`** 

Also make sure you have **Angular CLI** and **Ionic CLI** installed globally on your machine.  
- **`$ npm install -g @angular/cli @ionic/cli`**  

Install dependencies of project with:  
- **`$ npm install`**

<br>

## **RUNNING LOCALLY**  
Run te command  
**`$ ng serve`**

<br>

## **PROJECT WORKFLOW**  
This workflow uses two main branches to record the project's history. The **`master`** branch stores the official release history, and the **`develop`** branch serves as a resource integration branch.

The branch **`master`** is the branch that runs in the production environment. All commits on the **`master`** branch must have a version number.

Each new resource must reside on its own branch and must start from the **`develop`** branch. When a feature is completed, it is merged back into **`develop`**. Resources should never interact directly with the master.

The branch **`develop`** is the branch that runs in the test environment. It stores the latest features included in the projects and which are not yet able to enter the branch **`master`**. 

<br>

## **CONTRIBUTING**  
#### **REPORTING PROBLEMS**  
To report an issue, please [create a new pull request](https://github.com/miguelsmuller/pmrc-site/pulls).  

#### **SENDING CODE**  
Before sending your collaboration, check your code and the conventions adopted in the project and take the following steps:

- **Always check the branch used**: **`$ git status`**
- **Update your branch**: **`$ git pull`**
- **Rebase your branch**: **`$ git rebase -i HEAD~N`**
- **See the differences before committing**: **`$ git diff --cached`**
- **Delete locally develop branch**: **`$ git branch -d develop`**
- **Delete remotely develop branch**: **`$ git push origin --delete develop`**
- **Recreate develop branch**: **`$ git checkout -b develop`**

#### **IMPORTANT INFORMATION**  
- Do not commit before running the project locally
- See the changes implemented being carried out
- And especially make sure that these changes work
- **[Useful git commands](https://gist.github.com/leocomelli/2545add34e4fec21ec16)** 

<br>

## **DEPLOY**  
Provisionally while the site is not in production the depoly will be done on github pages for being a free and easy to use alternative to host our website.
- Generate production version with -  **`$ npm run build`**
  - A folder with the name test will be created in the same directory as the current project 
- Access the created folder
- Init git with: **`$ git init`**
- Add a origin with: **`$ git remote add origin git@github.com:miguelsmuller/pmrc-site.git`**
- Create a branch gh-pages with: **`$ git checkout -b gh-pages`**
- Add, Commit and Push with:
  - **`$ git add --all`**
  - **`$ git commit -m "Preview Site"`**
  - **`$ git push -f -u origin gh-pages`**
- See the result

<br>

## **CHANGELOG**  
= **2.0.0 - 14/11/2020** =  
New Version - 2020

= **1.0.0 - 26/09/2013** =  
First version
