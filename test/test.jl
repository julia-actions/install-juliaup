import Test

using Test: @testset, @test

@testset begin
    EXPECTED_VERSION = strip(ENV["EXPECTED_JULIA_VERSION_FOR_TESTS"])

    cmd = Base.julia_cmd()
    julia_path = cmd.exec[1]

    if Sys.iswindows()
        expected_prefix = "/helloworld" # TODO: fix this line
    elseif Sys.isapple()
        if Sys.ARCH == :x86_64 # Intel
            platform = "x64.apple.darwin14"
        elseif Sys.ARCH == :aarch64 # Apple Silicon
            platform = "aarch64.apple.darwin14"
        else
            error("[Apple/Darwin] Unknown arch `$(Sys.ARCH)` on operating system `$(Sys.MACHINE)`")
        end
        expected_prefix = "$(homedir())/.julia/juliaup/julia-$(EXPECTED_VERSION)+0.$(platform)/bin/julia"
    elseif Sys.islinux()
        platform = "x64.linux.gnu"
        expected_prefix = "$(homedir())/.julia/juliaup/julia-$(EXPECTED_VERSION)+0.$(platform)/bin/julia"

    else
        error("Unsupported operating system: $(Sys.MACHINE)")
    end
    @test startswith(julia_path, expected_prefix)
end
