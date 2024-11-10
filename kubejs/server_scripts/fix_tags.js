ServerEvents.tags("block", event => {
    
    [
        "projecte:mineable/morning_star",
        "immersiveengineering:mineable/drill",
        "minecraft:mineable/pickaxe",
        "forge:mineable/paxel",
        "minecraft:needs_stone_tool",
        "forge:mineable/aiot",
        "forcecraft:mineable_with_mitts",
        "cucumber:mineable/paxel",
        "allthemodium:paxel_effective",
        "projecte:mineable/hammer",
        "artifacts:mineable/digging_claws"
    ].forEach(tag => {
        event.add(tag, [
            "xtonesreworked:glaxx_block_0",
            "xtonesreworked:glaxx_block_1",
            "xtonesreworked:glaxx_block_2",
            "xtonesreworked:glaxx_block_3",
            "xtonesreworked:glaxx_block_4",
            "xtonesreworked:glaxx_block_5",
            "xtonesreworked:glaxx_block_6",
            "xtonesreworked:glaxx_block_7",
            "xtonesreworked:glaxx_block_8",
            "xtonesreworked:glaxx_block_9",
            "xtonesreworked:glaxx_block_10",
            "xtonesreworked:glaxx_block_11",
            "xtonesreworked:glaxx_block_12",
            "xtonesreworked:glaxx_block_13",
            "xtonesreworked:glaxx_block_14",
            "xtonesreworked:glaxx_block_15",
        ])
    })

    event.add("framedblocks:frameable", [
        "mob_grinding_utils:tinted_glass",
    ])
})