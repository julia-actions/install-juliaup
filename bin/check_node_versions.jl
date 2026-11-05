function jq(filter::String, file::String)
    return convert(String, readchomp(`jq -r $(filter) $(file)`))::String
end

# Returns the first capture group of `regex` in `str`, or `nothing` if there is no match.
function capture(regex::Regex, str::String)
    m = match(regex, str)
    return m === nothing ? nothing : m[1]
end

const majors = [
    "action.yml (runs.using)" => capture(r"^\s*using:\s*'?node(\d+)'?\s*$"m, read("action.yml", String)),
    ".tool-versions (nodejs)" => capture(r"^nodejs (\d+)\."m, read(".tool-versions", String)),
    "package.json (engines.node)" => capture(r"^>=(\d+)\.", jq(".engines.node", "package.json")),
    "package.json (@types/node)" => capture(r"^[~^]?(\d+)\.", jq(""".devDependencies["@types/node"]""", "package.json")),
    "package-lock.json (@types/node)" => capture(r"^(\d+)\.", jq(""".packages["node_modules/@types/node"].version""", "package-lock.json")),
]

for (source, major) in majors
    println(rpad(source, 36), something(major, "(not found)"))
end

if any(isnothing, last.(majors)) || length(unique(last.(majors))) != 1
    msg = "##[error] the Node.js major versions are not all the same. " *
          "Please make sure that they all match the Node.js runtime in `action.yml`."
    println(stderr, msg)
    exit(1)
end
