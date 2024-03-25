"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._windows_install_juliaup = void 0;
// npm packages that are part of the GitHub Actions toolkit
const core = __importStar(require("@actions/core"));
const tc = __importStar(require("@actions/tool-cache"));
// Other npm packages
const retry = require("async-retry");
// TODO: get the correct value automatically:
async function _get_latest_juliaup_version() {
    return '1.14.7';
}
// Windows: Install Juliaup.
async function _windows_install_juliaup() {
    const juliaup_version = await _get_latest_juliaup_version();
    const platform = 'x86_64-pc-windows';
    const tarball_download_url = `https://github.com/JuliaLang/juliaup/releases/download/v${juliaup_version}/juliaup-${juliaup_version}-${platform}-gnu-portable.tar.gz`;
    core.info(`We will download Juliaup from: ${tarball_download_url}`);
    // Taken from: https://github.com/julia-actions/setup-julia/blob/e9d953d306cac42c94058f27c6564ec50d97d913/src/installer.ts#L216-L225
    //
    // Occasionally the connection is reset for unknown reasons.
    // In those cases, retry the download.
    const tarball_download_path = await retry(async (bail) => {
        return await tc.downloadTool(tarball_download_url);
    }, {
        retries: 5,
        onRetry: (err) => {
            core.info(`Download of ${tarball_download_url} failed, trying again. Error: ${err}`);
        }
    });
    // Extract the Juliaup tarball to a temp directory:
    const extracted_download_path = await tc.extractTar(tarball_download_path);
    // Copy Juliaup from the temp directory to the GitHub Tool Cache:
    const arch = process.env.RUNNER_ARCH;
    const juliaup = await tc.cacheDir(extracted_download_path, 'juliaup', juliaup_version, arch);
    throw new Error(`TODO: finish implementing this`);
    return;
}
exports._windows_install_juliaup = _windows_install_juliaup;
//# sourceMappingURL=download.js.map