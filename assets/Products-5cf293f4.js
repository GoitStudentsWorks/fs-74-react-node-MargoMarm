import{n as d,m as i,c as h,d as w,e as Q,u as N,r as v,a as $,f as U,h as q,i as X,j as t,s as O,k as Y,o as _}from"./index-3c11434c.js";import{g as J,a as V,b as G,c as Z,d as K,S as ee,I as te,P as ne,e as oe}from"./ProductsOrExercisesItem-d1306c90.js";import{T as re}from"./Title-33af0dd7.js";import{B as se}from"./ButtonIconForInput-298556d1.js";import{c as ie}from"./formatDate-d1383d55.js";import"./BtnSubmit-c6682aee.js";import"./notiflix-aio-3.2.6.min-8882c32e.js";const ae="/fs-74-react-node-MargoMarm/assets/products_desktop_1x-48a51d2e.jpg",ce="/fs-74-react-node-MargoMarm/assets/products_desktop_2x-7123c357.jpg",de="/fs-74-react-node-MargoMarm/assets/products_desktop_3x-4c8deaec.jpg",pe={imgDx1:ae,imgDx2:ce,imgDx3:de},le=d.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 0px 20px;
  gap: 40px;
  position: relative;

  ${i.tablet} {
    gap: 32px;
    padding: 72px 32px 0px 32px;
  }

  ${i.desktop} {
    padding: 68px 81px 0px 96px;

    gap: 28px;

    background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%);
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-size: 428px 716px;
    background-image: url(${pe.imgDx1});

    ${""}
  }
`,ue=d.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  ${i.tablet} {
    gap: 32px;
  }
  ${i.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`,xe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACgSURBVHgB7c7NDYJAEAXgN64F4IWzJdCClUgHliQtWIElSAdcTFaJZDyb6DqshvC3G8IFDrzj5u03D1gyXTi/RmM6q0bhoWOo9YWL+9GJFDr5dW4HJ4SPSgF6AibuwywC2tvOy5zgn51HgrBcNHWsRP5vXHba/8iFQZmzLAukkshUqpa8abcJw3QQ1MVs1Yl4oSYm8SCDwlpvOcsCLJlPvpJwX8IciLb3AAAAAElFTkSuQmCC";d.option`
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  appearance: none;
  cursor: pointer;
`;const R=d.select`
  appearance: none;
  position: reletive;

  height: 46px;
  width: 100%;

  ${i.tablet} {
    width: 204px;
    height: 52px;
  }

  padding-left: 14px;
  padding-right: 14px;

  border-radius: 12px;
  border: 1px solid ${h.textWhite03};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  outline: none;

  color: ${h.textWhite06};
  background-color: transparent;
`,ge=d.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  ${i.tablet} {
    flex-direction: row;
    width: 664px;
  }
`,fe=d.div`
  display: none;
  ${i.desktop} {
    display: block;
    position: absolute;
    top: -24px;
    right: 12px;
    font-size: 14px;
    line-height: 128%;
    color: ${h.textWhite05};
  }
`,he=d.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${i.tablet} {
    flex-direction: row;
  }
`,F=d.div`
  position: relative;
  &::after {
    content: ' ';
    width: 18px;
    height: 18px;
    background-image: url(${xe});
    color: red;
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    pointer-events: none;
  }
`,me=d.form`
  position: relative;
  width: 100%;
  ${i.tablet} {
    width: 236px;
  }
`,be=d.input`
  height: 46px;
  width: 100%;
  ${i.tablet} {
    height: 52px;
    width: 236px;
  }
  padding-left: 14px;
  padding-right: 14px;

  border-radius: 12px;
  border: 1px solid ${h.textWhite03};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  outline: none;

  color: ${h.textWhite06};
  background-color: transparent;

  &:focus-visible {
    border: 1px solid ${h.orange};
  }

  &:focus-visible + span > svg {
    stroke: ${h.orange};
  }
`,L=d.svg`
  stroke: ${h.textWhite06};

  width: 18px;
  height: 18px;

  &:hover {
    stroke: ${h.orange};
  }
`,je=d.span`
  position: absolute;
  top: 15px;
  right: 18px;
  width: 18px;
  height: 18px;
  ${i.tablet} {
    top: 17px;
  }

  ${i.desktop} {
    top: 18px;
  }
