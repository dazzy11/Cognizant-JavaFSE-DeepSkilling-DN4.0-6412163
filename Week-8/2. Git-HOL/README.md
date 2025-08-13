

# 2.Git-HOL — Using .gitignore to Ignore Unwanted Files

## Objectives

This repository update was made to demonstrate how to:

* Explain the purpose of `.gitignore`.
* Configure `.gitignore` to ignore unwanted files and folders in a Git repository.

---

## Prerequisites

Before starting this lab, the following were ensured:

* A working Git environment set up.
* Notepad++ integrated as the default Git editor.
* An existing Git repository in the local system linked to a remote repository in GitLab.

---

## Steps Completed

### 1. Created Test Files to Ignore

Inside the Git repository (`GitDemo`), these files and folders were created:

```bash
echo "This is a log file" > debug.log
mkdir log
echo "This is inside the log folder" > log/test.txt
```

This created one `.log` file and a `log` directory with a sample text file.

---

### 2. Created and Configured `.gitignore`

The `.gitignore` file was created and edited to add these rules:

```
*.log
log/
```

This setup ignores:

* Any file ending in `.log`.
* The entire `log` directory and its contents.

---

### 3. Verified `.gitignore` Behavior

After saving `.gitignore`, the `git status` command confirmed that `.log` files and the `log/` folder were ignored and not staged.

---

### 4. Committed `.gitignore` to the Repository

The `.gitignore` file was staged and committed:

```bash
git add .gitignore
git commit -m "Add .gitignore to ignore .log files and log folder"
```

---

### 5. Pushed to Remote Repository

The committed `.gitignore` was pushed to the remote GitLab repository:

```bash
git push origin master
```

---

## Screenshots

![Git Bash showing gitignore commands](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%208/2.%20Git-HOL/output/gitignore%20command%20through%20git%20bash.png?raw=true)
*Git Bash displaying commands for creating files and `.gitignore`.*

![.gitignore file in GitDemo folder](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%208/2.%20Git-HOL/output/gitignore%20file%20in%20GitDemo.png?raw=true)
*Contents of the `.gitignore` file ignoring `.log` files and the `log` folder.*

---

## Outcome

This lab successfully demonstrated how to configure `.gitignore` to exclude specific files and directories, helping keep the Git repository clean and free from unwanted files.

---
