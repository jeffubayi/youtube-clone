import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import AccountIcon from '@material-ui/icons/SupervisorAccount';
import Avatar from '@material-ui/core/Avatar';
import {ProfileWrapper} from "./styles"
import { Link} from "react-router-dom";
import DropProfile from "../DropProfile/DropProfile"
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Avatar
        src="https://avatars0.githubusercontent.com/u/47192245?s=460&u=a1d196f1ca522563bd47ead569c58e4026a91677&v=4"
        onClick={handleClick}
      />
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <DropProfile/>
        </StyledMenuItem>
        <Link to = "/my-profile" style={{textDecoration:"none"}}>
        <StyledMenuItem>
                    <ListItemIcon>
            <AccountIcon fontSize="small" />
          </ListItemIcon>
           

          <ListItemText primary="Add Account" />
         
        </StyledMenuItem>
        </Link>
        <Link to = "/paths" style={{textDecoration:"none"}}>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Stats" />

        </StyledMenuItem>
        </Link>
        <Link to = "/music" style={{textDecoration:"none"}}>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Library" />
        </StyledMenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}

