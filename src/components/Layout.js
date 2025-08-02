
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainMenuItems, secondaryMenuItems } from './MenuItems';

// Placeholder components for pages
import ServiceAccount from '../pages/ServiceAccount';
import Devices from '../pages/Devices';
import AgentInformation from '../pages/AgentInformation';
import Integrations from '../pages/Integrations';
import PartnerAccount from '../pages/PartnerAccount';
import Settings from '../pages/Settings';
import Brands from '../pages/Brands';

const Placeholder = ({ title }) => <Typography variant="h4">{title}</Typography>;

const drawerWidth = 240;

export default function Layout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            RCS Business Messaging
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainMenuItems.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component="a" href={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {secondaryMenuItems.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component="a" href={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Routes>
          {mainMenuItems.map((item, index) => {
            let element = <Placeholder title={item.text} />;
            if (item.path === '/devices') {
              element = <Devices />;
            } else if (item.path === '/service-account') {
              element = <ServiceAccount />;
            } else if (item.path === '/agent-information') {
              element = <AgentInformation />;
            } else if (item.path === '/integrations') {
              element = <Integrations />;
            } else if (item.path === '/partner-account') {
              element = <PartnerAccount />;
            } else if (item.path === '/settings') {
              element = <Settings />;
            } else if (item.path === '/brands') {
              element = <Brands />;
            }
            return <Route key={index} path={item.path} element={element} />;
          })}
          {secondaryMenuItems.map((item, index) => (
            <Route key={index} path={item.path} element={<Placeholder title={item.text} />} />
          ))}
        </Routes>
      </Box>
    </Box>
  );
}
