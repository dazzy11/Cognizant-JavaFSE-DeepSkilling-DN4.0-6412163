
# 3.Git-HOL — Branching, Merging, Deleting Branch

## Objectives

This lab demonstrated:

* How to create and work with branches in Git.
* How to merge a branch into the master branch.
* How to view differences between branches both in the command line and using the P4Merge tool.

---

## Prerequisites

Before starting this lab, the following were ensured:

* A working Git environment.
* P4Merge installed and configured as the default diff tool in Git.
* An existing Git repository linked to a remote repository in GitLab.

---

## Steps Completed

### 1. Created and Checked Out a New Branch

A new branch named `GitNewBranch` was created and checked out:

```bash
git branch GitNewBranch
git checkout GitNewBranch
```

### 2. Made Changes in the Branch

A new file was created and committed to the branch:

```bash
echo "This is a file in the new branch" > branchfile.txt
git add branchfile.txt
git commit -m "Add branchfile.txt in GitNewBranch"
```

### 3. Switched Back to Master

The master branch was checked out:

```bash
git checkout master
```

### 4. Compared Differences (Command Line)

Differences between the master branch and the new branch were viewed:

```bash
git diff master GitNewBranch
```

### 5. Compared Differences (Visual with P4Merge)

Git was configured to use P4Merge as the diff tool and the visual diff was launched:

```bash
git config --global diff.tool p4merge
git config --global difftool.p4merge.path "C:/Program Files/Perforce/p4merge.exe"
git config --global difftool.prompt false
git difftool master GitNewBranch
```

### 6. Merged the Branch into Master

The changes from `GitNewBranch` were merged into `master`:

```bash
git merge GitNewBranch
```

### 7. Viewed the Merge History

The merge and branch history was viewed graphically:

```bash
git log --oneline --graph --decorate
```

### 8. Deleted the Branch

After confirming the merge, the branch was deleted to keep the repository clean:

```bash
git branch -d GitNewBranch
```

---

## Screenshots

![Branching and merging in Git Bash](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%208/3.%20Git-HOL/output/branching%20and%20merging%20command.png?raw=true)
*Command-line output showing branch creation, file addition, and merge process.*

![Deleting Branch after Merge](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%208/3.%20Git-HOL/output/deleting%20branch.png?raw=true)
*Deleting the merged branch to maintain a clean Git repository.*

---

## Outcome

This lab successfully demonstrated branching and merging in Git, both through the command line and using the P4Merge visual tool. The master branch now contains the changes from `GitNewBranch`, and the feature branch was deleted to keep the repository tidy.

---

