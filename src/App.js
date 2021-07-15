import React, { useState } from "react";
import "./App.css";
import { BiSearch, BiBell, BiChevronRight, BiMinus, BiRotateLeft } from "react-icons/bi";

function MainNav() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav>
      <img src={"./logo.png"} alt="logo" class="logo" />
      <ul class="main">
        <li class="main_item">탐색</li>
        <li class="main_item">커리어 성장</li>
        <li class="main_item">직군별 연봉</li>
        <li class="main_item">이력서</li>
        <li class="main_item">매치업</li>
        <li class="main_item">프리랜서</li>
      </ul>
      <div style={{ display: "flex" }}>
        <div class="user">
          <BiSearch size="22" />
          <BiBell size="22" />
          <div class="avatar"></div>
        </div>
        <div style={{ margin: "auto 0", background: "#c4c4c4", width: "1px", height: "12px" }} />
        <div class="biz_btn">기업 서비스</div>
      </div>
    </nav>
  );
}

function SubNav() {
  return (
    <div style={{ width: "70%", height: "auto", margin: "auto" }}>
      <ul class="inner">
        <li class="sub-card">
          <h4>
            영업
            <BiChevronRight size="20" color="#999" />
          </h4>
          <ul class="sub-ul">
            <li>기업영업</li>
            <li>외부영업</li>
            <li>영업 관리자</li>
            <li>기술영업</li>
            <li>주요고객사 담당자</li>
            <li>솔루션 컨설턴트</li>
            <li>해외영업</li>
            <li class="more">
              더보기
              <BiChevronRight size="20" color="#999" />
            </li>
          </ul>
        </li>
        <li>
          <h4>
            미디어 <BiChevronRight size="20" color="#999" />
          </h4>
          <ul class="sub-ul">
            <li>콘텐츠 크리에이터</li>
            <li>PD</li>
            <li>영상 편집가</li>
            <li>에디터</li>
            <li>비디오 제작</li>
            <li>작가</li>
            <li>출판 기획자</li>
            <li class="more">
              더보기
              <BiChevronRight size="20" color="#999" />
            </li>
          </ul>
        </li>
        <li>
          <h4>
            인사 <BiChevronRight size="20" color="#999" />
          </h4>
          <ul class="sub-ul">
            <li>인사담당</li>
            <li>리크루터</li>
            <li>조직문화</li>
            <li>평가·보상</li>
            <li>헤드헌터</li>
            <li>HRD</li>
            <li>HRBP</li>
            <li class="more">
              더보기
              <BiChevronRight size="20" color="#999" />
            </li>
          </ul>
        </li>
        <li>
          <h4>
            게임 제작 <BiChevronRight size="20" color="#999" />
          </h4>
          <ul class="sub-ul">
            <li>게임 기획자</li>
            <li>게임 그래픽 디자이너</li>
            <li>모바일 게임 개발자</li>
            <li>게임 클라이언트 개발자</li>
            <li>게임 아티스트</li>
            <li>유니티 개발자</li>
            <li>게임 서버 개발자</li>
            <li class="more">
              더보기
              <BiChevronRight size="20" color="#999" />
            </li>
          </ul>
        </li>
        <li>
          <h4>
            금융 <BiChevronRight size="20" color="#999" />
          </h4>
          <ul class="sub-ul">
            <li>회계담당</li>
            <li>재무 담당자</li>
            <li>IR</li>
            <li>투자·증권</li>
            <li>재무 분석가</li>
            <li>애널리스트</li>
            <li>내부통제 담당자</li>
            <li class="more">
              더보기
              <BiChevronRight size="20" color="#999" />
            </li>
          </ul>
        </li>
        <li>
          <h4>
            엔지니어링·설계 <BiChevronRight size="20" color="#999" />
          </h4>
          <h4>
            물류·무역 <BiChevronRight size="20" color="#999" />
          </h4>
          <h4>
            제조·생산 <BiChevronRight size="20" color="#999" />
          </h4>
          <h4>
            의료·제약·바이오 <BiChevronRight size="20" color="#999" />
          </h4>
          <h4>
            교육 <BiChevronRight size="20" color="#999" />
          </h4>
          <h4>
            법률·법집행기관 <BiChevronRight size="20" color="#999" />
          </h4>
          <h4>
            식·음료 <BiChevronRight size="20" color="#999" />
          </h4>
          <h4>
            건설·시설 <BiChevronRight size="20" color="#999" />
          </h4>
          <h4>
            공공·복지 <BiChevronRight size="20" color="#999" />
          </h4>
        </li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <MainNav />
      <SubNav />
    </div>
  );
}

export default App;
