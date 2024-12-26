GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('mining_dim_stone')
        .targets('#minecraft:stone_ore_replaceables') // [*] 
        .dimensions('allthemodium:mining') // [*]

    event.create('mining_dim_deepslate')
        .targets('#minecraft:deepslate_ore_replaceables') // [*]
        .dimensions('allthemodium:mining') // [*]

    event.create('mining_dim_netherrack')
        .targets('#minecraft:nether_carver_replaceables') // [*]
        .dimensions('allthemodium:mining') // [*]

    event.create('mining_dim_endstone')
        .targets('#forge:end_stone_ore_replaceables') // [*]
        .dimensions('allthemodium:mining') // [*]
})