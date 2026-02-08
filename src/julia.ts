// npm packages that are part of the GitHub Actions toolkit:
// See dynamic imports below
// await import('@actions/exec');

// Our own source code files
import * as inputs from './inputs'
import * as platform from './platform'

export async function install_desired_juliaup_channel(info: { juliaup_dir: string }) {
    // Dynamic imports:
    // npm packages that are part of the GitHub Actions toolkit
    const { exec: exec_exec } = await import('@actions/exec');

    // Install the Julia desired version, and set it as the default.

    const juliaup_channel = await inputs.get_juliaup_channel_input()
    const juliaup = platform.get_juliaup(info)

    await exec_exec(juliaup, ['add', `${juliaup_channel}`])
    await exec_exec(juliaup, ['update', `${juliaup_channel}`])
    await exec_exec(juliaup, ['default', `${juliaup_channel}`])

    return
}
