"use strict";
// npm packages that are part of the GitHub Actions toolkit:
// See dynamic imports below
// await import('@actions/core');
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_juliaup_channel_input = get_juliaup_channel_input;
exports.get_juliaup_version_input = get_juliaup_version_input;
exports.isNonEmptyString = isNonEmptyString;
async function get_juliaup_channel_input() {
    // Dynamic imports:
    // npm packages that are part of the GitHub Actions toolkit
    const { getInput: core_getInput } = await import('@actions/core');
    const input_name = 'channel';
    const original_input = core_getInput(input_name);
    const trimmed_input = original_input.trim();
    if (trimmed_input != original_input) {
        throw new Error(`The ${input_name} input is not allowed to begin or end with whitespace: ${original_input}`);
    }
    if (!isNonEmptyString(trimmed_input)) {
        throw new Error(`You must specify a value for the ${input_name} input`);
    }
    return trimmed_input;
}
async function get_juliaup_version_input() {
    // Dynamic imports:
    // npm packages that are part of the GitHub Actions toolkit
    const { getInput: core_getInput } = await import('@actions/core');
    const input_name = 'internal-juliaup-version';
    const original_input = core_getInput(input_name);
    const trimmed_input = original_input.trim();
    if (trimmed_input != original_input) {
        throw new Error(`The ${input_name} input is not allowed to begin or end with whitespace: ${original_input}`);
    }
    if (!isNonEmptyString(trimmed_input)) {
        throw new Error(`You must specify a value for the ${input_name} input`);
    }
    return trimmed_input;
}
function isNonEmptyString(str) {
    const result = str && str.length > 0;
    return result;
}
//# sourceMappingURL=inputs.js.map