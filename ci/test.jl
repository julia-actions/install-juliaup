import Test

using Test: @testset, @test, @test_skip

function get_expected_exename()
    if Sys.iswindows()
        exename = "julia.exe"
    else
        exename = "julia"
    end
    return exename
end

function get_expected_platform()
    if Sys.iswindows()
        platform = "x64.w64.mingw32"
    elseif Sys.islinux()
        platform = "x64.linux.gnu"
    elseif Sys.isapple()
        if Sys.ARCH == :x86_64 # Intel
            platform = "x64.apple.darwin14"
        elseif Sys.ARCH == :aarch64 # Apple Silicon
            platform = "aarch64.apple.darwin14"
        else
            error("[Apple/Darwin] Unknown arch `$(Sys.ARCH)` on operating system `$(Sys.MACHINE)`")
        end
    else
        error("Unsupported operating system: $(Sys.MACHINE)")
    end
    return platform
end

function get_expected_path(; EXPECTED_VERSION)
    expected_exename = get_expected_exename()
    expected_platform = get_expected_platform()

    expected_path = joinpath(
        homedir(),
        ".julia",
        "juliaup",
        "julia-$(EXPECTED_VERSION)+0.$(expected_platform)",
        "bin",
        expected_exename,
    )

    return expected_path
end

@testset begin
    observed_julia_cmd = Base.julia_cmd()
    observed_path = observed_julia_cmd.exec[1]

    EXPECTED_VERSION = strip(ENV["EXPECTED_JULIA_VERSION_FOR_TESTS"])
    expected_path = get_expected_path(; EXPECTED_VERSION)

    @test_skip observed_path == expected_path
end
