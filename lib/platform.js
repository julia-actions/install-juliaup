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
exports.get_platform_triplet = exports.get_julialauncher = exports.get_juliaup = void 0;
// Built into NodeJS
const os = __importStar(require("os"));
const path = __importStar(require("path"));
function get_juliaup(info) {
    if (os.platform() === 'win32') {
        var juliaup_exename = 'juliaup.exe';
    }
    else {
        var juliaup_exename = 'juliaup';
    }
    const juliaup = path.join(info.juliaup_dir, juliaup_exename);
    return juliaup;
}
exports.get_juliaup = get_juliaup;
function get_julialauncher(info) {
    if (os.platform() === 'win32') {
        var julialauncher_exename = 'julia.exe';
    }
    else {
        var julialauncher_exename = 'julia';
    }
    const julia = path.join(info.juliaup_dir, julialauncher_exename);
    return julia;
}
exports.get_julialauncher = get_julialauncher;
function get_platform_triplet() {
    const operating_system = os.platform();
    const arch = process.arch;
    if (operating_system === 'win32') {
        if (arch === 'x64') {
            var triplet = 'x86_64-pc-windows-gnu';
        }
        else {
            throw new Error(`We do not support the \"${arch}\" arch on the \"${operating_system}\" OS`);
        }
    }
    else if (operating_system === 'linux') {
        if (arch === 'x64') {
            var triplet = 'x86_64-unknown-linux-musl';
        }
        else if (arch === 'arm64') {
            var triplet = 'aarch64-unknown-linux-musl';
        }
        else {
            throw new Error(`We do not support the \"${arch}\" arch on the \"${operating_system}\" OS`);
        }
    }
    else if (operating_system === 'darwin') {
        if (arch === 'x64') {
            var triplet = 'x86_64-apple-darwin';
        }
        else if (arch === 'arm64') {
            var triplet = 'aarch64-apple-darwin';
        }
        else {
            throw new Error(`We do not support the \"${arch}\" arch on the \"${operating_system}\" OS`);
        }
    }
    else {
        throw new Error(`Unknown operating system: ${operating_system}`);
    }
    return triplet;
}
exports.get_platform_triplet = get_platform_triplet;
//# sourceMappingURL=platform.js.map