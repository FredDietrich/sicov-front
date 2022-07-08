import { ArrowForward } from "@mui/icons-material";
import { Button, FormControl, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import FormItem from "./FormItem";
import TopBar from "./TopBar";

function Contact() {

    const selectVaccines = useSelector(state => state.vaccines.vaccines);
    const [contactInfo, setContactInfo] = useState({
        name: '',
        birthDate: null,
        phone: '',
        email: '',
        state: '',
        city: ''
    });

    function handleSubmit() {
        alert('Função não implementada! :(')
    }

    return (
        <div className="Contact">
            <TopBar>SICOV - Cadastro para receber aviso sobre Vacinas</TopBar>
            <Form>
                <FormItem>
                    <p>Vacinas selecionadas:</p>
                    <ul>
                        {selectVaccines.map((vaccine, i) => <li key={i}>{vaccine}</li>)}
                    </ul>
                </FormItem>
                <FormItem>
                    <TextField
                        label="Nome"
                        variant="outlined"
                        fullWidth
                        required
                        value={contactInfo.name}
                        onChange={e => setContactInfo({ ...contactInfo, name: e.target.value })}
                    />
                </FormItem>
                <FormItem>
                    <FormControl fullWidth>
                        <DesktopDatePicker
                            label="Data de nascimento"
                            inputFormat="dd/MM/yyyy"
                            value={contactInfo.birthDate}
                            onChange={newValue => setContactInfo({ ...contactInfo, birthDate: newValue })}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </FormControl>

                </FormItem>
                <FormItem>
                    <TextField
                        label="Telefone"
                        variant="outlined"
                        fullWidth
                        value={contactInfo.phone}
                        onChange={e => setContactInfo({ ...contactInfo, phone: e.target.value })}
                    />
                </FormItem>
                <FormItem>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        value={contactInfo.email}
                        onChange={e => setContactInfo({ ...contactInfo, email: e.target.value })}
                    />
                </FormItem>
                <FormItem justifyContent="center">
                    <FormControl>
                        <Button
                            variant="contained"
                            color="success"
                            endIcon={<ArrowForward />}
                            onClick={handleSubmit}
                        >
                            Buscar
                        </Button>
                    </FormControl>
                </FormItem>
            </Form>
        </div>
    )

}

export default Contact;