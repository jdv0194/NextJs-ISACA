export async function loadUser() {
    // Call an external API endpoint to get user
    const res = await fetch(
        'https://cm-sit.isaca.org/api/myisaca/jssheader?isacaId=467939'
      );
    const data = await res.json()
    return data
  }

  export async function loadUserSummary() {
    // Call an external API endpoint to get user summary
    const res = await fetch(
        'https://cm-sit.isaca.org/api/myisaca/jsssummary?isacaId=467939'
      );
    const data = await res.json()
    return data
  }