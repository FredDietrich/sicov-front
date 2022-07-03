import Api from "../api/api"

export const getAllVaccines = () => Api.get("vaccines").then(data => data);

export const getVaccineByCriteria = (criteria) => {
    return new Promise((resolve, reject) => {
        Api.getWithPayload("vaccines/match", criteria).then(data => {
            data.forEach((vaccine, index) => {
                data[index].startDate = new Date(vaccine.startDate);
                data[index].endDate = new Date(vaccine.endDate)
            });
            resolve(data);
        }).catch(e => reject(e))
    }); 
}