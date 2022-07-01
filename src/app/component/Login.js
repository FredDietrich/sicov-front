import { ArrowForward } from "@mui/icons-material";
import { Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { validateLogin } from "../service/login";
import Form from "./Form";
import FormItem from "./FormItem";
import TopBar from "./TopBar";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleFormSubmit() {
        validateLogin({email: email, password: password});
    }

    return (
        <div className="Login">
            <TopBar>Faça Login para cadastrar vacinas</TopBar>
            <Form onSubmit={handleFormSubmit}>
                <FormItem>
                    <TextField
                            label="E-mail"
                            variant="outlined"
                            fullWidth
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                </FormItem>
                <FormItem>
                    <TextField
                            label="Senha"
                            variant="outlined"
                            fullWidth
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                </FormItem>
                <FormItem justifyContent="center">
                    <FormControl>
                        <Button
                            variant="contained"
                            color="success"
                            endIcon={<ArrowForward />}
                            type="submit"
                        >
                            Login
                        </Button>
                    </FormControl>
                </FormItem>
            </Form>
        </div>
    )

}