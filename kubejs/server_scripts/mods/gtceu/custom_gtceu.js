ServerEvents.recipes(event => {

    event.recipes.gtceu.electrolyzer("dolomite_decomposition")
        .itemInputs("10x gtceu:dolomite_dust")
        .itemOutputs(
            "gtceu:calcium_dust",
            "gtceu:magnesium_dust",
            "2x gtceu:carbon_dust"
        )
        .outputFluids(Fluid.of("gtceu:oxygen", 6000))
        .duration(180)
        .EUt(60)
})