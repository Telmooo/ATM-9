const $VeinedVeinGenerator = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.generator.veins.VeinedVeinGenerator');
const $DikeVeinGenerator = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.generator.veins.DikeVeinGenerator');

GTCEuServerEvents.oreVeins(event => {
    event.modifyAll((veinId, vein) => {
        let startY;
        let endY;
        let layer;

        switch(vein.layer()) {
            case GTWorldGenLayers.ENDSTONE:
                startY = -63;
                endY = 0;
                layer = 'mining_dim_endstone';
                break;
            case GTWorldGenLayers.NETHERRACK:
                startY = 1;
                endY = 64;
                layer = 'mining_dim_netherrack';
                break;
            case GTWorldGenLayers.DEEPSLATE:
                startY = 65;
                endY = 128;
                layer = 'mining_dim_deepslate';
                break;
            case GTWorldGenLayers.STONE:
                startY = 129;
                endY = 248;
                layer = 'mining_dim_stone';
                break;
            default:
                return;
        }
        
        let veinGen = vein.veinGenerator();
        
        let newVeinId = (veinId + "_mining").split(':')[1]
        
        event.add("kubejs:" + newVeinId, newVein => {
            newVein.weight(vein.weight())
            // let minClusterSize = Math.floor(vein.clusterSize().getMinValue());
            let maxClusterSize = Math.floor(vein.clusterSize().getMaxValue());
            newVein.clusterSize(maxClusterSize);
            newVein.density(vein.density())
            newVein.discardChanceOnAirExposure(0.0)

            newVein.layer(layer)
            newVein.dimensions('allthemodium:mining')
            newVein.biomes('#allthemodium:mining_features/mining_biomes')

            newVein.heightRangeUniform(startY, endY)
            
            if (veinGen instanceof $VeinedVeinGenerator) {
                veinGen = veinGen.copy()
                veinGen.minYLevel(startY);
                veinGen.maxYLevel(endY);
            } else if (veinGen instanceof $DikeVeinGenerator) {
                veinGen = veinGen.copy()
                veinGen.minYLevel(startY);
                veinGen.maxYLevel(endY);
                var blocks = veinGen.getAllEntries()
                blocks.forEach((block) => {
                    veinGen.withBlock(new GTDikeBlockDefinition['(com.mojang.datafixers.util.Either,int,int,int)'](block.key, block.value, startY, endY))
                })
            }
            
            newVein['veinGenerator(com.gregtechceu.gtceu.api.data.worldgen.generator.VeinGenerator)'](veinGen)
        })
    
    })

    event.add("kubejs:fluorite_vein", builder => {
        builder.clusterSize(35)
            .weight(30)
            .density(0.75)
            .discardChanceOnAirExposure(0.0)
            .layer('mining_dim_deepslate')
            .dimensions('allthemodium:mining')
            .biomes('#allthemodium:mining_features/mining_biomes')
            .heightRangeUniform(65, 128)
            .dikeVeinGenerator(generator => 
                generator.withBlock(new GTDikeBlockDefinition['(com.gregtechceu.gtceu.api.data.chemical.material.Material,int,int,int)'](GTMaterials.get("fluorite"), 3, 65, 128))
                         .withBlock(new GTDikeBlockDefinition['(com.gregtechceu.gtceu.api.data.chemical.material.Material,int,int,int)'](GTMaterials.get("sulfur"), 1, 65, 128))
                         .withBlock(new GTDikeBlockDefinition['(com.gregtechceu.gtceu.api.data.chemical.material.Material,int,int,int)'](GTMaterials.get("gypsum"), 2, 65, 128))
                         .withBlock(new GTDikeBlockDefinition['(com.gregtechceu.gtceu.api.data.chemical.material.Material,int,int,int)'](GTMaterials.get("dolomite"), 1, 65, 128))
            )
    })      
})
