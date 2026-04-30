// npm packages that are part of the GitHub Actions toolkit
import * as core from '@actions/core';
import * as exec from '@actions/exec';
// Built into NodeJS
// import * as os from 'os'
// import * as path from 'path'
// Our own source code files
import * as inputs from './inputs.js';
import * as julia from './julia.js';
import * as juliaup from './juliaup.js';
import * as platform from './platform.js';
export async function main_function_run_me() {
    // Step 1: Make sure all required inputs are provided.
    inputs.get_juliaup_channel_input();
    inputs.get_juliaup_version_input();
    inputs.get_add_to_path_input();
    // Step 2: Ensure that Juliaup is installed.
    const info = await juliaup.ensure_juliaup_is_installed();
    // Step 3: Print the path of `juliaup`:
    await print_debugging_juliaup_path(info);
    // Step 4: Install the Julia desired version, and set it as the default.
    await julia.install_desired_juliaup_channel(info);
    // Step 5: Set action outputs for the resolved executable paths.
    set_action_outputs(info);
    // Step 6: Print the path of `julia` (julialauncher):
    await print_debugging_julialauncher_path(info);
    return;
}
function set_action_outputs(info) {
    const juliaup = platform.get_juliaup(info);
    const julialauncher = platform.get_julialauncher(info);
    core.setOutput('juliaup-path', juliaup);
    core.setOutput('julialauncher-path', julialauncher);
}
async function print_debugging_juliaup_path(info) {
    const juliaup = platform.get_juliaup(info);
    core.info(`juliaup: ${juliaup}`);
    await exec.exec(juliaup, ['--version']);
    return;
}
async function print_debugging_julialauncher_path(info) {
    const julia = platform.get_julialauncher(info);
    core.info(`julia: ${julia}`);
    await exec.exec(julia, ['--version']);
    return;
}
//# sourceMappingURL=start_here.js.map