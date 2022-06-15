import Typography from '@mui/material/Typography';
import '../style/TopBar.css'

function TopBar(props) {
    return (
        <div className="TopBar">
            <Typography variant='h3' component='div' gutterBottom>
                {props.title}
            </Typography>
        </div>
    )
}

export default TopBar;