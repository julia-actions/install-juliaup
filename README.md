# `install-juliaup`

GitHub Action to install `juliaup`.

When you use this action, it will do three things:

1. Make sure that `juliaup` is available (downloading if if necessary).
2. Use `juliaup` to install the specified version of Julia.
3. Add both `juliaup` and `julia` to the PATH.

## Usage

### Examples

To install the latest stable Julia v1:

```yaml
- uses: julia-actions/install-juliaup@v1
  with:
    julia-version: '1'
```

To install a specific Julia version:

```yaml
- uses: julia-actions/install-juliaup@v1
  with:
    julia-version: '1.10.2'
```

In general, if `juliaup add FOO` would have been a valid command on your local machine, then `FOO` is a valid value for the `julia-version` input to this action.

So, for example, suppose that you want alpha pre-releases for the next upcoming release. On your local machine, `juliaup add alpha` is a valid command. Therefore, `alpha` is a valid value for the `julia-version` input to this action:

```yaml
- uses: julia-actions/install-juliaup@v1
  with:
    julia-version: 'alpha'
```

See the [Juliaup README](https://github.com/JuliaLang/juliaup/blob/main/README.md#using-juliaup) for more examples.

### Job matrices

For example, suppose that your GitHub Actions workflow file includes a job matrix as such:

```yaml
strategy:
  matrix:
    julia-version:
      - 'lts'
      - '1.10'
      - '1'
      - 'nightly'
```

Then `install-juliaup` can use this job matrix as follows:

```yaml
- uses: julia-actions/install-juliaup@v1
  with:
    julia-version: ${{ matrix.julia-version }}
```

### Calling `juliaup` directly

When the `install-juliaup` action runs, it adds `juliaup` to the PATH. Therefore, in subsequent steps, you can directly run `juliaup` commands if you want:

```yaml
- uses: julia-actions/install-juliaup@v1
  with:
    julia-version: '1'

- run: juliaup status
- run: juliaup add 1.10
- run: juliaup update 1.10
- run: juliaup default 1.10
- run: juliaup status
```

## Private internals

The `internal-juliaup-version` input is a private internal and is not part of the public API of this action. Therefore, in a future non-breaking (minor or patch) release of this action, we are allowed to:
1. Rename the input.
2. Remove the input altogether.
3. Change the default value of the input.
4. Make any other changes to the behavior of the input.
