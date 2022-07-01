import { Autocomplete, Button, createFilterOptions, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import Form from "./Form";
import FormItem from "./FormItem";
import TopBar from "./TopBar";

const filter = createFilterOptions();

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
            <Form>
                <FormItem>
                    <Autocomplete
                        fullWidth
                        value={vaccine}
                        onChange={(e, newName) => {
                            if (typeof newValue === 'string') {
                                setTimeout(() => {
                                    setOpen(true);
                                    setModalValues({
                                        name: newName,
                                        year: '',
                                    });
                                });
                            } else if (newName && newName.inputValue) {
                                setOpen(true);
                                setModalValues({
                                    title: newName.inputValue,
                                    year: '',
                                });
                            } else {
                                setVaccine(newName);
                            }
                        }}
                        filterOptions={(options, params) => {
                            const filtered = filter(options, params);
                            if (params.inputValue !== '') {
                                filtered.push({
                                    inputValue: params.inputValue,
                                    title: `Adicionar "${params.inputValue}"`,
                                });
                            }
                            return filtered;
                        }}
                        id="vaccine-autocomplete"
                        options={existingVaccines}
                        getOptionLabel={(option) => {
                            if (typeof option === 'string') {
                                return option;
                            }
                            if (option.inputValue) {
                                return option.inputValue;
                            }
                            return option.name;
                        }}
                        selectOnFocus
                        clearOnBlur
                        handleHomeEndKeys
                        renderOption={(props, option) => <li {...props}>{option.name}</li>}
                        sx={{ height: 500 }}
                        freeSolo
                        renderInput={(params) => <TextField {...params} title={params.name} label="Vacina" />}
                    />
                </FormItem>
            </Form>
            <Dialog open={open} onClose={handleModalClose}>
                <form onSubmit={handleModalSubmit}>
                    <DialogTitle>Adicionar nova vacina</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Não encontrou a vacina que precisa na lista? Insira uma nova agora mesmo!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleModalClose}>Cancelar</Button>
                        <Button type="submit">Adicionar</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )

}