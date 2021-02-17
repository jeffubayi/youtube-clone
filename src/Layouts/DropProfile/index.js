import React from "react";
import Avatar from "@material-ui/core/Avatar";

import {ProWrapper} from "./styles"

const DropProfile = () => {
  return (
    <ProWrapper>
        <div >
      <Avatar src="https://avatars0.githubusercontent.com/u/47192245?s=460&u=a1d196f1ca522563bd47ead569c58e4026a91677&v=4" />
    </div>
       <h4>Jeff Endegwa</h4>
       <p>jeffubayi@gmail.com</p>
       <a href style={{color:"blue"}}>manage your google account</a>
    </ProWrapper>
  );
};

export default DropProfile;
