# `install-juliaup`

GitHub Action to install `juliaup`.

When you use this action, it will do three things:

1. Make sure that `juliaup` is available (downloading it if necessary).
2. Use `juliaup` to install the specified version of Julia.
3. Add both `juliaup` and `julia` to the PATH.

## Usage

### Examples

To install the latest stable Julia v1:

```yaml
- uses: julia-actions/install-juliaup@v2
  with:
    channel: '1'

# Your selected Julia version is now available in the PATH:
- run: julia --version
```

To install a specific Julia version:

```yaml
- uses: julia-actions/install-juliaup@v2
  with:
    channel: '1.10.2'
```

In general, if `juliaup add FOO` would have been a valid command on your local machine, then `FOO` is a valid value for the `channel` input to this action.

So, for example, suppose that you want alpha pre-releases for the next upcoming release. On your local machine, `juliaup add alpha` is a valid command. Therefore, `alpha` is a valid value for the `channel` input to this action:

```yaml
- uses: julia-actions/install-juliaup@v2
  with:
    channel: 'alpha'
```

See the [Juliaup README](https://github.com/JuliaLang/juliaup/blob/main/README.md#using-juliaup) for more examples.

### Job matrices

For example, suppose that your GitHub Actions workflow file includes a job matrix as such:

```yaml
strategy:
  matrix:
    juliaup_channel:
      - 'lts'
      - '1.10'
      - '1'
      - 'nightly'
```

Then `install-juliaup` can use this job matrix as follows:

```yaml
- uses: julia-actions/install-juliaup@v2
  with:
    channel: ${{ matrix.juliaup_channel }}
```

### Calling `juliaup` directly

When the `install-juliaup` action runs, it adds `juliaup` to the PATH. Therefore, in subsequent steps, you can directly run `juliaup` commands if you want:

```yaml
- uses: julia-actions/install-juliaup@v2
  with:
    channel: '1'

- run: juliaup status
- run: juliaup add 1.10
- run: juliaup update 1.10
- run: juliaup default 1.10
- run: juliaup status
```

## Using Dependabot version updates to keep your GitHub Actions up to date

We highly recommend that you set up Dependabot version updates on your repo to keep your GitHub Actions up to date.

To set up Dependabot version updates, create a file named `.github/dependabot.yml` in your repo with the following contents:

```yaml
version: 2
updates:
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "monthly"
    open-pull-requests-limit: 99
    labels:
      - "dependencies"
      - "github-actions"
```

For more details on Dependabot version updates, see the [GitHub Dependabot documentation](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates).

## Private internals

The `internal-juliaup-version` input is a private internal and is not part of the public API of this action. Therefore, in a future non-breaking (minor or patch) release of this action, we are allowed to:
1. Rename the input.
2. Remove the input altogether.
3. Change the default value of the input.
4. Make any other changes to the behavior of the input.
