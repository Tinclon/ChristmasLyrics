import React, {Fragment} from 'react';
import clsx from "clsx";

import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

export default props => {
    const {
        classes,
        year,
        date,
        people,
        opus,
        open,
        handleDrawerClose
    } = props;

    // Build the UI
    return (
        <main
            onClick={handleDrawerClose}
            className={clsx(classes.content, {[classes.contentShift]: open})} >
            <div className={classes.drawerHeader} />
            <Typography paragraph>
                {opus.text && opus.text.split("\n").reduce((acc, curr) => <Fragment>{acc}<br/>{curr.trim()}</Fragment>)}
            </Typography>
            {!opus.text &&
                <Fragment>
                    <Container maxWidth="sm">
                        <img src={process.env.PUBLIC_URL + "/nativity-silhouette.png"} alt="Nativity" style={{width: "100%", height: "100%"}}/>
                    </Container>
                    <Container maxWidth="sm" style={{padding: "10px"}}>
                        <Paper elevation={10} style={{padding: "10px"}}>
                            <Box>
                                <Box className={classes.box}><span className={classes.emoji} role={"img"} aria-label={"candle"}>🕯</span><Chip className={classes.chip} label={people[(year + date) % people.length].name} /></Box>
                                <Box className={classes.box}><span className={classes.emoji} role={"img"} aria-label={"song"}>🎵</span><Chip className={classes.chip} label={people[(year + date + 1) % people.length].name} /></Box>
                            </Box>
                            <Box>
                                <Box className={classes.box}><span className={classes.emoji} role={"img"} aria-label={"scripture"}>📖</span><Chip className={classes.chip} label={people[(year + date + 2) % people.length].name} /></Box>
                                <Box className={classes.box}><span className={classes.emoji} role={"img"} aria-label={"song"}>🎵</span><Chip className={classes.chip} label={people[(year + date + 3) % people.length].name} /></Box>
                            </Box>
                            <Box>
                                <Box className={classes.box} ><span className={classes.emoji} role={"img"} aria-label={"prayer"}>🙏</span><Chip className={classes.chip} label={people[(year + date + 4) % people.length].name} /></Box>
                                <Box className={classes.box} ><span className={classes.emoji} role={"img"} aria-label={"candle"}>🕯</span><Chip className={classes.chip} label={people[(year + date + 5) % people.length].name} /></Box>
                           </Box>
                        </Paper>
                    </Container>
                </Fragment>
            }
        </main>
    );
}