// npm packages that are part of the GitHub Actions toolkit
import * as core from '@actions/core'
// import * as exec from '@actions/exec'
import * as tc from '@actions/tool-cache'

// Other npm packages
import retry = require('async-retry')

// Our own source code files
import * as inputs from './inputs'
import * as platform from './platform'

export async function ensure_juliaup_is_installed() {
    // 1. Determine which version of Juliaup to use.
    const juliaup_version = await _get_latest_juliaup_version()

    let juliaup_dir: string;

    // 2. Search the toolcache to see if the desired version of Juliaup already exists.
    const arch = process.arch
    const tool_name = 'juliaup'
    juliaup_dir = tc.find(tool_name, juliaup_version, arch)
    // await _install_juliaup()

    // 3. If it wasn't found in the toolcache, we have to download it ourselves.
    if (!juliaup_dir) {
        // Download and extract Juliaup to a temp directory:
        const extracted_download_path = await download_and_extract_juliaup_to_temp_dir(juliaup_version)

        // Copy Juliaup from the temp directory to the toolcache:
        juliaup_dir = await tc.cacheDir(extracted_download_path, tool_name, juliaup_version, arch)
        core.info(`Added Juliaup to the toolcache: ${juliaup_dir}`)
    } else {
        // If we found the desired version of Juliaup in the toolcache,
        // then we use that.
        core.info(`Using existing tool-cached version of Juliaup: ${juliaup_dir}`)
    }

    // 4. Add Juliaup (and thus also Julialauncher) to the PATH.
    await core.addPath(juliaup_dir)

    const info = {
        juliaup_dir
    }

    return info
}

// TODO: if the user passes `latest` get the correct value automatically:
async function _get_latest_juliaup_version() {
    const version = inputs.get_juliaup_version_input()
    return version
}

// This function downloads and extracts Juliaup to a temp directory.
// It does NOT add Juliaup to the toolcache.
async function download_and_extract_juliaup_to_temp_dir(juliaup_version: string) {
    // 1. Construct the Juliaup tarball download URL.
    const tarball_download_url = await _construct_juliaup_tarball_download_url(juliaup_version)
    core.info(`Attempting to download Juliaup from: ${tarball_download_url}`)

    // 2. Download the Juliaup tarball (from the above URL) to a temp directory.
    // Taken from: https://github.com/julia-actions/setup-julia/blob/e9d953d306cac42c94058f27c6564ec50d97d913/src/installer.ts#L216-L225
    //
    // Occasionally the connection is reset for unknown reasons.
    // In those cases, retry the download.
    const tarball_download_path = await retry(async (bail: Function) => {
        return await tc.downloadTool(tarball_download_url)
    }, {
        retries: 5,
        onRetry: (err: Error) => {
            core.info(`Download of ${tarball_download_url} failed, trying again. Error: ${err}`)
        }
    })

    // 3. Extract the downloaded Juliaup tarball to a temp directory.
    // Extract the Juliaup tarball to a temp directory:
    const extracted_download_path = await tc.extractTar(tarball_download_path)

    return extracted_download_path
}

async function _construct_juliaup_tarball_download_url(juliaup_version: string) {
    const triplet = platform.get_platform_triplet()
    const url = `https://github.com/JuliaLang/juliaup/releases/download/v${juliaup_version}/juliaup-${juliaup_version}-${triplet}-portable.tar.gz`
    return url
}
