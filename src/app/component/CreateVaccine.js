import { Typography } from "@mui/material";
import { useState } from "react";
import AutoComplete from "./AutoComplete";
import Form from "./Form";
import FormItem from "./FormItem";
import TopBar from "./TopBar";
import VaccineModal from "./VaccineModal";


export default function CreateVaccine() {

    const [vaccine, setVaccine] = useState("");
    const [existingVaccines, setExistingVaccines] = useState([{name: "Covid"}]);
    const [modalValues, setModalValues] = useState({
        name: '',
        startDate: '',
        endDate: '',
        minAge: '',
        maxAge: '',
        comorbidity: false,
        riskGroup: false
    });
    const [open, setOpen] = useState(false);

    function handleModalSubmit() {

    };

    function handleModalClose() {
        setModalValues({
            name: '',
            startDate: '',
            endDate: '',
            minAge: '',
            maxAge: '',
            comorbidity: false,
            riskGroup: false
        });

        setOpen(false);
    }

    return (
        <div className="CreateVaccine">
            <TopBar>SICOV - Cadastro de Vacinas</TopBar>
            <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    sx={{ textAlign: 'center' }}
                >
                    Selecione uma vacina da lista, ou insira uma nova, caso não encontrar a desejada.
                </Typography>
            <Form>
                <FormItem>
                    <AutoComplete
                        Value={vaccine}
                        setOpen={setOpen}
                        setModalValues={setModalValues}
                        setValue={setVaccine}
                        existingValues={existingVaccines}

                    />
                </FormItem>
            </Form>
            <VaccineModal open={open} handleModalClose={handleModalClose} handleModalSubmit={handleModalSubmit} />
        </div>
    )

}