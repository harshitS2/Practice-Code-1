# Git Branching Guide

This guide covers the process of creating a custom branch, pushing changes, and working with a new branch in Git.

## **1. Creating a Custom Branch and Pushing Changes**

### **Step 1: Create a New Branch and Switch to It**
```bash
git checkout -b my-custom-branch
```
This creates a new branch named `my-custom-branch` and switches to it.

### **Step 2: Make Changes and Add Files**
After making necessary changes in your project files, add them using:
```bash
git add .
```
Or add specific files:
```bash
git add <filename>
```

### **Step 3: Commit the Changes**
```bash
git commit -m "Added new feature in my-custom-branch"
```

### **Step 4: Push the Branch to Remote**
```bash
git push origin my-custom-branch
```

## **2. Merging the Custom Branch into Main**

### **Step 1: Create a Pull Request (PR)**
1. Go to your repository on **GitHub**.
2. Click on the **Pull Requests** tab.
3. Click **New Pull Request**.
4. Set `base: main` and `compare: my-custom-branch`.
5. Click **Create Pull Request**, add a title and description.
6. Review the changes and request approvals if needed.

### **Step 2: Approve and Merge the Pull Request**
- If required, get a **review and approval**.
- Click **Merge Pull Request**.
- Click **Confirm Merge**.
- (Optional) **Delete the branch** after merging.

### **Step 3: Merging Locally Using Git Commands**
```bash
git checkout main
git pull origin main
git merge my-custom-branch
git push origin main
```
(Optional) Delete the merged branch:
```bash
git branch -d my-custom-branch
git push origin --delete my-custom-branch
```

## **3. Working with a New Branch (e.g., `UseEffect`)**

### **Step 1: Create and Switch to the New Branch**
```bash
git checkout -b UseEffect
```

### **Step 2: Make Changes and Add Them**
```bash
git add .
git commit -m "Implemented useEffect functionality"
```

### **Step 3: Push the New Branch to Remote**
```bash
git push origin UseEffect
```

### **Step 4: Continue Working on the Branch**
- If you switch to another branch and later want to return to `UseEffect`:
  ```bash
  git checkout UseEffect
  ```
- If you want to update `UseEffect` with the latest changes from `main`:
  ```bash
  git pull origin main
  git merge main
  ```
- To push final changes:
  ```bash
  git push origin UseEffect
  ```

## **4. Merging `UseEffect` Branch into `Main`**
Follow the **same merging process** mentioned in section 2.

---

### 🎯 **Now your workflow is streamlined!**
This guide ensures smooth Git branch management for an efficient development process. 🚀

