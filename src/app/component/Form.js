import Box from "@mui/material/Box";
import { styled } from "@mui/system";


function Form(props) {

    const StyledForm = styled(Box)(({ theme }) => ({
        x: { flexGrow: 1 },
        container: true,
        justifyContent: "center",
        [theme.breakpoints.down('md')]: {
            margin: '0 0 0 0',
        },
        [theme.breakpoints.up('md')]: {
            margin: '1% 10% 1% 10%',
        },
        [theme.breakpoints.up('lg')]: {
            margin: '1% 25% 1% 25%',
        }
    }));

    return (
        <StyledForm>{props.children}</StyledForm>
    )

}

export default Form;