set git = "/usr/bin/git"

$git add .
$git stash
$git fetch origin
$git rebase origin/master
$git stash apply
/usr/bin/sudo /bin/systemctl restart kwoc.service
