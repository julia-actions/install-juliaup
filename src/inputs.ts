// npm packages that are part of the GitHub Actions toolkit
import * as core from '@actions/core'

export function get_juliaup_channel_input() {
    const input_name = 'channel'
    const original_input = core.getInput(input_name)
    const trimmed_input = original_input.trim()

    if (trimmed_input != original_input) {
        throw new Error(`The ${input_name} input is not allowed to begin or end with whitespace: ${original_input}`)
    }
    if (!isNonEmptyString(trimmed_input)) {
        throw new Error(`You must specify a value for the ${input_name} input`)
    }
    return trimmed_input
}

export function get_juliaup_version_input() {
    const input_name = 'internal-juliaup-version'
    const original_input = core.getInput(input_name)
    const trimmed_input = original_input.trim()

    if (trimmed_input != original_input) {
        throw new Error(`The ${input_name} input is not allowed to begin or end with whitespace: ${original_input}`)
    }
    if (!isNonEmptyString(trimmed_input)) {
        throw new Error(`You must specify a value for the ${input_name} input`)
    }
    return trimmed_input
}

export function isNonEmptyString(str: string) {
    const result = str && str.length > 0;
    return result
}
