// npm packages that are part of the GitHub Actions toolkit
import * as core from '@actions/core'
import * as exec from '@actions/exec'
import * as tc from '@actions/tool-cache'

// Other npm packages
import * as which from 'which'

// Built into NodeJS
// import * as os from 'os'
// import * as path from 'path'

// Our own source code files
import * as inputs from './inputs'
import * as julia from './julia'
import * as juliaup from './juliaup'
import * as platform from './platform'

export async function main_function_run_me() {
    // Step 1: Make sure all required inputs are provided.
    inputs.get_julia_version_input()
    inputs.get_juliaup_version_input()

    // Step 2: Ensure that Juliaup is installed.
    const info = await juliaup.ensure_juliaup_is_installed()

    // Step 3: Print the path of `juliaup`:
    await print_debugging_juliaup_path(info)

    // Step 4: Install the Julia desired version, and set it as the default.
    await julia.install_desired_julia_version(info)

    // Step 5: Print the path of `julia` (julialauncher):
    await print_debugging_julialauncher_path(info)

    return
}

async function print_debugging_juliaup_path(info: { juliaup_dir: string}) {
    const juliaup = platform.get_juliaup(info)
    console.log(`juliaup: ${juliaup}`) // TODO: delete this line
    core.info(`juliaup: ${juliaup}`)
    await exec.exec(juliaup, ['--version'])
    return
}

async function print_debugging_julialauncher_path(info: { juliaup_dir: string}) {
    const julia = platform.get_julialauncher(info)
    console.log(`julia: ${julia}`) // TODO: delete this line
    core.info(`julia: ${julia}`)

    await exec.exec(julia, ['--version'])
    return
}
