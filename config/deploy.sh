SPACER="============================================================================================"

function base_run {
    echo "🔷 $1"
    $2
    echo $SPACER
}

function run {
    if check_diff $1; then
        base_run $2 $3
    fi
}

cd /site/akam/
source .env/bin/activate

OLD_COMMIT=$(git rev-parse HEAD)

base_run "update the source" "git pull"

NEW_COMMIT=$(git rev-parse HEAD)

function check_diff {
    local file_has_changed=$(git diff --name-only $OLD_COMMIT...$NEW_COMMIT --exit-code $1)
    if [ -z "$file_has_changed" ]; then
        return 1
    else
        return 0
    fi
}

run "requirements.txt" "install pip packages" "pip install -r requirements.txt"
run "package.json package-lock.json" "install npm packages" "npm ci"
run "app/* config/webpack/*" "build the app!" "npm run build"
run "config/akam.uwsgi.service" "update uwsgi service" "cp config/akam.uwsgi.service /etc/systemd/system/ --force && systemctl daemon-reload"
base_run "restart uwsgi service" "systemctl restart akam.uwsgi"
run "config/nginx.conf" "restart nginx" "systemctl restart nginx"

echo "Deploy is Done! ✅"
