//priority 1000
ServerEvents.recipes((event) => {
  event
    .custom({
      type: "pedestals:cobblegen",
      blockBelow: {
        item: "minecraft:coal_block",
      },
      result: {
        item: "minecraft:blackstone",
      },
    })
    .id("atm9_pedestals:blackstone");

  event
    .custom({
      type: "pedestals:cobblegen",
      blockBelow: {
        item: "farmersdelight:organic_compost",
      },
      result: {
        item: "minecraft:dirt",
      },
    })
    .id("atm9_pedestals:compostdirt");

  event
    .custom({
      type: "pedestals:cobblegen",
      blockBelow: {
        item: "minecraft:end_stone_bricks",
      },
      result: {
        item: "minecraft:end_stone",
      },
    })
    .id("atm9_pedestals:endstone");

  event
    .custom({
      type: "pedestals:cobblegen",
      blockBelow: {
        item: "farmersdelight:rich_soil",
      },
      result: {
        item: "minecraft:dirt",
      },
    })
    .id("atm9_pedestals:richdirt");

    event
    .custom({
      type: "pedestals:cobblegen",
      blockBelow: {
        item: "create:polished_cut_asurine",
      },
      result: {
        item: "create:asurine",
      },
    })
    .id("atm9_pedestals:asurine");

  event
    .custom({
      type: "pedestals:cobblegen",
      blockBelow: {
        item: "create:polished_cut_crimsite",
      },
      result: {
        item: "create:crimsite",
      },
    })
    .id("atm9_pedestals:crimsite");

  event
    .custom({
      type: "pedestals:cobblegen",
      blockBelow: {
        item: "create:polished_cut_ochrum",
      },
      result: {
        item: "create:ochrum",
      },
    })
    .id("atm9_pedestals:ochrum");

  event
    .custom({
      type: "pedestals:cobblegen",
      blockBelow: {
        item: "create:polished_cut_veridium",
      },
      result: {
        item: "create:veridium",
      },
    })
    .id("atm9_pedestals:veridium");


    // ============================================================================================
    event
    .custom({
      type: "pedestals:cobblegen",
      blockBelow: {
        item: "blocksyouneed_luna:polished_moonstone",
      },
      result: {
        item: "blocksyouneed_luna:moonstone_uc",
      },
    })
    .id("atm9_pedestals:moonstone");
});
