import Api from "../api/api";

export const getAllCriteria = () => Api.get("criteria").then(data => data);

export const createCriteria = (criteria) => {
    return new Promise((resolve, reject) => {
        Api.post("criteria", criteria).then(data => {
            resolve(data);
        }).catch(e => reject(e));
    })
}