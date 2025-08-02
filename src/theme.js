
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a73e8', // Google Blue
    },
    secondary: {
      main: '#e8731a', // A complementary orange/amber
    },
    background: {
      default: '#f0f2f5', // Light grey background
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
      color: '#3c4043', // Dark grey for headings
    },
    h6: {
      fontWeight: 500,
      color: '#3c4043',
    },
    body1: {
      color: '#5f6368', // Standard text color
    },
    body2: {
      color: '#70757a', // Lighter text color
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff', // White app bar
          color: '#3c4043', // Dark text on app bar
          boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)', // Subtle shadow
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#ffffff', // White drawer
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#e8f0fe', // Light blue for selected item
            color: '#1a73e8',
            '& .MuiListItemIcon': {
              color: '#1a73e8',
            },
          },
          '&:hover': {
            backgroundColor: '#f0f2f5', // Lighter grey on hover
          },
        },
      },
    },
  },
});

export default theme;
