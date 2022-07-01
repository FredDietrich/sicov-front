import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import StatusTag from "./StatusTag";
import FormItem from "./FormItem";
import Form from "./Form";
import ArrowForward from "@mui/icons-material/ArrowForward";
import TopBar from "./TopBar";
import Api from "../api/api";
import Error from "./Error";
import { Typography } from "@mui/material";
import { getVaccineByCriteria } from "../service/vaccine";

function Results() {

    const [rows, setRows] = useState([]);
    const [selectedVaccines, setSelectedVaccines] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        function getVaccines() {
            setIsloading(true);
            getVaccineByCriteria().then(data => {
                setRows(data);
                setIsloading(false);
            }).catch(e => {
                setIsloading(false);
                setError("Não foi possível carregar as vacinas, por favor tente novamente mais tarde.")
            })
        }
        getVaccines();
    }, [])

    function handleContact() {
        //Api.post('contact', selectedVaccines).catch(e => {
            setError("Não foi possível completar a solicitação de recebimento de contato, por favor tente novamente mais tarde.");
        //});
    }

    const data = {
        columns: [
            { field: "vaccine", flex: 1, headerName: "Vacina" },
            { field: "criteria", flex: 0.5, headerName: "Critério" },
            {
                field: "status", flex: 0.5, headerName: "Status", renderCell: (params) =>
                    <StatusTag>
                        {(params.row.startDate <= new Date()) && (params.row.endDate >= new Date()) ? 'Em andamento' : ((params.row.startDate > new Date()) && (params.row.endDate > new Date()) ? `A partir de: ${params.row.startDate.toLocaleDateString()}` : 'Passada')}
                    </StatusTag>
            }
        ],
        rows: rows
    }

    return (
        <div className="Results">
            <TopBar>SICOV - Resultado de Vacinas</TopBar>
            <Error error={error} setError={setError} />
            <Form sx={{ height: 500 }}>
                <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    sx={{ textAlign: 'center' }}
                >
                    Selecione vacinas caso queira receber um aviso quando ela estiver liberada para você.
                </Typography>
                <DataGrid
                    {...data}
                    checkboxSelection
                    onSelectionModelChange={(vaccines) => setSelectedVaccines(vaccines)}
                    selectionModel={selectedVaccines}
                    loading={isLoading}
                />
                <FormItem justifyContent="center">
                    <Button
                        variant="contained"
                        color="success"
                        endIcon={selectedVaccines.length > 0 ? <ArrowForward /> : ''}
                        type="submit"
                        disabled={selectedVaccines.length < 1}
                        onClick={handleContact}
                    >
                        {selectedVaccines.length > 0 ? 'ENTRAR EM CONTATO' : 'SELECIONE PELO MENOS UMA VACINA'}
                    </Button>
                </FormItem>
            </Form>
        </div>
    )

}

export default Results;