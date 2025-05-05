// Datos de ejemplo para simular logs
const mockLogs = [
  {
    id: "log_1",
    message: "Usuario admin@cmmg.com inició sesión",
    level: "info",
    timestamp: "2025-05-05T18:30:00Z",
    metadata: { email: "admin@cmmg.com" }
  },
  {
    id: "log_2",
    message: "Usuario demo@cmmg.com inició sesión",
    level: "info",
    timestamp: "2025-05-05T18:45:00Z",
    metadata: { email: "demo@cmmg.com" }
  }
];

/**
 * Fetch logs from local mock data.
 * @returns {Promise<any>} - Returns logs or null on failure.
 */
export const getLogs = async (): Promise<any> => {
  try {
    console.log("Obteniendo logs (simulado)");
    
    // Simular un retraso para que parezca una llamada a la API real
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return { logs: mockLogs };
  } catch (error) {
    console.error("Error fetching logs (simulado):", error);
    return null;
  }
};

/**
 * Post a new log to local mock data.
 * @param {string} message - The log message.
 * @param {'info' | 'warning' | 'error'} level - The log level.
 * @param {object} metadata - Optional metadata for the log.
 * @returns {Promise<any>} - Returns the posted log or null on failure.
 */
export const postLog = async (
  message: string,
  level: "info" | "warning" | "error" = "info",
  metadata: any = { email: "unknown" }
): Promise<any> => {
  try {
    console.log(`Registrando log (simulado): ${message}, nivel: ${level}`);
    
    // Simular un retraso para que parezca una llamada a la API real
    await new Promise(resolve => setTimeout(resolve, 50));
    
    // Crear un nuevo log y añadirlo a los datos de ejemplo
    const newLog = {
      id: `log_${mockLogs.length + 1}`,
      message,
      level,
      timestamp: new Date().toISOString(),
      metadata: { ...metadata, email: metadata.email || "unknown" }
    };
    
    mockLogs.unshift(newLog);
    
    return { success: true, log: newLog };
  } catch (error) {
    console.error("Error posting log (simulado):", error);
    return null;
  }
};
