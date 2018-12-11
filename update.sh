alias git = "/usr/bin/git"
cd /home/kwoc/kwoc
git add .
git stash
git fetch origin
git rebase origin/master
git stash apply
/usr/bin/sudo /bin/systemctl restart kwoc.service
echo "KWoC Service Restarted!"