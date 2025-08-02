
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import SecurityIcon from '@mui/icons-material/Security';
import BugReportIcon from '@mui/icons-material/BugReport';
import DevicesIcon from '@mui/icons-material/Devices';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import HistoryIcon from '@mui/icons-material/History';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CodeIcon from '@mui/icons-material/Code';
import HelpIcon from '@mui/icons-material/Help';
import GavelIcon from '@mui/icons-material/Gavel';
import LockIcon from '@mui/icons-material/Lock';
import MessageIcon from '@mui/icons-material/Message';
import WebhookIcon from '@mui/icons-material/Webhook';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export const mainMenuItems = [
  { text: 'Agent information', icon: <InfoIcon />, path: '/agent-information' },
  { text: 'Integrations', icon: <IntegrationInstructionsIcon />, path: '/integrations' },
  { text: 'Partner account', icon: <AccountBoxIcon />, path: '/partner-account' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  { text: 'Brands', icon: <BusinessIcon />, path: '/brands' },
  { text: 'Users', icon: <PeopleIcon />, path: '/users' },
  { text: 'Service account', icon: <SecurityIcon />, path: '/service-account' },
  { text: 'Test', icon: <BugReportIcon />, path: '/test' },
  { text: 'Devices', icon: <DevicesIcon />, path: '/devices' },
  { text: 'Deploy', icon: <CloudUploadIcon />, path: '/deploy' },
  { text: 'Verification', icon: <VerifiedUserIcon />, path: '/verification' },
  { text: 'Launch', icon: <RocketLaunchIcon />, path: '/launch' },
  { text: 'Manage', icon: <SettingsIcon />, path: '/manage' },
  { text: 'Analytics', icon: <AnalyticsIcon />, path: '/analytics' },
  { text: 'Agent history', icon: <HistoryIcon />, path: '/agent-history' },
];

export const secondaryMenuItems = [
  { text: 'Documentation', icon: <MenuBookIcon />, path: '/documentation' },
  { text: 'Guides', icon: <HelpIcon />, path: '/guides' },
  { text: 'Samples', icon: <CodeIcon />, path: '/samples' },
  { text: 'Reference', icon: <GavelIcon />, path: '/reference' },
  { text: 'Support', icon: <PeopleIcon />, path: '/support' },
  { text: 'Terms of service', icon: <GavelIcon />, path: '/terms-of-service' },
  { text: 'Authentication', icon: <LockIcon />, path: '/authentication' },
  { text: 'Messaging Flow', icon: <MessageIcon />, path: '/messaging-flow' },
  { text: 'Webhook', icon: <WebhookIcon />, path: '/webhook' },
  { text: 'RBM API Interaction Flow', icon: <AccountTreeIcon />, path: '/rbm-api-interaction-flow' },
  { text: 'RBM Architectural Message Flow', icon: <AccountTreeIcon />, path: '/rbm-architectural-message-flow' },
];
