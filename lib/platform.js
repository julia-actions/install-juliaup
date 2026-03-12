// Built into NodeJS
import * as os from 'os';
import * as path from 'path';
export function get_juliaup(info) {
    const juliaup_exename = os.platform() === 'win32' ? 'juliaup.exe' : 'juliaup';
    const juliaup = path.join(info.juliaup_dir, juliaup_exename);
    return juliaup;
}
export function get_julialauncher(info) {
    const julialauncher_exename = os.platform() === 'win32' ? 'julia.exe' : 'julia';
    const julia = path.join(info.juliaup_dir, julialauncher_exename);
    return julia;
}
export function get_platform_triplet() {
    const operating_system = os.platform();
    const arch = process.arch;
    let triplet;
    if (operating_system === 'win32') {
        if (arch === 'x64') {
            triplet = 'x86_64-pc-windows-gnu';
        }
        else {
            throw new Error(`We do not support the "${arch}" arch on the "${operating_system}" OS`);
        }
    }
    else if (operating_system === 'linux') {
        if (arch === 'x64') {
            triplet = 'x86_64-unknown-linux-musl';
        }
        else if (arch === 'arm64') {
            triplet = 'aarch64-unknown-linux-musl';
        }
        else {
            throw new Error(`We do not support the "${arch}" arch on the "${operating_system}" OS`);
        }
    }
    else if (operating_system === 'darwin') {
        if (arch === 'x64') {
            triplet = 'x86_64-apple-darwin';
        }
        else if (arch === 'arm64') {
            triplet = 'aarch64-apple-darwin';
        }
        else {
            throw new Error(`We do not support the "${arch}" arch on the "${operating_system}" OS`);
        }
    }
    else {
        throw new Error(`Unknown operating system: ${operating_system}`);
    }
    return triplet;
}
//# sourceMappingURL=platform.js.map