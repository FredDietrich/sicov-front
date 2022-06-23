import CalendarMonth from "@mui/icons-material/CalendarMonth";
import Chip from "@mui/material/Chip";

export default function StatusTag(props) {
    return <Chip icon={<CalendarMonth />} label={props.children} variant="outlined" />;
}
