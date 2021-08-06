function generateFakeData(multiplier) {
    return Array.from({ length: 100 }, () => Math.floor(Math.random() * multiplier));
}

const LAND_USE_GRAPH_DATASETS = [
    {
        label: 'Woodland',
        data: generateFakeData(100),
        borderWidth: 1,
        borderColor: "#a1ca7a",
        radius: 0
    },
    {
        label: 'Cropland',
        data: generateFakeData(60),
        borderWidth: 1,
        borderColor: "#fff2a2",
        radius: 0
    },
    {
        label: 'Grassland',
        data: generateFakeData(30),
        borderWidth: 1,
        borderColor: "#ffae44",
        radius: 0
    }];