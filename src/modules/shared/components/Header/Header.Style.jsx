import styled from "styled-components";

const coPink = "#C92071";
const coGray = "#f8f8f8";
const coDarkGray = "#1F1F1F";

export const HeaderStyle = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 192px;
    background-color: ${coGray};
    padding-top: 25px;
   

  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
  }

  .logo-container {
    display: flex;
    align-items: center;
  }

  .digital-store-p {
    width: 212px;
    height: 44px;
    font-size: 33px;
    color: ${coPink};
    font-weight: 600;
  }

  .search-bar {
    width: 497px;
    height: 64.8px;
    font-size: 17.28px;
    background-color: ${coGray};
    border-radius: 8.64px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-input {
    font-size: 16px;
    background-color: ${coGray};
    font-weight: 400;
    border: none;
    width: 85%;
    height: 80%;
    margin-right: 2%;
    outline: none;
  }

  .link-cadastrar {
    margin-left: 48px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.75px;
    cursor: pointer;
    text-decoration-line: underline;
    color: ${coDarkGray};
  }

  button {
    width: 123.12px;
    height: 43.2px;
    border-radius: 8.64px;
    background: ${coPink};
    border-style: none;
    margin-left: 32.56px;
    cursor: pointer;
    color: ${coGray};
  }

  button:hover{
    background-color: ${coDarkGray};
    color:${coPink}
  }

  .carrinho {
    padding-left: 2rem;
  }

  .nav-bar {
    display: flex;
    justify-content: space-between;
    color: ${coDarkGray};
  }

  .nav-bar ul {
    display: flex;
    list-style: none;
    gap: 32px;
    padding: 0;
  }

  .nav-bar li:hover {
    color: ${coPink};
    cursor: pointer;
    text-decoration: underline;
  }
`;
