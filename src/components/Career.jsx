import React from 'react';


function Career() { 

  return(
    <article className="career grid">
      <section>
          <h2 className="bg-yellow">👩‍🎓 학력 및 경력</h2>
          <ul className="list dot">
            <li><p>2012 고등학교 졸업</p></li>
            <li><p>2013.01 ~ 2014.07 이태인 마취통증 의학과</p></li>
            <li><p>2014.07 ~ 2017.12 이한솔 성형외과</p></li>
            <li>
                <p className="bg bg-blue">2018.09 ~ 2019.01 UI/UX 엔지니어링 교육 🧑‍🏫</p>
                <div className="toggle">
                <button type="button" className="toggle-summary">한국 IT아카데미 국비지원 교육 수강</button>
                <ul class="toggle-detail list depth">
                  <li>웹 개발 환경 분석</li>
                  <li>UI/UX 전략 수립</li>
                </ul>
                </div>
            </li>
            <li>
                <p className="bg bg-orange">2019.02 ~ 2021.03 알디</p>
                <ul class="list depth">
                <li>e-커머스 제작</li>
                <li>미디어 커머스(자체 플랫폼) 제작 및 운영</li>
                <li>플랫폼 유지 보수</li>
                <li>배너 제작 (홈페이지 배너 및 플랫폼 이벤트 배너)</li>
                </ul>
            </li>
            <li>
                <p className="bg bg-orange">2021.04 ~ 2024.04 가연결혼정보</p>
                <ul class="list depth">
                <li className="txt-purple">비고:  법인명 변경으로 <em className="tag-small tag-gray">파워세일</em> 소속</li>
                <li>자사몰 유지보수 및 운영 (홈페이지 & 어드민)</li>
                <li>광고성 랜딩페이지 제작</li>
                <li>제휴사 페이지 제작</li>
                <li>이벤트성 배너 제작</li>
                </ul>
            </li>
          </ul>
      </section>
      <section>
          <h2 className="bg-yellow">🪧 자격증</h2>
          <ul className="list dot">
            <li><p>2018.09 컴퓨터 활용능력 2급</p></li>
            <li><p>2018.11 GTQ 1급</p></li>
            <li><p>2020.12 웹디자인 기능사</p></li>
          </ul>
      </section>
    </article>
  )
}


export default Career;