import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    width: 300,

  },
});

const Wrapper = styled.div`
  display:grid;
  grid-template-columns:repeat(2 auto)
  grid-gap:1rem;
`;

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Divider/>
     <Wrapper >
    <BottomNavigation 
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      position="fixed"
      >
     
      <BottomNavigationAction label="Home" icon={<HomeIcon style={{fill:"black"}}/>} />
      <BottomNavigationAction label="Explore" icon={<ExploreIcon style={{fill:"black"}}/>} />
      <BottomNavigationAction value="add" icon={<AddCircleOutlineIcon style={{fill:"black"}}/>} />
      <BottomNavigationAction label="Subscription"  icon={<SubscriptionsIcon style={{fill:"black"}}/>} />
      <BottomNavigationAction label="Library"  icon={<VideoLibraryIcon style={{fill:"black"}} />} />
      
    </BottomNavigation>
    </Wrapper >
    <Divider/>
    </>
  );
}
