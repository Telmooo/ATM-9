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

    // Macerator

    event.recipes.gtceu.macerator('custom_macerate_end_aluminum_ore')
        .itemInputs('alltheores:end_aluminum_ore')
        .itemOutputs('4x gtceu:crushed_aluminium_ore')
        .chancedOutput('gtceu:bauxite_dust', 1400, 850)
        .chancedOutput('gtceu:endstone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_end_platinum_ore')
        .itemInputs('alltheores:end_platinum_ore')
        .itemOutputs('4x gtceu:crushed_platinum_ore')
        .chancedOutput('alltheores:nickel_dust', 1400, 850)
        .chancedOutput('gtceu:endstone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_end_lead_ore')
        .itemInputs('alltheores:end_lead_ore')
        .itemOutputs('4x gtceu:crushed_lead_ore')
        .chancedOutput('alltheores:silver_dust', 1400, 850)
        .chancedOutput('gtceu:endstone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_end_nickel_ore')
        .itemInputs('alltheores:end_nickel_ore')
        .itemOutputs('4x gtceu:crushed_nickel_ore')
        .chancedOutput('gtceu:cobalt_dust', 1400, 850)
        .chancedOutput('gtceu:endstone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_end_silver_ore')
        .itemInputs('alltheores:end_silver_ore')
        .itemOutputs('4x gtceu:crushed_silver_ore')
        .chancedOutput('alltheores:lead_dust', 1400, 850)
        .chancedOutput('gtceu:endstone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_end_tin_ore')
        .itemInputs('alltheores:end_tin_ore')
        .itemOutputs('4x gtceu:crushed_tin_ore')
        .chancedOutput('alltheores:iron_dust', 1400, 850)
        .chancedOutput('gtceu:endstone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_end_uranium_ore')
        .itemInputs('alltheores:end_uranium_ore')
        .itemOutputs('4x gtceu:crushed_uranium_ore')
        .chancedOutput('alltheores:uranium_dust', 1400, 850)
        .chancedOutput('gtceu:endstone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_nether_osmium_ore')
        .itemInputs('alltheores:nether_osmium_ore')
        .itemOutputs('4x gtceu:crushed_osmium_ore')
        .chancedOutput('alltheores:osmium_dust', 1400, 850)
        .chancedOutput('gtceu:netherrack_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_end_osmium_ore')
        .itemInputs('alltheores:end_osmium_ore')
        .itemOutputs('4x gtceu:crushed_osmium_ore')
        .chancedOutput('alltheores:osmium_dust', 1400, 850)
        .chancedOutput('gtceu:endstone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_deepslate_osmium_ore')
        .itemInputs('alltheores:deepslate_osmium_ore')
        .itemOutputs('2x gtceu:crushed_osmium_ore')
        .chancedOutput('alltheores:osmium_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_deepslate_lead_ore')
        .itemInputs('eidolon:deep_lead_ore')
        .itemOutputs('2x gtceu:crushed_lead_ore')
        .chancedOutput('alltheores:silver_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_deepslate_silver_ore')
        .itemInputs('eidolon:deep_silver_ore')
        .itemOutputs('2x gtceu:crushed_silver_ore')
        .chancedOutput('alltheores:lead_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_deepslate_fluorite_ore')
        .itemInputs('mekanism:deepslate_fluorite_ore')
        .itemOutputs('2x gtceu:crushed_fluorite_ore')
        .chancedOutput('gtceu:fluorite_gem', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_deepslate_aluminum_ore')
        .itemInputs('alltheores:deepslate_aluminum_ore')
        .itemOutputs('2x gtceu:crushed_aluminium_ore')
        .chancedOutput('gtceu:bauxite_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_thermal_sulfur_ore')
        .itemInputs('thermal:sulfur_ore')
        .itemOutputs('8x gtceu:crushed_sulfur_ore')
        .chancedOutput('gtceu:sulfur_dust', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_thermal_apatite_ore')
        .itemInputs('thermal:apatite_ore')
        .itemOutputs('8x gtceu:crushed_apatite_ore')
        .chancedOutput('gtceu:tricalcium_phosphate_dust', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_thermal_deepslate_apatite_ore')
        .itemInputs('thermal:deepslate_apatite_ore')
        .itemOutputs('8x gtceu:crushed_apatite_ore')
        .chancedOutput('gtceu:tricalcium_phosphate_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_immersive_bauxite_ore')
        .itemInputs('immersiveengineering:ore_aluminum')
        .itemOutputs('2x gtceu:crushed_bauxite_ore')
        .chancedOutput('gtceu:grossular_gem', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)
    
    event.recipes.gtceu.macerator('custom_macerate_thermal_cinnabar_ore')
        .itemInputs('thermal:cinnabar_ore')
        .itemOutputs('2x gtceu:crushed_cinnabar_ore')
        .chancedOutput('minecraft:redstone', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_thermal_deepslate_cinnabar_ore')
        .itemInputs('thermal:deepslate_cinnabar_ore')
        .itemOutputs('2x gtceu:crushed_cinnabar_ore')
        .chancedOutput('minecraft:redstone', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_thermal_deepslate_sulfur_ore')
        .itemInputs('thermal:deepslate_sulfur_ore')
        .itemOutputs('2x gtceu:crushed_sulfur_ore')
        .chancedOutput('gtceu:sulfur_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)
    
    event.recipes.gtceu.macerator('custom_macerate_railcraft_deepslate_sulfur_ore')
        .itemInputs('railcraft:deepslate_sulfur_ore')
        .itemOutputs('2x gtceu:crushed_sulfur_ore')
        .chancedOutput('gtceu:sulfur_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_powah_uraninite_ore')
        .itemInputs('powah:uraninite_ore')
        .itemOutputs('2x gtceu:crushed_uraninite_ore')
        .chancedOutput('gtceu:uraninite_dust', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_powah_uraninite_ore_dense')
        .itemInputs('powah:uraninite_ore_dense')
        .itemOutputs('4x gtceu:crushed_uraninite_ore')
        .chancedOutput('2x gtceu:uraninite_dust', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_powah_uraninite_ore_poor')
        .itemInputs('powah:uraninite_ore_poor')
        .itemOutputs('2x gtceu:crushed_uraninite_ore')
        .chancedOutput('gtceu:uraninite_dust', 700, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_powah_deepslate_uraninite_ore')
        .itemInputs('powah:deepslate_uraninite_ore')
        .itemOutputs('2x gtceu:crushed_uraninite_ore')
        .chancedOutput('gtceu:uraninite_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_powah_deepslate_uraninite_ore_dense')
        .itemInputs('powah:deepslate_uraninite_ore_dense')
        .itemOutputs('4x gtceu:crushed_uraninite_ore')
        .chancedOutput('2x gtceu:uraninite_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('custom_macerate_powah_deepslate_uraninite_ore_poor')
        .itemInputs('powah:deepslate_uraninite_ore_poor')
        .itemOutputs('2x gtceu:crushed_uraninite_ore')
        .chancedOutput('gtceu:uraninite_dust', 700, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)
})