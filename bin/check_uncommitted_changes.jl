const cmd = `git --no-pager diff --exit-code --stat`

const proc = run(pipeline(cmd; stdin, stdout, stderr); wait = false)

wait(proc)

@info "" success(proc) proc.exitcode

if !success(proc)
    msg = "##[error] found changed files after build. " *
           "Please run `make pack`` and check in all changes."
    println(stderr, msg)
    exit(1)
end
