GTCEuStartupEvents.materialModification(event => {
    GTMaterials.get("dolomite").setComponents("1x calcium", "1x magnesium", "2x carbon", "6x oxygen");
    GTMaterials.get("dolomite").setFormula("CaMg(CO3)2", true);
});