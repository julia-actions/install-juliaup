// npm packages that are part of the GitHub Actions toolkit
import * as core from '@actions/core'
import * as exec from '@actions/exec'

// Built into NodeJS
// import * as os from 'os'
import * as path from 'path'

// Our own source code files
import * as inputs from './inputs.js'
import * as julia from './julia.js'
import * as juliaup from './juliaup.js'
import * as platform from './platform.js'

export async function main_function_run_me() {
    // Step 1: Make sure all required inputs are provided.
    inputs.get_juliaup_channel_input()
    inputs.get_juliaup_version_input()

    // Step 1b: Pin the Juliaup depot under RUNNER_TOOL_CACHE so it does
    // not land in the runner home directory. Exported so subsequent
    // workflow steps see the same depot. Honor any user-provided value.
    set_juliaup_depot_path()

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

function set_juliaup_depot_path() {
    const env_name = 'JULIAUP_DEPOT_PATH'
    const existing = process.env[env_name]
    if (existing && existing.length > 0) {
        core.info(`${env_name} already set to: ${existing}`)
        return
    }
    const tool_cache = process.env['RUNNER_TOOL_CACHE']
    if (!tool_cache || tool_cache.length === 0) {
        core.warning(`RUNNER_TOOL_CACHE is not set; leaving ${env_name} unset (Juliaup will use its default location)`)
        return
    }
    const depot_path = path.join(tool_cache, 'juliaup-depot')
    core.exportVariable(env_name, depot_path)
    core.info(`Set ${env_name} to: ${depot_path}`)
}

async function print_debugging_juliaup_path(info: { juliaup_dir: string}) {
    const juliaup = platform.get_juliaup(info)
    core.info(`juliaup: ${juliaup}`)
    await exec.exec(juliaup, ['--version'])
    return
}

async function print_debugging_julialauncher_path(info: { juliaup_dir: string}) {
    const julia = platform.get_julialauncher(info)
    core.info(`julia: ${julia}`)

    await exec.exec(julia, ['--version'])
    return
}
