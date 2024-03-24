// npm packages that are part of the GitHub Actions toolkit
import * as core from '@actions/core'
import * as exec from '@actions/exec'
import * as tc from '@actions/tool-cache'

// Other npm packages
import * as which from 'which'

// Built into NodeJS
import * as os from 'os'
import * as path from 'path'

// Our own source code files
import * as download from './download'
import * as input from './input'

/* eslint-disable no-alert, require-yield */

async function ensure_juliaup_is_installed() {
    // Step 1: Ensure that Juliaup is installed.
    // This step depends on the operating system.

    const platform = os.platform();
    core.debug(`Detected platform: ${platform}`)

    if (platform === 'win32') {
        await _windows_ensure_juliaup_is_installed()
    } else if (platform === 'linux') {
        await _unix_ensure_juliaup_is_installed()
    } else if (platform === 'darwin') {
        await _unix_ensure_juliaup_is_installed()
    } else {
        throw new Error(`Unsupported platform: ${platform}`)
    }

    return
}

// Windows: Make sure that Juliaup is installed.
// Only install Juliaup if it is not already installed.
async function _windows_ensure_juliaup_is_installed(){
    // TODO: don't install Juliaup if it is already installed.
    await download._windows_install_juliaup()
    return
}

// Unix (non-Windows): Make sure that Juliaup is installed.
// Only install Juliaup if it is not already installed.
async function _unix_ensure_juliaup_is_installed(){
    // TODO: don't install Juliaup if it is already installed.
    await _unix_install_juliaup()
    return
}

// Unix (non-Windows): Install Juliaup.
async function _unix_install_juliaup() {
    core.info('We will use the curl bash method to install Juliaup, with Bash as the shell')
    // This requires that Bash is already installed on the machine
    await exec.exec('bash', ['--version'])
    await exec.exec('bash', ['-c', 'curl -fsSL https://install.julialang.org | sh -s -- --yes'])
    return
}



async function install_desired_julia_version() {
    // Step 3: Install the Julia desired version, and set it as the default.

    const julia_version = input.get_julia_version_input()

    const juliaup_path = get_juliaup_path()

    await exec.exec(juliaup_path, ['add', `${julia_version}`])
    await exec.exec(juliaup_path, ['default', `${julia_version}`])

    return
}

function get_juliaup_path() {
    const juliaup_bindir = get_juliaup_bindir()
    const juliaup_path = path.join(juliaup_bindir, 'juliaup')
    return juliaup_path
}

function get_julialauncher_path() {
    const juliaup_bindir = get_juliaup_bindir()
    const juliaup_path = path.join(juliaup_bindir, 'julia')
    return juliaup_path
}

function get_juliaup_bindir() {
    const platform = os.platform()
    if (platform === 'win32') {
        var juliaup_bindir = _windows_get_juliaup_bindir()
    } else {
        var juliaup_bindir = _unix_get_juliaup_bindir()
    }
    return juliaup_bindir
}

function _windows_get_juliaup_bindir() {
    // On Windows, we assume that winget will take care of automatically
    // adding Juliaup to the PATH.
    //
    // So, in this function, we actually lookup `which juliaup`, assuming
    // that winget already added Juliaup to the PATH.
    // Then we take the result of `which juliaup` and extract the directory
    // name.
    const resolved_juliaup_path = which.sync('juliaup') // no need for await here
    const juliaup_bindir = path.dirname(resolved_juliaup_path)
    return juliaup_bindir
    // const resolved = which.sync('node')
}

function _unix_get_juliaup_bindir() {
    const userHomeDir = os.homedir();
    // TODO: look at JULIAUP_DEPOT_PATH here?
    const juliaup_bindir = path.join(userHomeDir, '.juliaup', 'bin');
    return juliaup_bindir
}

async function add_juliaup_bindir_to_path() {
    const platform = os.platform()
    if (platform === 'win32') {
        await _windows_add_juliaup_to_path()
    } else {
        await _unix_add_juliaup_to_path()
    }
    return
}

async function _windows_add_juliaup_to_path() {
    // On Windows, we assume that winget will take care of automatically
    // adding Juliaup to the PATH. So we don't do anything ourselves.
    return
}

async function _unix_add_juliaup_to_path() {
    const juliaup_bindir = _unix_get_juliaup_bindir()

    // Add to the PATH
    await core.addPath(juliaup_bindir)

    return
}

async function print_debugging_juliaup_path() {
    const resolved_juliaup_path = get_juliaup_path()
    console.log(`juliaup: ${resolved_juliaup_path}`)
    await exec.exec(get_juliaup_path(), ['--version'])
    return
}

async function print_debugging_julialauncher_path() {
    const resolved_julialauncher_path = get_julialauncher_path()
    console.log(`julia: ${resolved_julialauncher_path}`)
    await exec.exec(get_julialauncher_path(), ['--version'])
    return
}

export async function main() {
    // Step 1: Make sure all required inputs are provided.
    input.get_julia_version_input()

    // Step 2: Ensure that Juliaup is installed.
    // This step depends on the operating system.
    await ensure_juliaup_is_installed()

    // Step 3: Print the path of `juliaup`:
    await print_debugging_juliaup_path()


    // Step 4: Install the Julia desired version, and set it as the default.
    await install_desired_julia_version()

    // Step 5: Print the path of `julia` (julialauncher):
    await print_debugging_julialauncher_path()

    // Step 6: Add Juliaup and Julialauncher to the PATH,
    // using the GitHub Actions toolkit.
    //
    // This will not take affect until the next step in the job.
    // (In other words, the changes to the PATH don't show up in this action.)
    await add_juliaup_bindir_to_path()

    return
}

/* eslint-disable no-alert, require-yield */
