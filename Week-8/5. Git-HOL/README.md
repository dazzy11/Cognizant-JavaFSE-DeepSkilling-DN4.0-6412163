
# 5.Git-HOL — Clean Up and Push to Remote Git

## Objectives

This lab demonstrated:

* How to ensure the master branch is clean before pushing.
* How to synchronize with the remote repository.
* How to push pending changes to the remote.

---

## Prerequisites

Before starting this lab, the following were ensured:

* A working Git environment.
* An existing local repository linked to a remote GitLab repository.
* Completion of previous Git hands-on labs, including Git-T03-HOL\_002.

---

## Steps Completed

### 1. Verified Master Was in Clean State

```bash
git checkout master
git status
```

### 2. Listed All Available Branches

```bash
git branch -a
```

### 3. Pulled Latest Changes from Remote Master

```bash
git pull origin master
```

### 4. Pushed Pending Changes to Remote

```bash
git push origin master
```

### 5. Verified Changes on GitLab

The GitLab repository was opened in a browser, the page was refreshed, and the latest commits were confirmed visible in the repository’s commit history.

---

## Screenshots

![Pushing to Remote Git](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%208/5.%20Git-HOL/output/pusing%20to%20remote%20git.png?raw=true)

![GitLab GitDemo Project](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%208/5.%20Git-HOL/output/GitLab%20GitDemo%20prject.png?raw=true)

---

## Outcome

The local repository was successfully synchronized with the remote GitLab repository, ensuring that all changes from Git-T03-HOL\_002 were committed and pushed. The remote repository now reflects the latest updates from the local master branch.

---

