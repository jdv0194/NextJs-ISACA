const baseURL = "https://cm-sit.isaca.org"

export async function loadUser() {
    // Call an external API endpoint to get user
    
    const res = await fetch(
      `${baseURL}/api/myisaca/jssheader?isacaId=467939`
      );
    const data = await res.json()
    return data
  }

  export async function loadUserSummary() {
    // Call an external API endpoint to get user summary
    const res = await fetch(
      `${baseURL}/api/myisaca/jssummary?isacaId=467939`
      );
    const data = await res.json()
    return data
  }