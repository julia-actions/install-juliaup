// npm packages that are part of the GitHub Actions toolkit
import * as core from '@actions/core'
import * as tc from '@actions/tool-cache'

// Other npm packages
import retry = require('async-retry')

// TODO: get the correct value automatically:
async function _get_latest_juliaup_version() {
    return '1.14.7'
}

// Windows: Install Juliaup.
export async function _windows_install_juliaup() {
    const juliaup_version = await _get_latest_juliaup_version()
    const platform = 'x86_64-pc-windows'

    const tarball_download_url = `https://github.com/JuliaLang/juliaup/releases/download/v${juliaup_version}/juliaup-${juliaup_version}-${platform}-gnu-portable.tar.gz`

    core.info(`We will download Juliaup from: ${tarball_download_url}`)

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

    // Extract the Juliaup tarball to a temp directory:
    const extracted_download_path = await tc.extractTar(tarball_download_path)

    // Copy Juliaup from the temp directory to the GitHub Tool Cache:
    const arch = process.env.RUNNER_ARCH
    const juliaup = await tc.cacheDir(extracted_download_path, 'juliaup', juliaup_version, arch)

    throw new Error(`TODO: finish implementing this`)

    return
}
