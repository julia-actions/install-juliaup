// npm packages that are part of the GitHub Actions toolkit:
// See dynamic imports below
// await import('@actions/core');
// await import('@actions/exec');

// Other npm packages

// Built into NodeJS

// Our own source code files
import * as inputs from './inputs'
import * as julia from './julia'
import * as juliaup from './juliaup'
import * as platform from './platform'

export async function main_function_run_me() {
    // Step 1: Make sure all required inputs are provided.
    inputs.get_juliaup_channel_input()
    inputs.get_juliaup_version_input()

    // Step 2: Ensure that Juliaup is installed.
    const info = await juliaup.ensure_juliaup_is_installed()

    // Step 3: Print the path of `juliaup`:
    await print_debugging_juliaup_path(info)

    // Step 4: Install the Julia desired version, and set it as the default.
    await julia.install_desired_juliaup_channel(info)

    // Step 5: Print the path of `julia` (julialauncher):
    await print_debugging_julialauncher_path(info)

    return
}

async function print_debugging_juliaup_path(info_object: { juliaup_dir: string }) {
    // Dynamic imports:
    // npm packages that are part of the GitHub Actions toolkit
    const { info: core_info } = await import('@actions/core');
    const { exec: exec_exec } = await import('@actions/exec');

    const juliaup = platform.get_juliaup(info_object)
    core_info(`juliaup: ${juliaup}`)
    await exec_exec(juliaup, ['--version'])
    return
}

async function print_debugging_julialauncher_path(info_object: { juliaup_dir: string }) {
    // Dynamic imports:
    // npm packages that are part of the GitHub Actions toolkit
    const { info: core_info } = await import('@actions/core');
    const { exec: exec_exec } = await import('@actions/exec');

    const julia = platform.get_julialauncher(info_object)
    core_info(`julia: ${julia}`)

    await exec_exec(julia, ['--version'])
    return
}
