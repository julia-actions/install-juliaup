// Built into NodeJS
import * as os from 'os'
import * as path from 'path'

export function get_juliaup(info: { juliaup_dir: string}) {
    if (os.platform() === 'win32') {
        var juliaup_exename = 'juliaup.exe'
    } else {
        var juliaup_exename = 'juliaup'
    }
    const juliaup = path.join(info.juliaup_dir, juliaup_exename)
    return juliaup
}

export function get_julialauncher(info: { juliaup_dir: string}) {
    if (os.platform() === 'win32') {
        var julialauncher_exename = 'julia.exe'
    } else {
        var julialauncher_exename = 'julia'
    }
    const julia = path.join(info.juliaup_dir, julialauncher_exename)
    return julia
}

export function get_platform_triplet() {
    const operating_system = os.platform();
    const arch = process.arch
    if (operating_system === 'win32') {
        if (arch === 'x64') {
            var triplet = 'x86_64-pc-windows-gnu'
        } else {
            throw new Error(`We do not support the \"${arch}\" arch on the \"${operating_system}\" OS`)
        }
    } else if (operating_system === 'linux') {
        if (arch === 'x64') {
            var triplet = 'x86_64-unknown-linux-musl'
        } else {
            throw new Error(`We do not support the \"${arch}\" arch on the \"${operating_system}\" OS`)
        }
    } else if (operating_system === 'darwin') {
        if (arch === 'x64') {
            var triplet = 'x86_64-apple-darwin'
        } else if (arch === 'arm64') {
            var triplet = 'aarch64-apple-darwin'
        } else {
            throw new Error(`We do not support the \"${arch}\" arch on the \"${operating_system}\" OS`)
        }
    } else {
        throw new Error(`Unknown operating system: ${operating_system}`)
    }
    return triplet
}
