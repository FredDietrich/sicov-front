export const getVaccinesByCriteria = criteria => {
    //TODO Usar critérios de verdade
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([{ id: 1, name: 'Covid-19' },{ id: 2, name: 'Hepatite B' },{ id: 3, name: 'H1N1' }]), 1000)
    })
}