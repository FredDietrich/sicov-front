import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";


function FormGrid(props) {

    const StyledFormGrid = styled(Grid)(({ theme }) => ({
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
        <StyledFormGrid>{props.children}</StyledFormGrid>
    )

}

export default FormGrid;