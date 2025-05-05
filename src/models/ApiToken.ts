import mongoose from "mongoose";

// Definición del esquema para los tokens de API
const tokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  expiresAt: { type: Date, required: true },
});

const ApiToken = mongoose.models.ApiToken || mongoose.model("ApiToken", tokenSchema);


export default ApiToken;
