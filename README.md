# `install-juliaup`

GitHub Action to install `juliaup`.

When you use this action, it will do three things:

1. Make sure that `juliaup` is available (downloading if if necessary).
2. Use `juliaup` to install the specified version of Julia.
3. Add both `juliaup` and `julia` to the PATH.

## Example usage

To install the latest stable Julia v1:

```yaml
- uses: julia-actions/install-juliaup@latest
  with:
    julia-version: '1'
```

To install a specific Julia version:

```yaml
- uses: julia-actions/install-juliaup@latest
  with:
    julia-version: '1.10.2'
```

In general, if `juliaup add FOO` would have been a valid command on your local machine, then `FOO` is a valid value for the `julia-version` input to this action.

So, for example, suppose that you want alpha pre-releases for the next upcoming release. On your local machine, `juliaup add alpha` is a valid command. Therefore, `alpha` is a valid value for the `julia-version` input to this action:

```yaml
- uses: julia-actions/install-juliaup@latest
  with:
    julia-version: 'alpha'
```

See the [Juliaup README](https://github.com/JuliaLang/juliaup/blob/main/README.md#using-juliaup) for more examples.

## Private internals

The `juliaup-version` input is a private internal and is not part of the public API of this action. Therefore, in a future non-breaking (minor) release of this action, we are allowed to:
1. Rename the input.
2. Remove the input altogether.
3. Change the default value of the input.
4. Make any other changes to the behavior of the input.
