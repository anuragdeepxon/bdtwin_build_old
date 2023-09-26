import{s,d as o,v as i,K as e,N as r,T as t,P as l,Q as c,j as a,U as p}from"./index-ddca98b0.js";const d=s.div`
  background-color: var(--color-dark-gray);
  position: relative;
  z-index: 1;
`,x=s.nav`
  
`,g=s.ul`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  @media ${o.laptop} {
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px 0;
  }
  @media ${o.mobileL} {
    gap: 10px;
  }
`,v=s.li`
  padding: 14px 0;

  :hover {
    a {
      color: var(--color-blue);
      transition: var(--transition);
      path {
        transition: var(--transition);
        fill: var(--color-blue);
      }
    }
  }
  a {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-white);
    display: flex;
    align-items: center;
    gap: 16px;

    &.active {
      color: var(--color-blue);
      transition: var(--transition);
      path {
        transition: var(--transition);
        fill: var(--color-blue);
      }
    }
  }
  @media ${o.laptop} {
    padding: 0;

    a {
      font-size: 18px;
      gap: 10px;
      svg {
        width: 25px;
      }
    }
  }
  @media ${o.mobileL} {
    a {
      font-size: 14px;
      gap: 5px;
      svg {
        width: 20px;
      }
    }
  }
`,m=[{id:i(),url:"/games/sports",icon:e(),name:"Sports"},{id:i(),url:"/games/casino",icon:r(),name:"Casino"},{id:i(),url:"/games/tables",icon:t(),name:"Tables"},{id:i(),url:"/games/slots",icon:l(),name:"Slots"},{id:i(),url:"/games/fishing",icon:c(),name:"Fishing"}],u=()=>a.jsx(d,{children:a.jsx(x,{className:"main-container",children:a.jsx(g,{children:m.map(n=>a.jsx(v,{children:a.jsxs(p,{to:n.url,children:[n.icon,a.jsx("p",{children:n.name})]})},n.id))})})});export{u as default};
