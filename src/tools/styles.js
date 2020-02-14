import {makeStyles} from '@material-ui/core/styles';

export default drawerWidth => makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    list: {
        paddingTop: '0'
    },
    listSubHeader: {
        backgroundColor: theme.palette.grey[800],
        paddingTop: '8px',
        paddingBottom: '8px'
    },
    drawerTitle: {
        width: '100%'
    },
    drawerSubtitle: {
        width: '100%'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    assignmentContainer: {
        padding: '10px'
    },
    box: {
        display: 'inline-block',
        width: '50%'
    },
    emoji: {
        fontSize: '24pt',
        paddingRight: '12px'
    },
    chip: {
        verticalAlign: 'text-bottom'
    },
    opusPaper: {
        padding: '10px'
    },
    invisible: {
        backgroundColor: theme.palette.grey.A400
    },
    silhouette: {
        opacity: '0.6',
        width: '100%',
        height: '100%'
    },
    watermark: {
        position: 'fixed',
        bottom: '0',
        right: '10px',
        opacity: '0.3',
        fontSize: '84pt'
    },
    family: {
        margin: '40px',
        paddingTop: '60px'
    },
    familytree: {
        paddingTop: '40px'
    },
    newfamily: {
        fontSize: '8pt',
        position: 'absolute',
        bottom: '10px',
        right: '10px'
    }
}))();