import{n as p,c as l,m as e,j as s,s as x,u as c,a as i,r as h,g,C as a}from"./index-3c11434c.js";import{P as n}from"./ParamsBlockCard-ff560c5a.js";import{g as d,a as u,W as m,b as j,L as f}from"./selectors-62c34a22.js";const b=p.h1`
  letter-spacing: 0.38px;
  font-weight: 500;
  color: ${l.white};

  ${e.smallMobile} {
    margin-top: 66px;
    margin-bottom: 40px;
    line-height: 105.26%;
    font-size: 38px;
  }

  ${e.tablet} {
    width: 598px;
    font-size: 70px;
    line-height: 111.43%;
    letter-spacing: 0.7px;

    margin-top: 116px;
    margin-bottom: 64px;
  }

  & > span {
    position: relative;
    display: inline-block;

    & > svg {
      position: absolute;
      z-index: -1;
      width: 98px;
      height: 35px;
      left: -7px;
      top: 3px;

      ${e.tablet} {
        width: 185px;
        height: 67px;
        left: -20px;
        top: 10px;
      }
    }
  }
`;function w(){return s.jsxs(b,{children:["Transforming your"," ",s.jsxs("span",{children:["body"," ",s.jsx("svg",{children:s.jsx("use",{href:x+"#line"})})]})," ","shape with Power Pulse"]})}const v=()=>{const t=c(),r=i(d),o=i(u);return h.useEffect(()=>{t(g())},[t]),s.jsxs("main",{children:[s.jsx(m,{}),s.jsxs(j,{children:[s.jsx(w,{}),s.jsxs(f,{children:[s.jsx("li",{children:s.jsx(a,{isorange:"true",text:"Sign up",to:"/signup"})}),s.jsx("li",{children:s.jsx(a,{text:"Sign in",to:"/signin"})})]}),s.jsx(n,{type:"grey",page:"auth",data:r}),s.jsx(n,{type:"orange",page:"auth",data:o,measure:"cal"})]})]})};export{v as default};
