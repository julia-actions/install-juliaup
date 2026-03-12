// npm packages that are part of the GitHub Actions toolkit
// import * as core from '@actions/core'
import * as exec from '@actions/exec';
// Our own source code files
import * as inputs from './inputs.js';
import * as platform from './platform.js';
export async function install_desired_juliaup_channel(info) {
    // Install the Julia desired version, and set it as the default.
    const juliaup_channel = inputs.get_juliaup_channel_input();
    const juliaup = platform.get_juliaup(info);
    await exec.exec(juliaup, ['add', `${juliaup_channel}`]);
    await exec.exec(juliaup, ['update', `${juliaup_channel}`]);
    await exec.exec(juliaup, ['default', `${juliaup_channel}`]);
    return;
}
//# sourceMappingURL=julia.js.map