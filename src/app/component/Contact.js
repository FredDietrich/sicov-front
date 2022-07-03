import { useSelector } from "react-redux";
import Form from "./Form";
import FormItem from "./FormItem";
import TopBar from "./TopBar";

function Contact() {

    const selectVaccines = useSelector(state => state.vaccines.vaccines);

    return (
        <div className="Contact">
            <TopBar title="SICOV - Contato" />
            <Form>
                <FormItem>
                    <ul>
                        {selectVaccines.map((vaccine, i) => <li key={i}>{vaccine}</li>)}
                    </ul>
                </FormItem>
            </Form>
        </div>
    )

}

export default Contact;