export const getStates = vaccine => {
    //TODO usar vacina para chamar API e ver os estados dela
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{key: 'RS', name: 'Rio Grande do Sul', cities: ['Montenegro','Porto Alegre', 'Santa Cruz do Sul']}, {key: 'AC', name: 'Acre', cities: ['Rio Branco', 'Acrelândia', 'Epitaciolândia']}])
        }, 500)
    })
}