# Git Commands

## Initialize Git

```

git init

```

## Configure Git

**Local Config:**
```

git config user.name 'vishal'
git config user.email 'vishal@gmail.com'

```

**Global Config:**
```

git config --global user.name 'vishal'
git config --global user.email 'vishal@gmail.com'

```

**System Config:**
```

git config --system user.name 'vishal'
git config --system user.email 'vishal@gmail.com'

```

## Unset Config Settings

```

git config --global --unset user.name

```

## See All Config Settings

```

git config --global list

```

## Stage Files

Stage all the changes in the current directory and its subdirectories:
```

git add .

```

Stage all the changes in the Git repository:
```

git add --all
git add -A

```

## Commit Changes

```

git commit -m 'message'

```

## Set Remote Repository

```

git remote add origin 'git_repo'

```

## Rename the Current Branch

```

git branch -M main

```

## Set Default Branch as Main

```

git config --global init.defaultbranch main

```

## Push to Remote Repository

```

git push -u origin main

```

## Revert File from Stage

```

git restore --staged filename

```

## Branch Management

Create a new branch:
```

git branch newbranch

```

Change to a new branch:
```

git checkout newbranch

```

Create and switch to a new branch:
```

git checkout -b newbranch

```

See all branches:
```

git branch

```

## Merge Different Branches

1. First, switch to the main branch:
```

git checkout main

```

2. Merge newbranch into main:
```

git merge newbranch

```
```