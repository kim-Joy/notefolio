import React from 'react';




function Technology() { 

  return(
    <article className="technology">
      <h2 className="h2">✋ 다를줄 알아요.</h2>
      <div className="grid grid-half">
          <section>
            <h3 className="h3 hr">🔨 Tool</h3>
            <ol className="tag-group flex">
                <li>Excel</li>
                <li>Word</li>
                <li>ppt</li>
                <li>Adobe XD</li>
                <li>PhotoShop</li>
                <li>Illustratorst</li>
                <li>Zeplin</li>
                <li>Figma</li>
                <li>Notion</li>
                <li>Typed</li>
            </ol>
          </section>
          <section>
            <h3 className="h3 hr">⚔️ Skill</h3>
            <ol className="tag-group flex">
                <li>Html5</li>
                <li>CSS3</li>
                <li>Jquery</li>
                <li>Javas Script</li>
                <li>React</li>
            </ol>
          </section>
      </div>
    </article>
  )
}


export default Technology;