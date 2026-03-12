# Repository Guidelines

## Project Structure & Module Organization

Core source lives in `src/` and is compiled to `lib/` with TypeScript. The GitHub Action bundle checked into releases is `dist/index.cjs`, generated with `tsup`. Repository metadata and runtime inputs are defined in `action.yml`. CI and integration validation live in `.github/workflows/` and `ci/test.jl`. Helper scripts are under `bin/`, and contributor notes are in `devdocs/`.

Treat `lib/` and `dist/` as generated outputs: when behavior changes in `src/`, rebuild and commit the updated artifacts. The action bundle must remain a single self-contained `dist/index.cjs`; if you touch the bundler config, verify runtime dependencies are not being externalized into separate files.

## Build, Test, and Development Commands

Use the `Makefile` wrappers documented in `devdocs/local_setup.md`:

- `make mise-install`: install the pinned Node.js version from `.tool-versions`.
- `make install-packages`: install dependencies with `npm ci`.
- `make build`: compile TypeScript from `src/` to `lib/`.
- `make pack`: bundle the action into `dist/index.cjs`.
- `make everything-from-scratch`: clean, reinstall, build, pack, and clean again.
- `make clean` / `make cleanall`: remove `node_modules/`, then also `lib/` and `dist/`.

## Coding Style & Naming Conventions

This project uses TypeScript with strict compiler settings from `tsconfig.json` and ESLint via `eslint.config.js`. Follow the existing style: 4-space indentation, LF line endings, and simple module-level functions. Source files use lowercase names such as `juliaup.ts` and `platform.ts`; many internal helpers use snake_case names to match the current codebase.

This repo uses ESM with `moduleResolution: "NodeNext"`. Local TypeScript imports in `src/` should use explicit `.js` extensions, and `tsconfig.json` should keep compilation scoped to `src/` so tool configs do not leak into `lib/`.

If you run linting manually, use `npm run lint`. Prefer small, direct functions over abstractions.

## Testing Guidelines

CI currently emphasizes build correctness and end-to-end validation. The main integration check is `julia ci/test.jl`, run after the local action installs Julia on the GitHub runner. If you add TypeScript unit tests, place them beside the source or in a matching test location with names ending in `*.test.ts`, and document any new test runner setup in `package.json` and this file.

Before opening a PR, run at least `npm run lint`, `make build`, and `make pack`, then confirm there are no unintended diffs.

## Commit & Pull Request Guidelines

Use imperative commit subjects, for example `Update README to reflect...`. Keep commits focused and descriptive. When a change touches both source/configuration and generated outputs, prefer separate commits so reviewers can inspect the handwritten changes without diff noise from `lib/` and `dist/`.

Whenever an AI tool such as OpenAI Codex or Anthropic Claude Code creates a commit, it must add itself as a co-author by including a `Co-authored-by:` trailer in the commit message.

Whenever an AI tool such as OpenAI Codex or Anthropic Claude Code writes a pull request body or opens a pull request, the pull request body must mention the AI tool as a co-author of the pull request.

When using `gh` to open or edit PRs, prefer `--body-file` over inline `--body` strings so Markdown backticks and paths are not mangled by shell interpolation. If `gh pr edit` fails because the local token is missing scopes, use `gh api` against the pull request REST endpoint instead of leaving the PR metadata half-updated.

PRs should explain the user-visible change, link any related issue, and note how you validated the update. For source changes, include regenerated `lib/` and `dist/` files so CI’s checked-in-files job stays green.
