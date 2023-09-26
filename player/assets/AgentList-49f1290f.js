import{s as y,d as S,e as _,u as k,c as C,D as L,r as a,j as e,L as M,M as l,E as N,F as E,H,S as T,C as I}from"./index-ddca98b0.js";import{T as d}from"./Title-b2d9acc2.js";import{r as h}from"./Pagination.styles-bbf35878.js";import{P as R}from"./Pagination-57f3c502.js";const D=y.section`
  max-width: 1084px;
  width: 100%;
  padding: 24px 15px 106px;
  margin: 0px auto;
  position: relative;
  h2 {
    margin: 50px 0;
  }
  table {
    border-spacing: 0;
    width: 100%;
    border: 1px solid var(--color-white);
    border-radius: 8px;
    border-bottom-right-radius: 0px;
    thead {
      border-radius: 8px;
      th {
        border-bottom: 1px solid var(--color-white);
      }
      tr {
        th {
          :first-child {
            border-top-left-radius: 8px;
          }
          :last-child {
            border-top-right-radius: 8px;
          }
        }
      }
    }
    tbody {
      td {
        border-bottom: 1px solid var(--color-white);
        background-color: var(--color-dark-gray);
        text-align: center;
      }
      tr:last-child {
        td {
          :first-child {
            border-bottom-left-radius: 8px;
          }
          :last-child {
            border-bottom-right-radius: 8px;
          }
        }
      }
    }
    tr {
      background-color: var(--color-gray);
      border-radius: 8px;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 16px 64px 16px 24px;
      border-right: 1px solid #fff;
      :last-child {
        border-right: 0;
      }
    }
    @media ${S.tabletL} {
     
      th,
      td {
        font-size: 12px;
        padding: 10px 10px 10px 10px;
        border-right: 1px solid #fff;
        
      }
    }
  }
`,F=()=>e.jsxs("div",{children:[e.jsx(d,{title:"Admin",textAlign:"center"}),e.jsx("div",{children:e.jsxs("table",{role:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{role:"row",children:[e.jsx("th",{colSpan:1,role:"columnheader",children:"Admin Name"}),e.jsx("th",{colSpan:1,role:"columnheader",children:"Mobile Number"}),e.jsx("th",{colSpan:1,role:"columnheader",children:"Complain"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{role:"row",children:[e.jsx("td",{role:"cell",children:"Admin"}),e.jsx("td",{role:"cell",children:"8801752720544"}),e.jsxs("td",{role:"cell",children:[e.jsx("link",{rel:"noopener noreferrer",href:"https://api.whatsapp.com/send?phone=13213215646",target:"_blank"}),e.jsx(l,{})]})]})})]})})]}),B=({user:r})=>{var o,n;return e.jsxs("div",{children:[e.jsx(d,{title:"Your Manager",textAlign:"center"}),e.jsx("div",{children:e.jsxs("table",{role:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{role:"row",children:[e.jsx("th",{colSpan:1,role:"columnheader",children:"Agent Name"}),e.jsx("th",{colSpan:1,role:"columnheader",children:"Mobile Number"}),e.jsx("th",{colSpan:1,role:"columnheader",children:"Complain"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{role:"row",children:[e.jsx("td",{role:"cell",children:(o=r==null?void 0:r.parent)==null?void 0:o.user_name}),e.jsx("td",{role:"cell",children:(n=r==null?void 0:r.parent)==null?void 0:n.phone_number}),e.jsxs("td",{role:"cell",children:[e.jsx("link",{rel:"noopener noreferrer",href:"https://api.whatsapp.com/send?phone=13213215646",target:"_blank"}),e.jsx(l,{})]})]})})]})})]})},z=()=>{const r=_(),{userInfo:o,agents:n,loading:p}=k(C),x=L(),[i,g]=a.useState([{user_name:"Admin",phone_number:"+8801752720544"}]),m=a.useMemo(()=>[{Header:"Agent Name",accessor:"user_name"},{Header:"Mobile Number",accessor:"phone_number"},{Header:"Complain",accessor:"whats",Cell:t=>{const{row:{original:s}}=t;return e.jsx(M,{to:`https://api.whatsapp.com/send?phone=${parseInt(s.phone_number)}`,target:"_blank",rel:"noopener noreferrer",children:e.jsx(l,{})})}}],[]),{getTableProps:j,getTableBodyProps:b,headerGroups:u,prepareRow:f,page:A,pageOptions:w,gotoPage:P,state:{pageIndex:v}}=h.useTable({columns:m,data:i,initialState:{pageIndex:0}},h.usePagination);return a.useEffect(()=>(r(N(E.agent)),()=>r(H())),[]),a.useEffect(()=>{n.length&&g(n)},[n]),p?e.jsx(T,{}):e.jsx(e.Fragment,{children:e.jsxs(D,{children:[e.jsx("div",{children:x.pathname===I?e.jsx(F,{}):e.jsx(B,{user:o==null?void 0:o.user})}),e.jsx(d,{title:"Agents List",textAlign:"center"}),e.jsxs("table",{...j(),children:[e.jsx("thead",{children:u.map(t=>e.jsx("tr",{...t.getHeaderGroupProps(),children:t.headers.map(s=>e.jsx("th",{...s.getHeaderProps(),children:s.render("Header")}))}))}),i.length?e.jsx(e.Fragment,{children:e.jsx("tbody",{...b(),children:A.map((t,s)=>(f(t),e.jsx("tr",{...t.getRowProps(),children:t.cells.map(c=>e.jsx("td",{...c.getCellProps(),children:c.render("Cell")}))})))})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colspan:"6",style:{textAlign:"center"},children:"No data found"})})})]}),e.jsx(R,{currentPage:v+1,totalPages:w.length,onPageChange:P})]})})};export{z as default};