`;var Ae="Expected a function",D=0/0,ve="[object Symbol]",ye=/^\s+|\s+$/g,Se=/^[-+]0x[0-9a-f]+$/i,Ce=/^0b[01]+$/i,$e=/^0o[0-7]+$/i,ke=parseInt,we=typeof w=="object"&&w&&w.Object===Object&&w,Pe=typeof self=="object"&&self&&self.Object===Object&&self,Ie=we||Pe||Function("return this")(),Ee=Object.prototype,Te=Ee.toString,We=Math.max,Me=Math.min,T=function(){return Ie.Date.now()};function Oe(e,n,c){var g,l,m,u,a,p,x=0,k=!1,j=!1,y=!0;if(typeof e!="function")throw new TypeError(Ae);n=z(n)||0,W(c)&&(k=!!c.leading,j="maxWait"in c,m=j?We(z(c.maxWait)||0,n):m,y="trailing"in c?!!c.trailing:y);function f(s){var b=g,C=l;return g=l=void 0,x=s,u=e.apply(C,b),u}function P(s){return x=s,a=setTimeout(r,n),k?f(s):u}function I(s){var b=s-p,C=s-x,M=n-b;return j?Me(M,m-C):M}function o(s){var b=s-p,C=s-x;return p===void 0||b>=n||b<0||j&&C>=m}function r(){var s=T();if(o(s))return S(s);a=setTimeout(r,I(s))}function S(s){return a=void 0,y&&g?f(s):(g=l=void 0,u)}function A(){a!==void 0&&clearTimeout(a),x=0,g=p=l=a=void 0}function H(){return a===void 0?u:S(T())}function E(){var s=T(),b=o(s);if(g=arguments,l=this,p=s,b){if(a===void 0)return P(p);if(j)return a=setTimeout(r,n),f(p)}return a===void 0&&(a=setTimeout(r,n)),u}return E.cancel=A,E.flush=H,E}function W(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Re(e){return!!e&&typeof e=="object"}function Fe(e){return typeof e=="symbol"||Re(e)&&Te.call(e)==ve}function z(e){if(typeof e=="number")return e;if(Fe(e))return D;if(W(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=W(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(ye,"");var c=Ce.test(e);return c||$e.test(e)?ke(e.slice(2),c?2:8):Se.test(e)?D:+e}var Le=Oe;const De=Q(Le);function ze(){const e=(o,r,S)=>{const A={};return o&&(A.title=o.trim()),r&&r!=="Categories"&&r!=="default"&&(A.category=r),S==="Recommended"&&(A.recommended=!0),S==="Not recommended"&&(A.recommended=!1),A},n=N(),[c,g]=v.useState("Categories"),[l,m]=v.useState("All"),[u,a]=v.useState(""),p=$(J);v.useEffect(()=>{const o=e(u,c,l),r=new URLSearchParams(o).toString();n(U(r)),n(q(r))},[u,c,l,n]),v.useEffect(()=>{n(X())},[n]);const x=o=>{const r=o.target.value;g(r)},k=De(o=>{a(o)},500),j=o=>{const r=o.target.value.trim();k(r)},y=o=>{const r=o.target.value;m(r)},f={backgroundColor:"rgba(28, 28, 28, 1)",color:"#EFEDE8",fontSize:"16px",lineHeight:"24px"},P=o=>{o.preventDefault();const r=o.target.value;a(r)},I=()=>{a("")};return t.jsxs(ge,{children:[t.jsx(fe,{children:"Filters"}),t.jsxs(me,{onSubmit:P,onReset:I,children:[t.jsx(be,{type:"text",autoComplete:"off",onChange:j}),t.jsx(je,{children:t.jsx(L,{children:t.jsx("use",{href:O+"#icon-search"})})}),t.jsx(se,{right:"35px",type:"reset",children:t.jsx(L,{children:t.jsx("use",{href:O+"#close"})})})]}),t.jsxs(he,{children:[t.jsx(F,{children:t.jsxs(R,{value:c,onChange:x,children:[t.jsx("option",{style:f,value:"default",children:"Categories"}),p.map(o=>t.jsx("option",{value:o,style:f,children:ie(o)},o))]})}),t.jsx(F,{children:t.jsxs(R,{value:l,onChange:y,children:[t.jsx("option",{style:f,value:"default",children:"All"}),t.jsx("option",{style:f,value:"Recommended",children:"Recommended"}),t.jsx("option",{style:f,value:"Not recommended",children:"Not recommended"})]})})]})]})}const Be=d.div`
  
  ${i.tablet} {
   width: 580px;
   margin-top: 45px;
  }
  ${i.desktop} {
    margin-top: 100px;
  }
`,Ne=d.p`
color: rgba(239, 237, 232, 0.30);
margin-bottom: 16px;
font-size: 14px;
line-height: 1.28;
  ${i.tablet} {
  
  }
  ${i.desktop} {
  
  }
`,B=d.span`
color:  #E6533C;

font-size: 14px;

line-height: 1.28; 
  ${i.tablet} {
    gap: 32px;
  }
  ${i.desktop} {

  }
`,He=()=>t.jsxs(Be,{children:[t.jsxs(Ne,{children:[" ",t.jsx(B,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),t.jsx(B,{children:"Try changing the search parameters."})]}),Ve=()=>{const[e,n]=v.useState(1),c=$(V),g=$(G),l=$(Z),m=N(),u=$(K);v.useEffect(()=>{n(1)},[u]);const a=()=>{if(e===1){n(x=>x+1);return}const p=new URLSearchParams({page:e,limit:20}).toString();m(_(`${u}&${p}`)),n(x=>x+1)};return t.jsx("main",{children:t.jsxs(le,{children:[t.jsxs(ue,{children:[t.jsx(re,{text:"Products"}),t.jsx(ze,{})]}),l.length!==0?t.jsx(ee,{width:{dt:"878"},children:t.jsx(te,{pageStart:0,loadMore:a,hasMore:c&&!g,loader:t.jsx(Y,{size:"60"},"qwe789"),useWindow:!1,children:t.jsx(ne,{children:l.map(p=>t.jsx(oe,{page:"product",data:p},p.id))})})}):t.jsx(He,{})]})})};export{Ve as default};
