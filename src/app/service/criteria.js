import Api from "../api/api";

export const getAllCriteria = () => new Promise((resolve, reject) => { resolve([{ id: 1, name: "Comorbidade até 15 anos" }, { id: 2, name: "15-30 anos sem grupo de risco ou comorbidade" }, { id: 3, name: "+60 anos com comorbidade/grupo de risco" }]) });//Api.get("criteria").then(data => data);

export const createCriteria = (criteria) => {
    return new Promise((resolve, reject) => {
        // Api.post("criteria", criteria).then(data => {
        //     resolve(data);
        // }).catch(e => reject(e));
        let data = {status: 'ok'}
        resolve(data)
    })
}