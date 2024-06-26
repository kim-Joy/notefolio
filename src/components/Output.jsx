import React from 'react';
import { Link } from 'react-router-dom';
import { useDataContext } from 'components/DataContext';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('assets/images/outputs', false, /laptop_\d+\.png$/));



function Output() {
  const { card_lits } = useDataContext();

  return (
    <article className="outputs">
      <section>
        <h2 className="h2">👩‍💻 만들어 봤어요.</h2>
        <ul className="card-list">
          {card_lits.map((item, index) => (
            <li key={item.key}>
              <Link to={`/detail/${item.key}`}>
                <div className={`thumb thumb_${item.key}`} style={{ backgroundImage: `url(${images[index]})` }} />
                <div className="info">
                  <strong>{item.title}</strong>
                  {item.sort.map((proj, projIndex) => (
                    <p key={projIndex} className={`tag-small ${proj.tagclass}`}>{proj.name}</p>
                  ))}
                  <p> 
                    {item.contribute.map((bute, contributeIndex) => (
                      <em key={contributeIndex}>{bute}</em>
                    ))}
                  </p>
                  <ol className="tag-group">
                    {item.language.map((lang, langIndex) => (
                      <li key={langIndex} className={`tag-small ${lang.tagclass}`}>{lang.name}</li>
                    ))}
                  </ol>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Output;
