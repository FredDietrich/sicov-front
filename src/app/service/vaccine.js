import Api from "../api/api"

export const getAllVaccines = () => new Promise((resolve, reject) => { resolve([{ id: 1, name: "Covid-19" }, { id: 2, name: "Hepatite B" }, { id: 3, name: "H1N1" }]) })//Api.get("vaccines").then(data => data);

export const getVaccineByCriteria = (criteria) => {
    return new Promise((resolve, reject) => {
        // Api.post("vaccines/match", criteria).then(data => {
        //     data.forEach((vaccine, index) => {
        //         data[index].startDate = new Date(vaccine.startDate);
        //         data[index].endDate = new Date(vaccine.endDate)
        //     });
        let data = [{ id: 1, vaccine: "Covid 19", criteria: "Idade", startDate: "2022-06-01", endDate: "2022-07-30" },
                    { id: 2, vaccine: "Gripe H1N1", criteria: "Universal", startDate: "2022-07-01", endDate: "2022-07-30" },
                    { id: 3, vaccine: "Gripe Sei La", criteria: "Universal", startDate: "2022-01-01", endDate: "2022-02-01" }
                    ];
        data.forEach((vaccine, index) => {
            data[index].startDate = new Date(vaccine.startDate);
            data[index].endDate = new Date(vaccine.endDate)
        });
        resolve(data);
    })
}

export const createVaccine = (vaccine) => {
    return new Promise((resolve, reject) => {
        // Api.post("vaccines", vaccine).then(data => {
        //     resolve(data);
        // }).catch(e => reject(e));
        let data = { status: 'ok' }
        resolve(data);
    })
}