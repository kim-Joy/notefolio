import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [proj] = useState([
    { name: '회사 프로젝트', tagclass: 'tag-gray' }, 
    { name: '개인 프로젝트', tagclass: 'tag-red' },
    { name: '스터디 프로젝트', tagclass: 'tag-blue' }
  ]);

  const [url] = useState([
    { name: 'gayeon.com' }
  ]);

  const [languages] = useState([
    { name: 'html5', tagclass: 'tag-green' }, 
    { name: 'css3', tagclass: 'tag-gray' },
    { name: 'jquery', tagclass: 'tag-orange' },
    { name: 'JS', tagclass: 'tag-purple' },
    { name: 'React', tagclass: 'tag-red' },
    { name: 'SCSS', tagclass: 'tag-brown' }
  ]);

  const [data] = useState([
    { name: '2021/11/12 → 2021/11/18 (5일)' }
  ]);

  const [card_lits] = useState([
    { key: "1", title: "밸런스 랜딩페이지", contribute: ['퍼블 100%'], 
      url: [url[0]],
      sort: [proj[0]],
      language: [languages[0], languages[1], languages[2]],
      data: [data[0]],
    },
    { key: "2", title: "가입비 랜딩페이지", contribute: ['퍼블 100%'], 
      url: [url[0]],
      sort: [proj[0]],
      language: [languages[0], languages[1], languages[2]],
      data: [data[0]],
    },
    { key: "3", title: "상품 소개페이지", contribute: ['퍼블 100%'],
      url: [url[0]], 
      sort: [proj[0]],
      language: [languages[0], languages[1], languages[2]],
      data: [data[0]],
    },
    { key: "4", title: "MBTI 테스트", contribute: ['퍼블 100%'], 
      url: [url[0]],
      sort: [proj[0]],
      language: [languages[0], languages[1], languages[2], languages[3]],
      data: [data[0]],
    },
    { key: "5", title: "포트폴리오", contribute: ['기획 100%', '디자인 100%', '퍼블 100%'], 
      url: [url[0]],
      sort: [proj[1]],
      language: [languages[0], languages[1], languages[3], languages[4]],
      data: [data[0]],
    },
    { key: "6", title: "랜딩페이지", contribute: ['퍼블 100%'], 
      url: [url[0]],
      sort: [proj[0]],
      language: [languages[0], languages[1], languages[2], languages[3]],
      data: [data[0]],
    },
    { key: "7", title: "에디투드", contribute: ['퍼블 100%'], 
      url: [url[0]],
      sort: [proj[2]],
      language: [languages[0], languages[1], languages[2], languages[3]],
      data: [data[0]],
    },
    { key: "8", title: "스와이프 랜딩페이지", contribute: ['퍼블 100%'],
      url: [url[0]], 
      sort: [proj[0]],
      language: [languages[0], languages[1], languages[3]],
      data: [data[0]],
    },
    { key: "9", title: "두벅이", contribute: ['기획 100%', '디자인 100%', '퍼블 100%'], 
      url: [url[0]],
      sort: [proj[2]],
      language: [languages[0], languages[1], languages[5], languages[3], languages[4]],
      data: [data[0]],
    }
  ]);

  return (
    <DataContext.Provider value={{ proj, languages, card_lits }}>
      {children}
    </DataContext.Provider>
  );
};
