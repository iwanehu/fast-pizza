export async function getAddress({ latitude, longitude }) {
  try {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      }
    );

    if (!res.ok) {
      throw new Error(`Error de red: ${res.status}`);
    }

    const data = await res.json();
    
    // Validar que la data contenga lo que esperas
    if (!data || data.error) {
      throw new Error(data.error || "Datos de dirección no encontrados");
    }

    return data;
  } catch (error) {
    console.error("Error en getAddress:", error);
    throw error;
  }
}
