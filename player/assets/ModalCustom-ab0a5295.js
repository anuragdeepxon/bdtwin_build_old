import{s as i,d,r as a,j as t,V as l}from"./index-ddca98b0.js";const c=i.div`
  position: fixed;
  z-index: 99;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #21252a80;
  opacity: ${e=>e.isOpen?1:0};
  transition: opacity 0.1s linear;
  padding: 0 15px;
`,p=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

`,x=i.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  flex: 1;
  transform: scale(${e=>e.isOpen?1:.8});
  transition: transform 0.3s linear;
`,f=i.div`
  cursor: pointer;
  background: var(--color-dark-gray);
  border-radius: 50%;
  padding: 5px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${d.mobileX} {
    width: 25px;
    height: 25px;
    svg {
      width: 10px;
    }
  }
`,u=({children:e,closeModal:o,isOpen:s=!1})=>{const[n,r]=a.useState(!1);return a.useEffect(()=>{s&&setTimeout(()=>{r(!0)},1)},[s]),t.jsx(c,{isOpen:n,children:t.jsx(p,{className:"modalContainer",children:t.jsxs(x,{isOpen:n,children:[e,t.jsx(f,{onClick:o,children:t.jsx(l,{})})]})})})};export{u as default};
