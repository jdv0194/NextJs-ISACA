import axios from "axios"
const baseURL = "https://cm-sit.isaca.org"

export async function loadUser() {
    // Call an external API endpoint to get user
    
    const response = await axios.get(`${baseURL}/api/myisaca/jssheader?isacaId=467939`)

    return response.data
  }

  export async function loadUserSummary() {
    // Call an external API endpoint to get user summary
    const response = await axios.get(`${baseURL}/api/myisaca/jsssummary?isacaId=467939`)
    return response.data
  }