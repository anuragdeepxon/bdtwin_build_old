import{s as i,I as w,r as n,j as t}from"./index-4a5ca000.js";const v=i.div`
  position: relative;
  background: ${e=>e!=null&&e.disabled?"#42464C":"var(--color-dark-gray)"};
  border: 1px solid var(--color-white);
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  width: ${e=>e==null?void 0:e.width};
  pointer-events: ${e=>e!=null&&e.disabled?"none":"auto"};
`,k=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  img {
    display: block;
    object-fit: cover;
    height: auto;
  }
`,j=i.div`
  background: var(--color-dark-gray);
  border-radius: 0px 0px 12px 12px;
  height: 0px;
  position: absolute;
  overflow: hidden;
  transition: all 0.3s linear 0s;
  margin-top: 9px;
  z-index: 9;
  left: -1px;
  width: 101%;
  border: 1px solid #fff;
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* gap: 24px; */

    li {
      padding: 8px 16px;
      width: 100%;
      cursor: pointer;
      transition: var(--transition);
      :hover {
        background-color: var(--color-gray);
      }
    }
  }
`,B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABfSURBVHgB7c1BDYAwFAPQHhCABCThaEEBEpCCBCQMJ6U7kZAMBhmBQ1/S2/8tYGb/QrJPwRtUHLgLqOlQXndERRPzRjyl51aZeW1Jt7hLT5HlYq6nOdkYlA5lVpjZdzZaLaoaMOhM9gAAAABJRU5ErkJggg==",m=({onCustom:e,date:a,activeData:d,width:s,key:C="",disabled:A=!1})=>{console.log("date :",a);const{headerRef:c,childrenRef:h,otherRef:x,setShowLinks:o,showLinks:g}=w(),[l,u]=n.useState(d),f=n.useCallback((r,p)=>{o(b=>!b),u(r),e(p)},[l]);return t.jsxs(v,{width:s,disabled:A,children:[t.jsxs(k,{onClick:()=>o(r=>!r),ref:x,children:[t.jsx("p",{children:l}),t.jsx("img",{src:B,alt:"arrow"})]}),t.jsx(j,{ref:c,style:g?null:{border:"none"},children:t.jsx("ul",{ref:h,children:a.map(r=>t.jsx("li",{onClick:()=>f(r.value,r.id),children:r.value},r.id))})})]})};export{m as S};
