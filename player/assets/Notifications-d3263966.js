import{s as a,r as d,j as r,B as g,l as b}from"./index-ddca98b0.js";import{T as u}from"./Title-b2d9acc2.js";import{r as n}from"./Pagination.styles-bbf35878.js";const m=a.section`
  max-width: 1084px;
  width: 100%;
  padding: 24px 15px 106px 15px;
  margin: 0 auto;
  position: relative;
`,f=a.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--color-blue);
  padding: 4px;
  border-radius: 8px;
  gap: 12px;
  margin: 0 auto;
  width: 100%;
  max-width: 380px;
  margin-top: 20px;
  margin-bottom: 36px;
  button {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--color-white);
    background: var(--color-dark-gray);
    transition: background 0.3s linear;
    padding: 8px 16px;
    border-radius: 8px;
    &.active {
      background: var(--gradient-blue);
    }
    :hover {
      background: var(--gradient-blue);
      transition: background 0.3s linear;
    }
  }
`,v=a.div`
  p {
    margin-top: 24px;
    margin-bottom: 17px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
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
  }

  input {
    width: 100%;
    max-width: 240px;
    height: 40px;
    color: var(--color-white);
    background-color: var(--color-dark-gray);
    border: 1px solid var(--color-white);
    border-radius: 8px;
    padding: 8px 9px 8px 16px;
    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }
`;a.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1;
  flex-wrap: wrap;
`;const j=()=>{const[i,w]=d.useState([{title:"Regular Maintenance",content:"Dear Valued Customer: In order to serve you better, we plan to have a server maintenance on 04-05-2023 07:00-07:05 (GMT+8) During the maintenance period, all the games and kiosk will not be able to login.",date:"5/3/2023, 2:29:40 PM"}]),s=d.useMemo(()=>[{Header:"Main title",accessor:"title"},{Header:"Content",accessor:"content"},{Header:"Date",accessor:"date"}],[]),{getTableProps:l,getTableBodyProps:p,headerGroups:c,prepareRow:x,page:h,pageOptions:k,gotoPage:y,state:{pageIndex:P}}=n.useTable({columns:s,data:i,initialState:{pageIndex:0}},n.usePagination);return r.jsx(v,{children:r.jsxs("table",{...l(),children:[r.jsx("thead",{children:c.map(e=>r.jsx("tr",{...e.getHeaderGroupProps(),children:e.headers.map(o=>r.jsx("th",{...o.getHeaderProps(),children:o.render("Header")}))}))}),i.length?r.jsx(r.Fragment,{children:r.jsx("tbody",{...p(),children:h.map((e,o)=>(x(e),r.jsx("tr",{...e.getRowProps(),children:e.cells.map(t=>t.column.Header==="Date"?r.jsx("td",{...t.getCellProps(),children:g(t.value)}):r.jsx("td",{...t.getCellProps(),children:t.render("Cell")}))})))})}):r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx("td",{colspan:"6",style:{textAlign:"center"},children:"No data found"})})})]})})},M=()=>r.jsxs(r.Fragment,{children:[r.jsx(b,{}),r.jsxs(m,{children:[r.jsx(u,{title:"NOTIFICATIONS",textAlign:"center"}),r.jsxs(f,{children:[r.jsx("button",{className:"active",children:"Announcement"}),r.jsx("button",{children:"Maintenance"}),r.jsx("button",{children:"Profile"})]}),r.jsx("div",{style:{overflowX:"auto"},children:r.jsx(j,{})})]})]});export{M as default};
