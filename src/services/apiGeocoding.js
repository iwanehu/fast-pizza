/*
export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
	`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}

*/

export async function getAddress({ latitude, longitude }) {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
      {
        headers: {
          'Accept-Language': 'es', // dirección en español
          'User-Agent': 'MiPortafolioSnayder/1.0' // Identifícar para evitar bloqueos
        }
      }
    );

    if (!res.ok) throw new Error("Error al obtener la dirección");
    const data = await res.json();
    
    
    return data; 
  } catch (error) {
    console.error(error);
    return null;
  }
}
