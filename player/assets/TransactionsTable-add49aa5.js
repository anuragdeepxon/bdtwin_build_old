import{s as d,d as L,r as o,B as p,j as e}from"./index-ddca98b0.js";import{r as x}from"./Pagination.styles-bbf35878.js";import{P as S}from"./Pagination-57f3c502.js";const W=d.div`
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
      /* border: 1px solid var(--color-white); */
      /* border: 1px solid var(--color-white); */
      /* border-radius: 8px; */
      border-right: 1px solid #fff;
      text-wrap: nowrap;

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
  @media ${L.tabletL} {
    th,
    td {
      font-size: 12px;
      padding: 10px 10px 10px 10px;
      border-right: 1px solid #fff;
    }
  }
`,z=d.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1;
  flex-wrap: wrap;
`,B=d.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  /* justify-content: flex-end; */
  border: 1px solid #ffffff;
  border-top: none;
  border-radius: 0px 0px 8px 8px;
  max-width: 378px;
  width: 100%;
  div {
    margin: 0px;
    padding: 16px 64px 16px 24px;
  }
`,E=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  gap:20px;
  flex-wrap: wrap;
`,F=d.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  button {
    padding: 8px 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid var(--color-blue);
    color: var(--color-white);
    border-radius: 8px;
    background-color: var(--color-dark-gray);
  }
`,R=()=>{const c=o.useMemo(()=>[{Header:"Date",accessor:"name"},{Header:"Valid turnover",accessor:"validTurnover"},{Header:"Win/Loss",accessor:"winLoss"},{Header:"Commission",accessor:"commission",Footer:"Grand total"}],[]),[i,h]=o.useState([]),[g,b]=o.useState(""),[u,m]=o.useState("");o.useCallback(({date:r="",date2:a=""})=>{const t=({d1:s,d2:C,d3:n})=>{let H=s?new Date(s).getTime():-864e13,l=new Date(C).getTime(),I=n?new Date(n).getTime():864e13;if(H<=l&&I>=l)return!0},T=i.filter(s=>t({d1:r,d2:p(s.dob.date),d3:a}));h(T)},[g,u,i]);const{getTableProps:f,getTableBodyProps:w,headerGroups:j,prepareRow:v,page:y,pageOptions:P,gotoPage:k,state:{pageIndex:D}}=x.useTable({columns:c,data:i,initialState:{pageIndex:0}},x.usePagination);return e.jsxs(W,{children:[e.jsxs(E,{children:[e.jsxs(z,{children:[e.jsx("input",{type:"date",name:"",id:"",onChange:r=>b(r.target.value)}),e.jsx("input",{type:"date",name:"",id:"",onChange:r=>m(r.target.value)})]}),e.jsxs(F,{children:[e.jsx("button",{children:"Today"}),e.jsx("button",{children:"Yesterday"}),e.jsx("button",{children:"This week"}),e.jsx("button",{children:"Last week"})]})]}),e.jsx("p",{children:"User: john.wick"}),e.jsxs("div",{style:{overflowX:"auto"},children:[e.jsxs("table",{...f(),children:[e.jsx("thead",{children:j.map(r=>e.jsx("tr",{...r.getHeaderGroupProps(),children:r.headers.map(a=>e.jsx("th",{...a.getHeaderProps(),children:a.render("Header")}))}))}),i.length?e.jsx(e.Fragment,{children:e.jsx("tbody",{...w(),children:y.map((r,a)=>(v(r),e.jsx("tr",{...r.getRowProps(),children:r.cells.map(t=>t.column.Header==="Date"?e.jsx("td",{...t.getCellProps(),children:p(t.value)}):e.jsx("td",{...t.getCellProps(),children:t.render("Cell")}))})))})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colspan:"6",style:{textAlign:"center"},children:"No data found"})})})]}),e.jsxs(B,{children:[e.jsx("div",{className:"total",children:"Grand total"}),e.jsx("div",{className:"price",children:"$2222"})]}),e.jsx(S,{currentPage:D+1,totalPages:P.length,onPageChange:k})]})]})};export{R as default};
