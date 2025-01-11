import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { useDataContext } from 'components/DataContext';

import "styles/scss/notion.scss";

function Header() { 
  const { id } = useParams();
  const { card_lits } = useDataContext();
  const item = card_lits.find(card => card.key === id);
   
  return(
     <div className="header">
         헤드ssssssssssssssss
        <div clasName="header_util_left">
          <ul>
            <li>
              util
            </li>
            <li><button>만들어봤어요</button></li>
            <li><button>탭</button></li>
          </ul>
        </div>

        <div className="header_util_right">
          <button type="button">모드</button>
        </div>
     </div>
  )
}


export default Header;