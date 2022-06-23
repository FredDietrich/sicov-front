import Api from "../api/api"

export const getAllVaccines = () => Api.get("vaccines").then(data => data);