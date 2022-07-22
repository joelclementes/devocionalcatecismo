export default async function getDevocionales(url) {
    // url viene de muestradevocionales()
    const consulta = await fetch(url);
    return await consulta.json();
}