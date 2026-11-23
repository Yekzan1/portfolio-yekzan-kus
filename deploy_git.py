import subprocess
import os

cwd = r"C:\Users\yekza\portfolio-yekzan-kus"

def run_cmd(args):
    print("Executing:", " ".join(args))
    res = subprocess.run(args, cwd=cwd, capture_output=True, text=True)
    print("OUT:", res.stdout)
    print("ERR:", res.stderr)
    return res.returncode

run_cmd(["git", "add", "."])
run_cmd(["git", "commit", "-m", "feat: portfolio personnel developpeur Yekzan KUS - Alternance L3 Informatique 2027"])
run_cmd(["git", "branch", "-M", "main"])
run_cmd(["gh", "repo", "create", "portfolio-yekzan-kus", "--public", "--source=.", "--remote=origin", "--push"])
