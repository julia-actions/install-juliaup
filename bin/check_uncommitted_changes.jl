const cmd = `git --no-pager diff --exit-code --stat`

const proc = run(pipeline(cmd; stdin, stdout, stderr); wait = false)

wait(proc)

@info "" success(proc) proc.exitcode

if !success(proc)
    recommended_cmd = "make cleanall && make install-packages && make build && make pack"
    msg = "##[error] found changed files after build. " *
           "Please run `$(recommended_cmd)` and " *
           "then check in all changes."
    println(stderr, msg)
    exit(1)
end
