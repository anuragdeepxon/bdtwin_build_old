import{s as l,u as U,c as D,a as O,b as z,r as s,j as e,i as h,m as u,V as v,W as B,E as M,l as V,f as G,C as Y,h as q}from"./index-4a5ca000.js";import{T as J}from"./Title-c23b895d.js";import{r as y,P as K}from"./index-d3753694.js";import{v as w,b as Q,e as X}from"./edit-95643cb9.js";import{S as Z}from"./SelectCustom-38ed1fea.js";import{S as ee}from"./Spinner-fb5381ed.js";const re=l.section`
  margin-bottom: 25px;
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
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
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
      padding: 15px 45px 16px 24px;

      border-right: 1px solid #fff;

      :last-child {
        border-right: 0;
      }
    }
    a {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: var(--color-blue);
    }
  }

  input {
    width: 100%;
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
`,te=l.div`
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
`,ae=l.div`
  margin-top: 16px;
  margin-bottom: 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  form {
    display: flex;
    align-items: center;
    gap: 40px;
    
    label {
      display: block;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 4px;
    }
    .radio-wrap {
      display: flex;
      align-items: center;
      gap: 30px;
      margin-top: 25px;
      & > div {
        display: flex;
        align-items: center;
        gap: 15px;
      }
      input[type="radio"] {
        width: 18px;
        accent-color: var(--color-dark-gray);
      }
    }
  }
`,ie=l.div`
  button {
    padding: 10px 24px;
    color: var(--color-white);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    background-color: var(--color-blue);
    border-radius: 8px;
    margin-top: 8px;
    margin-bottom: 20px;
  }
`,se=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,oe=l.div`
  background-color: ${o=>o==null?void 0:o.color};
  padding: 4px 8px;
  border-radius: 30px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-white);
  text-align: center;
`,ne=l.div`
  display: flex;
  align-items: stretch;
  border-radius: 8px;
  background-color: var(--color-gray);
  padding: 8px 16px;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  hr {
    width: 1px;
    background-color: #42464c;
  }
  p {
    display: flex;
    flex-direction: column;
    text-align: center;
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 4px;
    }
  }
`,le=({handleNavigation:o,WALLET_PERSON:x,item:d,balanceImg:i,EDIT_PERSON:m,roleMemo:g,editImg:n})=>e.jsxs(se,{children:[e.jsx("div",{onClick:()=>o(`${x}/${d.id}`,d),children:e.jsx("img",{src:i,alt:"balance"})}),e.jsx("div",{onClick:()=>o(`${m}/${d.id}`,g),children:e.jsx("img",{src:n,alt:"edit"})}),e.jsx("div",{onClick:()=>o(`${v}/${d.id}`,g),children:e.jsx("img",{src:w,alt:"view"})})]}),me=()=>{const o=U(),x=D(),{loading:d,players:i,userInfo:m}=O(z),[g,n]=s.useTransition(),[C,P]=s.useState(""),[b,c]=s.useState(i),[S,k]=s.useState([]),[p,j]=s.useState(!1),f=s.useCallback((r,t)=>{o(r,{state:t})},[]),E=s.useMemo(()=>[{Header:"Full name",accessor:"full_name"},{Header:"Username",accessor:"user_name"},{Header:"Agent",accessor:"parent.full_name"},{Header:"Wallets",accessor:"balance",Cell:({value:r})=>e.jsx(ne,{children:e.jsxs("p",{children:[e.jsx("span",{children:"Balance"}),e.jsx("span",{children:r})]})})},{Header:"Status",accessor:"status",Cell:r=>{const{row:{original:t}}=r,a=N(t.status);return e.jsx(oe,{color:a,children:e.jsx("p",{children:t.status})})}},{Header:"Registered",accessor:"date_time"},{Header:"Actions",accessor:"action",Cell:r=>{var a;const{row:{original:t}}=r;return((a=h())==null?void 0:a.role)===u.admin?(console.log("wdasds",t),e.jsx("div",{onClick:()=>f(`${v}/${t.id}`,t),children:e.jsx("img",{src:w,alt:"view"})})):e.jsx(le,{handleNavigation:f,WALLET_PERSON:B,item:t,balanceImg:Q,EDIT_PERSON:M,roleMemo:h,editImg:X})}}],[]),{getTableProps:T,getTableBodyProps:A,headerGroups:R,prepareRow:_,page:W,pageOptions:H,gotoPage:I,state:{pageIndex:L}}=y.useTable({columns:E,data:b,initialState:{pageIndex:0}},y.usePagination),N=s.useCallback(r=>{if((r==null?void 0:r.toLowerCase())==="active")return"#009B22";if((r==null?void 0:r.toLowerCase())==="pending")return"#BDAA00"},[]);s.useEffect(()=>(x(V(u.player)),()=>x(G(null))),[]),s.useEffect(()=>{c(i);const r=i.map(t=>{var a;return{value:(a=t==null?void 0:t.parent)==null?void 0:a.full_name,id:t==null?void 0:t.parent.id}});k([{value:"Filter by Agent",id:0},...r])},[i]);const $=({target:{value:r}})=>{P(r),n(()=>{c(i.filter(t=>t.full_name.toLowerCase().includes(r.toLowerCase())||t.user_name.toLowerCase().includes(r.toLowerCase())))})},F=r=>{n(r===0?()=>{c(i)}:()=>{c(i.filter(t=>t.parent.id===r))})};return s.useEffect(()=>{n(p?()=>{c(i.filter(r=>r.parent.id===m.user.id))}:()=>{c(i)})},[p]),d?e.jsx(ee,{}):e.jsxs(re,{children:[e.jsx(J,{title:"Players"}),e.jsxs(ae,{children:[e.jsxs("form",{action:"",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Search"}),e.jsx("input",{onChange:$,value:C,type:"text",placeholder:"Full Name, Username"})]}),e.jsxs("div",{className:"radio-wrap",children:[e.jsxs("div",{children:[e.jsx("input",{type:"radio",id:"all-agents",name:"All agents",checked:!p,onChange:()=>j(!1)}),e.jsx("label",{for:"all-agents",children:"All players"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"radio",id:"my-agents",name:"My agents",checked:p,onChange:()=>j(!0)}),e.jsx("label",{for:"my-agents",children:"My players"})]})]})]}),e.jsxs(ie,{children:[e.jsx("button",{onClick:()=>{var r;return f(`${Y}/${(r=h())==null?void 0:r.role}`,h(u.player))},children:"Created Player"}),e.jsx(Z,{width:"400px",date:S,onCustom:F,activeData:"Filter by Agent",disabled:p})]})]}),e.jsxs("div",{children:[e.jsxs("table",{...T(),children:[e.jsx("thead",{children:R.map(r=>e.jsx("tr",{...r.getHeaderGroupProps(),children:r.headers.map(t=>e.jsx("th",{...t.getHeaderProps(),children:t.render("Header")}))}))}),b.length?e.jsx(e.Fragment,{children:e.jsx("tbody",{...A(),children:W.map((r,t)=>(_(r),e.jsx("tr",{...r.getRowProps(),children:r.cells.map(a=>a.column.Header==="Registered"?e.jsx("td",{...a.getCellProps(),children:q(a.value)}):e.jsx("td",{...a.getCellProps(),children:a.render("Cell")}))})))})}):g?e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"Loading..."})})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"No data found"})})})]}),e.jsxs(te,{children:[e.jsx("div",{className:"total",children:"Total"}),e.jsx("div",{className:"price",children:"0 Players"})]}),e.jsx(K,{currentPage:L+1,totalPages:H.length,onPageChange:I})]})]})};export{me as default};
