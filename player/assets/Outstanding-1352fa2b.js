import{s,d as O,r as o,B as l,j as e}from"./index-ddca98b0.js";import{T as S}from"./Title-b2d9acc2.js";import{r as x}from"./Pagination.styles-bbf35878.js";import{P as B}from"./Pagination-57f3c502.js";const E=s.section`
  padding: 0 15px;
`,N=s.div`
  max-width: 1124px;
  width: 100%;
  padding: 24px 30px 106px 30px;
  margin: 0 auto;
  position: relative;
  margin-top: 60px;
  margin-bottom: 60px;
  background-color: #151515;
  border-radius: 8px;
`,R=s.div`
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
    thead {
      border-radius: 8px;
      th {
        border-bottom: 1px solid var(--color-white);
      }
      tr {
        th {
          :first-child {
            border-top-left-radius: 8px;
            width: 60%;
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
  div:has(input) {
    margin-top: 16px;
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
  @media ${O.tabletL} {
    th,
    td {
      font-size: 12px;
      padding: 10px 10px 10px 10px;
      border-right: 1px solid #fff;
    }
  }
`,z=s.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`,A=()=>{const c=o.useMemo(()=>[{Header:"Product",accessor:"name"},{Header:"Bet count",accessor:"betCount"},{Header:"Valid turnover",accessor:"validTurnover"}],[]),[d,h]=o.useState([]),[g,u]=o.useState(""),[b,m]=o.useState("");o.useCallback(({date:t="",date2:a=""})=>{const r=({d1:i,d2:C,d3:n})=>{let H=i?new Date(i).getTime():-864e13,p=new Date(C).getTime(),I=n?new Date(n).getTime():864e13;if(H<=p&&I>=p)return!0},k=d.filter(i=>r({d1:t,d2:l(i.dob.date),d3:a}));h(k)},[g,b,d]);const{getTableProps:f,getTableBodyProps:j,headerGroups:v,prepareRow:w,page:P,pageOptions:y,gotoPage:D,state:{pageIndex:T}}=x.useTable({columns:c,data:d,initialState:{pageIndex:0}},x.usePagination);return e.jsxs(R,{children:[e.jsxs(z,{children:[e.jsx("input",{type:"date",name:"",id:"",onChange:t=>u(t.target.value)}),e.jsx("input",{type:"date",name:"",id:"",onChange:t=>m(t.target.value)})]}),e.jsx("p",{children:"User: john.wick"}),e.jsxs("div",{style:{overflowX:"auto"},children:[e.jsxs("table",{...f(),children:[e.jsx("thead",{children:v.map(t=>e.jsx("tr",{...t.getHeaderGroupProps(),children:t.headers.map(a=>e.jsx("th",{...a.getHeaderProps(),children:a.render("Header")}))}))}),d.length?e.jsx(e.Fragment,{children:e.jsx("tbody",{...j(),children:P.map((t,a)=>(w(t),e.jsx("tr",{...t.getRowProps(),children:t.cells.map(r=>r.column.Header==="Date"?e.jsx("td",{...r.getCellProps(),children:l(r.value)}):e.jsx("td",{...r.getCellProps(),children:r.render("Cell")}))})))})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colspan:"6",style:{textAlign:"center"},children:"No data found"})})})]}),e.jsx(B,{currentPage:T+1,totalPages:y.length,onPageChange:D})]})]})},$=()=>e.jsx(E,{children:e.jsxs(N,{children:[e.jsx(S,{title:"OUTSTANDING"}),e.jsx(A,{})]})});export{$ as default};
