

# Git-HOL 4 — Resolving Merge Conflicts

## Objectives

This lab demonstrated:

* How to create a merge conflict.
* How to resolve conflicts using both manual editing and a 3-way merge tool.
* How to ensure clean commits after conflict resolution.

---

## Prerequisites

Before starting this lab, the following were ensured:

* A working Git environment.
* P4Merge installed and configured as the default diff/merge tool.
* An existing Git repository linked to a remote GitLab repository.

---

## Steps Completed

### 1. Verified Master was Clean

```bash
git checkout master
git status
```

### 2. Created a Branch and Added `hello.xml`

```bash
git branch GitWork
git checkout GitWork
echo "<message>Hello from GitWork branch</message>" > hello.xml
```

### 3. Updated `hello.xml` in the Branch

```bash
echo "<message>Updated from GitWork branch</message>" > hello.xml
git status
```

### 4. Committed Branch Changes

```bash
git add hello.xml
git commit -m "Add and update hello.xml in GitWork branch"
```

### 5. Switched to Master

```bash
git checkout master
```

### 6. Added a Different `hello.xml` in Master

```bash
echo "<message>Hello from master branch</message>" > hello.xml
```

### 7. Committed Master Changes

```bash
git add hello.xml
git commit -m "Add hello.xml in master branch"
```

### 8. Viewed Log

```bash
git log --oneline --graph --decorate --all
```

### 9. Compared with CLI

```bash
git diff master GitWork
```

### 10. Compared with P4Merge

```bash
git difftool master GitWork
```

### 11. Merged Branch into Master (Conflict Created)

```bash
git merge GitWork
```

### 12. Viewed Conflict Markup

```xml
<<<<<<< HEAD
<message>Hello from master branch</message>
=======
<message>Updated from GitWork branch</message>
>>>>>>> GitWork
```

### 13. Resolved Conflict with 3-Way Merge Tool

```bash
git mergetool
```

Final merged content:

```xml
<message>Merged: Master + GitWork</message>
```

### 14. Committed Resolved Changes

```bash
git add hello.xml
git commit -m "Resolve merge conflict in hello.xml"
```

### 15. Added Backup Files to `.gitignore`

```bash
echo "*.orig" >> .gitignore
git add .gitignore
git commit -m "Ignore merge backup files"
```

### 16. Listed and Deleted Branch

```bash
git branch -a
git branch -d GitWork
```

### 17. Viewed Final Log

```bash
git log --oneline --graph --decorate
```

### 18. Pushed to GitLab

```bash
git push origin master
```

### 19. Verified File Content

```bash
cat hello.xml
```

---

## Screenshots

![Creating GitWork Branch and hello.xml](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%208/4.%20Git-HOL/output/creating%20a%20bramch%20named%20GitWork%20and%20a%20file%20inside%20named%20hello.xml.png?raw=true)

![Adding hello.xml to master branch](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%208/4.%20Git-HOL/output/creating%20another%20hello.xml%20to%20master%20branch.png?raw=true)

![Merging branch to master in P4Merge](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%208/4.%20Git-HOL/output/merging%20branch%20to%20master%20in%20p4merge.png?raw=true)

![P4Merge Tool](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%208/4.%20Git-HOL/output/p4merge%20tool.png?raw=true)

![Merging in Git Bash](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%208/4.%20Git-HOL/output/merging%20in%20git%20bash.png?raw=true)

![Deleting Branch and Pushing to GitLab](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%208/4.%20Git-HOL/output/deleting%20branch%20and%20pushing%20to%20GitLab.png?raw=true)

![GitLab Project Commit](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%208/4.%20Git-HOL/output/Gitlab%20project%20Commit.png?raw=true)

---

## Outcome

This lab successfully demonstrated how to create and resolve merge conflicts in Git using both the CLI and P4Merge. The master branch now contains the resolved `hello.xml`, and merge backup files are ignored to keep the repository clean.

---

