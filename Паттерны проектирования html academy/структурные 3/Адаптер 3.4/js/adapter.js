export const adapter = (data) => {
  const adaptedData = {
    Id : data.Id || data.id || 100,
    state : data.State || data.state,
    counterparty : data.Counterparty || data.counterparty,
    manager : data.Manager || data.manager,
  }
  console.log('ass')

  return adaptedData;
}