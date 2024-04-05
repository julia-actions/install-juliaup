// npm packages that are part of the GitHub Actions toolkit
// import * as core from '@actions/core'
import * as exec from '@actions/exec'

// Our own source code files
import * as inputs from './inputs'
import * as platform from './platform'

export async function install_desired_julia_version(info: { juliaup_dir: string}) {
    // Install the Julia desired version, and set it as the default.

    const julia_version = inputs.get_julia_version_input()
    const juliaup = platform.get_juliaup(info)

    await exec.exec(juliaup, ['add', `${julia_version}`])
    await exec.exec(juliaup, ['update', `${julia_version}`])
    await exec.exec(juliaup, ['default', `${julia_version}`])

    return
}
