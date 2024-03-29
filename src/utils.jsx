export async function fetchGEOJSON(path) {
    const response = await fetch(path);
    const data = await response.json();
    data.features.map((feature) => feature.geometry.coordinates.reverse());
    return data;
}

export async function fetchJSON(path) {
    const response = await fetch(path);
    const data = await response.json();
    return data;
}
