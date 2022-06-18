import { TextField } from "@mui/material";
import Form from "./Form";
import FormItem from "./FormItem";
import TopBar from "./TopBar";

function Contact() {

    return (
        <div className="Contact">
            <TopBar title="SICOV - Contato" />
            <Form>
                <FormItem>
                    <TextField
                        fullWidth
                    />
                </FormItem>
            </Form>
        </div>
    )

}

export default Contact;