import { Button, Checkbox, CircularProgress, FormControl, FormControlLabel, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AutoComplete from "./AutoComplete";
import Form from "./Form";
import FormItem from "./FormItem";
import TopBar from "./TopBar";
import Modal from "./Modal";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { ArrowForward } from "@mui/icons-material";
import { createVaccine, getAllVaccines } from "../service/vaccine";
import { createCriteria, getAllCriteria } from "../service/criteria";
import Error from "./Error";

export default function CreateVaccine() {

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [vaccine, setVaccine] = useState("");
    const [criteria, setCriteria] = useState("");
    const [comorbidity, setComorbidity] = useState(false);
    const [riskGroup, setRiskGroup] = useState(false);
    const [existingVaccines, setExistingVaccines] = useState([]);
    const [existingCriteria, setExistingCriteria] = useState([])
    const [modalValuesVaccine, setModalValuesVaccine] = useState({
        name: '',
        startDate: '',
        endDate: ''
    });
    const [modalValuesCriteria, setModalValuesCriteria] = useState({
        minAge: '',
        maxAge: '',
        comorbidity: false,
        riskGroup: false
    })
    const [openVaccine, setOpenVaccine] = useState(false);
    const [openCriteria, setOpenCriteria] = useState(false);

    function handleModalSubmitVaccine() {
        createVaccine(modalValuesVaccine).then(() => {
            setOpenVaccine(false);
        }).catch(e => setError("Ocorreu um erro ao salvar a nova vacina"));
    };

    function handleModalCloseVaccine() {
        setModalValuesVaccine({
            name: '',
            startDate: new Date(),
            endDate: new Date()
        });

        setOpenVaccine(false);
    }

    function handleModalSubmitCriteria() {
        createCriteria(modalValuesCriteria).then(() => {
            setOpenCriteria(false);
        }).catch(e => setError("Ocorreu um erro ao salvar o novo critério"))
    }

    function handleModalCloseCriteria() {
        setModalValuesVaccine({
            minAge: '',
            maxAge: '',
            comorbidity: false,
            riskGroup: false
        })
        setOpenCriteria(false);
    }

    useEffect(() => {
        setIsLoading(true);
        getAllVaccines().then(resVaccines => {
            setExistingVaccines(resVaccines);
            setIsLoading(false);
        }).catch(() => setError("Não foi possível carregar as vacinas!"))
        setIsLoading(true);
        getAllCriteria().then(resCriteria => {
            setExistingCriteria(resCriteria);
            setIsLoading(false);
        }).catch(() => setError("Não foi possível carregar os critérios!"))
    }, [])

    return isLoading ? (<CircularProgress />) : (
        <div className="CreateVaccine">
            <TopBar>SICOV - Cadastro de Vacinas</TopBar>
            <Error error={error} setError={setError} />
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
                        setOpen={setOpenVaccine}
                        setModalValues={setModalValuesVaccine}
                        setValue={setVaccine}
                        existingValues={existingVaccines}
                        label="Vacina"
                    />
                </FormItem>
                <FormItem>
                    <AutoComplete
                        Value={criteria}
                        setOpen={setOpenCriteria}
                        setModalValues={setModalValuesCriteria}
                        setValue={setCriteria}
                        existingValues={existingCriteria}
                        label={vaccine === '' ? 'Selecione uma vacina antes' : 'Critério'}
                        disabled={vaccine === ''}
                    />
                </FormItem>
            </Form>
            <Modal
                open={openVaccine}
                handleModalClose={handleModalCloseVaccine}
                handleModalSubmit={handleModalSubmitVaccine}
                title="Inserindo nova Vacina"
                helperText="Não encontrou a vacina que desejava? Insira uma agora mesmo!"
                modalValues={modalValuesVaccine}
            >
                <Form>
                    <FormItem>
                        <TextField
                            label="Nome da vacina"
                            variant="outlined"
                            fullWidth
                            autoFocus
                            required
                            value={modalValuesVaccine.name}
                            onChange={e => setModalValuesVaccine({ ...modalValuesVaccine, name: e.target.value })}
                        />
                    </FormItem>
                    <FormItem>
                        <DesktopDatePicker
                            label="Data início"
                            inputFormat="MM/dd/yyyy"
                            value={modalValuesVaccine.startDate}
                            onChange={e => setModalValuesVaccine({ ...modalValuesVaccine, startDate: e.target.value })}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </FormItem>
                    <FormItem>
                        <DesktopDatePicker
                            label="Data Fim"
                            inputFormat="MM/dd/yyyy"
                            value={modalValuesVaccine.endDate}
                            onChange={e => setModalValuesVaccine({ ...modalValuesVaccine, endDate: e.target.value })}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </FormItem>
                    <FormItem justifyContent="center">
                        <FormControl>
                            <Button
                                variant="contained"
                                color="success"
                                endIcon={<ArrowForward />}
                                onClick={handleModalSubmitVaccine}
                            >
                                Salvar
                            </Button>
                        </FormControl>
                    </FormItem>
                </Form>
            </Modal>
            <Modal
                open={openCriteria}
                handleModalClose={handleModalCloseCriteria}
                handleModalSubmit={handleModalSubmitCriteria}
                title="Inserindo novo critério"
                helperText="Não encontrou o critério como precisava? Crie um agora mesmo!"
                modalValues={modalValuesCriteria}
            >
                <Form>
                    <FormItem>
                        <TextField
                            label="Idade Mínima"
                            variant="outlined"
                            fullWidth
                            autoFocus
                            required
                            type="number"
                            value={setModalValuesCriteria.minAge}
                            onChange={e => setModalValuesCriteria({ ...modalValuesCriteria, minAge: e.target.value })}
                        />
                    </FormItem>
                    <FormItem>
                        <TextField
                            label="Idade Máxima"
                            variant="outlined"
                            fullWidth
                            autoFocus
                            required
                            type="number"
                            value={setModalValuesCriteria.maxAge}
                            onChange={e => setModalValuesCriteria({ ...modalValuesCriteria, maxAge: e.target.value })}
                        />
                    </FormItem>
                    <FormItem>
                        <FormControl>
                            <FormControlLabel control={<Checkbox />} label="Comorbidade" value={comorbidity} onChange={e => setComorbidity(e.target.value)} />
                        </FormControl>
                    </FormItem>
                    <FormItem>
                        <FormControl>
                            <FormControlLabel control={<Checkbox />} label="Grupo de risco" value={riskGroup} onChange={e => setRiskGroup(e.target.value)} />
                        </FormControl>
                    </FormItem>
                    <FormItem justifyContent="center">
                        <FormControl>
                            <Button
                                variant="contained"
                                color="success"
                                endIcon={<ArrowForward />}
                                onClick={handleModalSubmitCriteria}
                            >
                                Salvar
                            </Button>
                        </FormControl>
                    </FormItem>
                </Form>
            </Modal>
        </div>
    )

}