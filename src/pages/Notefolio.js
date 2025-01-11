import React from 'react';

import Header from 'components/Header';
import Info from 'components/Info';
import Career from 'components/Career';
import Output from 'components/Output';
import Technology from 'components/Technology';


function Notion() { 
   
  return(
     <div className="notion notion_inner">
        
        <Info />
         <Career />
         <div className="hr full"></div>
         <Output />
         <Technology />
     </div>
  )
}


export default Notion;