"use strict";
// npm packages that are part of the GitHub Actions toolkit:
// See dynamic imports below
// await import('@actions/core');
// await import('@actions/tool-cache');
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensure_juliaup_is_installed = ensure_juliaup_is_installed;
// Other npm packages
const retry = require("async-retry");
// Our own source code files
const inputs = __importStar(require("./inputs"));
const platform = __importStar(require("./platform"));
async function ensure_juliaup_is_installed() {
    // Dynamic imports:
    // npm packages that are part of the GitHub Actions toolkit
    const { info: core_info, addPath: core_addPath } = await import('@actions/core');
    const { find: tc_find, cacheDir: tc_cacheDir } = await import('@actions/tool-cache');
    // 1. Determine which version of Juliaup to use.
    const juliaup_version = await _get_latest_juliaup_version();
    let juliaup_dir;
    // 2. Search the toolcache to see if the desired version of Juliaup already exists.
    const arch = process.arch;
    const tool_name = 'juliaup';
    juliaup_dir = tc_find(tool_name, juliaup_version, arch);
    // await _install_juliaup()
    // 3. If it wasn't found in the toolcache, we have to download it ourselves.
    if (!juliaup_dir) {
        // Download and extract Juliaup to a temp directory:
        const extracted_download_path = await download_and_extract_juliaup_to_temp_dir(juliaup_version);
        // Copy Juliaup from the temp directory to the toolcache:
        juliaup_dir = await tc_cacheDir(extracted_download_path, tool_name, juliaup_version, arch);
        core_info(`Added Juliaup to the toolcache: ${juliaup_dir}`);
    }
    else {
        // If we found the desired version of Juliaup in the toolcache,
        // then we use that.
        core_info(`Using existing tool-cached version of Juliaup: ${juliaup_dir}`);
    }
    // 4. Add Juliaup (and thus also Julialauncher) to the PATH.
    await core_addPath(juliaup_dir);
    const info_object = {
        juliaup_dir
    };
    return info_object;
}
// TODO: if the user passes `latest` get the correct value automatically:
async function _get_latest_juliaup_version() {
    const version = await inputs.get_juliaup_version_input();
    return version;
}
// This function downloads and extracts Juliaup to a temp directory.
// It does NOT add Juliaup to the toolcache.
async function download_and_extract_juliaup_to_temp_dir(juliaup_version) {
    // Dynamic imports:
    // npm packages that are part of the GitHub Actions toolkit
    const { info: core_info } = await import('@actions/core');
    const { downloadTool: tc_downloadTool, extractTar: tc_extractTar } = await import('@actions/tool-cache');
    // 1. Construct the Juliaup tarball download URL.
    const tarball_download_url = await _construct_juliaup_tarball_download_url(juliaup_version);
    core_info(`Attempting to download Juliaup from: ${tarball_download_url}`);
    // 2. Download the Juliaup tarball (from the above URL) to a temp directory.
    // Taken from: https://github.com/julia-actions/setup-julia/blob/e9d953d306cac42c94058f27c6564ec50d97d913/src/installer.ts#L216-L225
    //
    // Occasionally the connection is reset for unknown reasons.
    // In those cases, retry the download.
    const tarball_download_path = await retry(async (bail) => {
        return await tc_downloadTool(tarball_download_url);
    }, {
        retries: 5,
        onRetry: (err) => {
            core_info(`Download of ${tarball_download_url} failed, trying again. Error: ${err}`);
        }
    });
    // 3. Extract the downloaded Juliaup tarball to a temp directory.
    // Extract the Juliaup tarball to a temp directory:
    const extracted_download_path = await tc_extractTar(tarball_download_path);
    return extracted_download_path;
}
async function _construct_juliaup_tarball_download_url(juliaup_version) {
    const triplet = platform.get_platform_triplet();
    const url = `https://github.com/JuliaLang/juliaup/releases/download/v${juliaup_version}/juliaup-${juliaup_version}-${triplet}-portable.tar.gz`;
    return url;
}
//# sourceMappingURL=juliaup.js.map