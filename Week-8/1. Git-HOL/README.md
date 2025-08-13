Here’s your markdown with simple captions for each image and no italics, just plain text as requested:

---

# 1. Git- HOL  Familiar with Git Commands

## Objectives

This repository was created to practice and become familiar with core Git commands such as:
`git init`, `git status`, `git add`, `git commit`, `git push`, and `git pull`.

During this hands-on lab, the following was done:

* Git configuration was set up on the machine.
* Notepad++ was integrated with Git and set as the default editor.
* Files were added to a version-controlled repository.

## Prerequisites

* Git Bash installed on the machine.
* Notepad++ installed and configured as Git editor.

Note:

* A free GitLab account was created (not using Cognizant credentials).
* This work is adapted from the 1. Git – Hands-On Lab exercise.

---

## Steps Completed

### 1. Git Configuration

1. Checked Git installation:

   ```bash
   git --version
   ```
2. Configured username and email:

   ```bash
   git config --global user.name "Suhana Samanta"
   git config --global user.email "suhanasamanta2003@gmail.com"
   ```
3. Verified configuration:

   ```bash
   git config --list
   ```

### 2. Integrated Notepad++ as Default Editor

1. Verified Notepad++ runs from Git Bash:

   ```bash
   notepad++
   ```

   Its path was added to environment variables.
2. Set Notepad++ as Git editor:

   ```bash
   git config --global core.editor "C:/Program Files/Notepad++/notepad++.exe -multiInst -nosession"
   ```
3. Verified the setting:

   ```bash
   git config --global -e
   ```

### 3. Created and Managed the Repository

1. Created repository folder and initialized Git:

   ```bash
   mkdir MyProject
   cd MyProject
   git init
   ```
2. Created `welcome.txt`:

   ```bash
   echo "Welcome to version control" > welcome.txt
   ```
3. Staged the file:

   ```bash
   git add welcome.txt
   ```
4. Committed the file:

   ```bash
   git commit -m "Add welcome.txt"
   ```

### 4. Pushed to Remote Repository

1. Created empty repository named `GitDemo` on GitLab.
2. Linked local repository to remote:

   ```bash
   git remote add origin https://gitlab.com/your-username/gitdemo.git
   ```
3. Pushed local commits to remote:

   ```bash
   git push origin master
   ```

---

## Screenshots

![Git commands and configuration](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%208/1.%20Git-HOL/output/git%20commands%20and%20configuration.png?raw=true)
Git Bash showing Git configuration and editor setup commands.

![Repository creation on GitLab](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%208/1.%20Git-HOL/output/creation%20of%20repository%20\(project\)%20in%20GitLab.png?raw=true)
New repository creation page on GitLab.

![GitDemo project on GitLab](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%208/1.%20Git-HOL/output/GitDemo%20project%20in%20GitLab.png?raw=true)
The GitDemo repository dashboard on GitLab.

---


