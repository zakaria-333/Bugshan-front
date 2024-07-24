import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import AddHomeWorkOutlinedIcon from '@mui/icons-material/AddHomeWorkOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Avatar, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';




const drawerWidth = 240;


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    // @ts-ignore
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);





const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));



const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});


const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const array1 = [
    {
        "text": "Home",
        "icon": <HomeOutlinedIcon />,
        "path": "/"
    },
    {
        "text": "Users",
        "icon": <PersonAddAltOutlinedIcon />,
        "path": "/users"
    },
    {
        "text": "Subsidiaries",
        "icon": <ApartmentOutlinedIcon />,
        "path": "/filiale"
    },
    {
        "text": "Sites",
        "icon": <AddHomeWorkOutlinedIcon />,
        "path": "/site"
    }
]



const array2 = [

    {
        "text": "Users Statistics",
        "icon": <BarChartOutlinedIcon />,
        "path": "/userStatics"
    },
    {
        "text": "Subsidiaries Statistics ",
        "icon": <DonutLargeOutlinedIcon />,
        "path": "/filialeStatics"
    },
    {
        "text": "Sites Statistics",
        "icon": <TimelineOutlinedIcon />,
        "path": "/siteStatics"
    }
]

const array3 = [
    {
        "text": "Demandes",
        "icon": <ChatBubbleOutlineOutlinedIcon />,
        "path": "/message"
    },
    {
        "text": "Profile",
        "icon": <AccountBoxOutlinedIcon />,
        "path": "/profile"
    },
    {
        "text": "Log Out",
        "icon": <LogoutOutlinedIcon />,
        "path": "/q"
    }
]




export default function
    ({ open, handleDrawerClose }) {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <Avatar sx={{ mx: "auto", transition: "0.3s", width: open ? 90 : 45, height: open ? 90 : 45, border: "2px solid grey", my: 1 }} alt="Profile" src="https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w960/f_auto/primary/ikmh0nytaths6vsttzsj" />
            <Typography align='center' sx={{ fontSize: open ? 18 : 0, fontWeight: 10, fontFamily: 'initial', transition: "0.3s" }}>Mechkour Ayoub</Typography>
            <Typography align='center' sx={{ fontSize: open ? 16 : 0, my: 1, transition: "0.3s", color: theme.palette.info.main }} >Admin </Typography>
            <Divider />
            <List>
                {array1.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton onClick={
                            () => { navigate(item.path) }
                        }
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                bgcolor: location.pathname == item.path ? (theme.palette.mode == 'dark' ? grey[900] : grey[300]) : null
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}

                            >
                                <Tooltip placement="right-start" title={item.text} disableInteractive>
                                    {item.icon}
                                </Tooltip>

                            </ListItemIcon>
                            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {array2.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton onClick={
                            () => { navigate(item.path) }
                        }
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                bgcolor: location.pathname == item.path ? (theme.palette.mode == 'dark' ? grey[900] : grey[300]) : null
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <Tooltip placement="right-start" title={item.text} disableInteractive>
                                    {item.icon}
                                </Tooltip>
                            </ListItemIcon>
                            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider />
            <List>
                {array3.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton onClick={
                            () => { navigate(item.path) }
                        }
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                bgcolor: location.pathname == item.path ? (theme.palette.mode == 'dark' ? grey[900] : grey[300]) : null
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <Tooltip title={item.text} placement="right-start" disableInteractive>
                                    {item.icon}
                                </Tooltip>
                            </ListItemIcon>
                            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}
