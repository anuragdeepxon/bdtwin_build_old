import{s as o,u as l,c as n,j as e}from"./index-ddca98b0.js";import{T as a}from"./Title-b2d9acc2.js";import{a as d}from"./index-1297dd61.js";const p=o.section`
  padding: 0 15px;
`,s=o.div`
  max-width: 864px;
  width: 100%;
  padding: 24px 30px 106px 30px;
  margin: 0 auto;
  position: relative;
  margin-top: 60px;
  margin-bottom: 60px;
  background-color: #151515;
  border-radius: 8px;
`,x=o.div`
  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    margin: 16px 0;
    text-align: left;
  }
  /* width: 100%;
  max-width: 372px; */
  form {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    label {
      display: block;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 4px;
      span {
        background: var(--gradient-blue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    > div {
      width: 100%;
      max-width: 372px;
    }
  }
`;o.div`
  background: var(--color-dark-gray);
  border-radius: 12px;
  padding: 32px;
`;o.div`
  max-width: none !important;

  button[type="submit"] {
    display: block;
    width: 100%;
    max-width: 162px;
    margin-left: auto;
    border: 1px solid var(--color-blue);
    border-radius: 8px;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-white);
    padding: 12px 0;
  }
`;const i=o.div`
  position: relative;
  margin-bottom: 42px;
  .PhoneInput {
    display: flex;
    align-items: center;
    outline: 1px solid var(--color-white);
    border-radius: 8px;
    background-color: transparent;
    border: none;
    color: var(--color-white);
    width: 100%;
    padding: 8px 40px 8px 16px;
    min-height: 40px;
  
      background: #42464c;
    
  }

  select {
    outline: ${r=>r.error?"1px solid red":"1px solid var(--color-white)"};
    border-radius: 8px;
    background-color: transparent;
    border: none;
    color: var(--color-white);
    width: 100%;
    padding: 8px 40px 8px 16px;
    min-height: 40px;
    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: var(--color-white);
    }
    option {
      color: var(--color-dark-gray);
    }
  }
  input[type="tel"] {
    border-radius: 8px;
    background-color: transparent;
    border: none;
    color: var(--color-white);
    width: 100%;
    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: var(--color-white);
    }
    :disabled {
      background: #42464c;
    }
  }
`,t=o.input`
  outline: ${r=>r.error?"1px solid red":"1px solid var(--color-white)"};
  border-radius: 8px;
  background-color: transparent;
  border: none;
  color: var(--color-white);
  width: 100%;
  padding: 8px 40px 8px 16px;
  min-height: 40px;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-white);
  }
  :disabled {
    background: #42464c;
  }
`;o.div`
  color: red;
  opacity: ${r=>r.visible?"1":"0"};
  position: absolute;
  top: 120%;
`;const c=()=>{const{userInfo:r}=l(n);return e.jsxs(x,{children:[e.jsx("p",{children:"Account details"}),e.jsxs("form",{children:[e.jsxs(i,{children:[e.jsxs("label",{children:["Username",e.jsx("span",{children:"*"})]}),e.jsx(t,{placeholder:"Username",disabled:!0,value:r==null?void 0:r.user.user_name})]}),e.jsxs(i,{children:[e.jsxs("label",{children:["Email",e.jsx("span",{children:"*"})]}),e.jsx(t,{placeholder:"Email",disabled:!0,value:r==null?void 0:r.user.email})]}),e.jsxs(i,{children:[e.jsxs("label",{children:["Phone number",e.jsx("span",{children:"*"})]}),e.jsx(d,{value:r==null?void 0:r.user.phone_number,disabled:!0,placeholder:"Phone Number"}),e.jsx("input",{type:"tel",style:{display:"none"},disabled:!0})]}),e.jsxs(i,{children:[e.jsxs("label",{children:["Full name",e.jsx("span",{children:"*"})]}),e.jsx(t,{placeholder:"Full name",value:r==null?void 0:r.user.full_name,disabled:!0})]})]})]})},g=()=>e.jsx(p,{children:e.jsxs(s,{children:[e.jsx(a,{title:"PROFILE"}),e.jsx(c,{})]})});export{g as default};
