import React from 'react';
import My from 'assets/images/my.png';


function Info() { 


  return(
    <article className="info">
      <h1>Welcome to Joy Portfolio💛</h1>
      <div className="grid">
          <div className="grid-item thumbs">
            <img src={My} alt="김조희" />
          </div>
          <div className="grid-item">
            <h3>"👋 안녕하세요, <span>뒤 늦게 적성을 찾아서</span> 끈임없이 성장해가는 웹퍼블리셔 김조희 입니다"
            </h3>   
            <small>#모든걸 #흡수하는 #나는야 #카멜레온</small>
          </div>
      </div>
    </article>
  )
}


export default Info;