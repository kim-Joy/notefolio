// Detail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


import Header from 'components/Header';
import { useDataContext } from 'components/DataContext';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('assets/images/outputs', false, /laptop_\d+\.png$/));

const thumbs = importAll(require.context('assets/images/outputs', false, /phone_\d+\.png$/));
const details = importAll(require.context('assets/images/outputs', false, /detail_\d+\.png$/));
 
function Detail() {
  const { id } = useParams();
  const { card_lits } = useDataContext();
  const item = card_lits.find(card => card.key === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="detail notion_inner">
      <div className="head">
        <h3>{item.title}</h3>
        <dl>
          <dt>URL</dt>
          <dd>
            <Link>{item.url.map((url, urlIndex) => (
              <p key={urlIndex}>{url.name}</p>
             ))}
             </Link>
          </dd>
        </dl>
        <dl>
          <dt>기여도</dt>
          <dd>
            {item.contribute.map((bute, contributeIndex) => (
              <em key={contributeIndex}>{bute}</em>
            ))}
          </dd>
        </dl>
        <dl>
          <dt>사용언어</dt>
          <dd>
            <ol className="tag-group">
              {item.language.map((lang, langIndex) => (
                <li key={langIndex} className={`tag-small ${lang.tagclass}`}>{lang.name}</li>
              ))}
            </ol>
          </dd>
        </dl>
        <dl>
          <dt>구분</dt>
          <dd>
            {item.sort.map((proj, projIndex) => (
              <p key={projIndex} className={`tag-small ${proj.tagclass}`}>{proj.name}</p>
            ))}
          </dd>
        </dl>
        <dl>
          <dt>투입기간</dt>
          <dd>
            {item.data.map((data, dataIndex) => (
              <p key={dataIndex}>{data.name}</p>
             ))}
          </dd>
        </dl>
      </div>
      <div className="body">
        <div className="full">
          <img className="detail_thumb" src={`${images[item.key - 1]}`} alt="피씨 목업" />
        </div>
        <div className="half">
          <div>
           <img className="detail_thumb" src={`${thumbs[item.key - 1]}`} alt="모바일 목업" />
            <ul className="detail-txt-list"></ul>
          </div>
          <div>
            <img className="detail_thumb" src={`${details[item.key - 1]}`} alt="상세 이미지" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
