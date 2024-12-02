From your current directory:

1. Create and switch to a new branch for UI work:
```bash
git checkout -b ui-updates
```

2. Make your changes in the ui folder

3. Stage UI-related changes:
```bash
git add ui/
```

4. Commit your changes:
```bash
git commit -m "description of UI changes"
```

5. Push the branch to remote:
```bash
git push origin ui-updates
```

6. When ready to merge, create a pull request through the GitHub interface

Remember to regularly:
```bash
git pull origin main
```
to keep your branch up to date with the main branch.