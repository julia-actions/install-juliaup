# Repository Guidelines

## Project Structure & Module Organization

Core source lives in `src/` and is compiled to `lib/` with TypeScript. The GitHub Action bundle checked into releases is `dist/index.js`, generated with `ncc`. Repository metadata and runtime inputs are defined in `action.yml`. CI and integration validation live in `.github/workflows/` and `ci/test.jl`. Helper scripts are under `bin/`, and contributor notes are in `devdocs/`.

Treat `lib/` and `dist/` as generated outputs: when behavior changes in `src/`, rebuild and commit the updated artifacts.

## Build, Test, and Development Commands

Use the `Makefile` wrappers documented in `devdocs/local_setup.md`:

- `make mise-install`: install the pinned Node.js version from `.tool-versions`.
- `make install-packages`: install dependencies with `npm ci`.
- `make build`: compile TypeScript from `src/` to `lib/`.
- `make pack`: bundle the action into `dist/index.js`.
- `make everything-from-scratch`: clean, reinstall, build, pack, and clean again.
- `make clean` / `make cleanall`: remove `node_modules/`, then also `lib/` and `dist/`.

## Coding Style & Naming Conventions

This project uses TypeScript with strict compiler settings from `tsconfig.json` and ESLint via `.eslintrc.cjs`. Follow the existing style: 4-space indentation, LF line endings, and simple module-level functions. Source files use lowercase names such as `juliaup.ts` and `platform.ts`; many internal helpers use snake_case names to match the current codebase.

If you run linting manually, use `npx eslint .`. Prefer small, direct functions over abstractions.

## Testing Guidelines

CI currently emphasizes build correctness and end-to-end validation. The main integration check is `julia ci/test.jl`, run after the local action installs Julia on the GitHub runner. If you add TypeScript unit tests, place them beside the source or in a matching test location with names ending in `*.test.ts`; Jest is already configured in `package.json`, so `npx jest --coverage` will pick them up.

Before opening a PR, run at least `make build` and `make pack`, then confirm there are no unintended diffs.

## Commit & Pull Request Guidelines

Recent history favors short, imperative commit subjects, for example `Update README to reflect...`. Keep commits focused and descriptive.

Whenever an AI tool such as OpenAI Codex or Anthropic Claude Code creates a commit, it must add itself as a co-author by including a `Co-authored-by:` trailer in the commit message.

Whenever an AI tool such as OpenAI Codex or Anthropic Claude Code writes a pull request body or opens a pull request, the pull request body must mention the AI tool as a co-author of the pull request.

PRs should explain the user-visible change, link any related issue, and note how you validated the update. For source changes, include regenerated `lib/` and `dist/` files so CI’s checked-in-files job stays green.
