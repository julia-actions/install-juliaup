// npm packages that are part of the GitHub Actions toolkit
import * as core from '@actions/core'

export function get_julia_version_input() {
    const original_version_input = core.getInput('julia-version')
    const version = original_version_input.trim()

    if (version != original_version_input) {
        throw new Error(`Version input is not allowed to begin or end with whitespace: ${original_version_input}`)
    }
    if (!isNonEmptyString(version)) {
        throw new Error(`You must specify a value for the version input`)
    }
    return version
}

export function get_juliaup_version_input() {
    const original_version_input = core.getInput('juliaup-version')
    const version = original_version_input.trim()

    if (version != original_version_input) {
        throw new Error(`Version input is not allowed to begin or end with whitespace: ${original_version_input}`)
    }
    if (!isNonEmptyString(version)) {
        throw new Error(`You must specify a value for the version input`)
    }
    return version
}

export function isNonEmptyString(str: string) {
    const result = str && str.length > 0;
    return result
}
