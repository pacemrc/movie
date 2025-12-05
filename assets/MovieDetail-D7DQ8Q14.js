import{h as u,r as s,j as e,l as v,d as t,L as y}from"./index-BRKAISFI.js";import{T as j}from"./ThemeToggle-29KJfNok.js";const w=t.div`
  width: 100%;
  padding: 32px;
  min-height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
`,k=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding: 20px 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: 0 4px 20px var(--shadow-light);
`,z=t(y)`
  color: var(--text);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 12px;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--bg-1);
    color: var(--primary-1);
  }
`,S=t.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 40px;
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`,I=t.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 20px 60px var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 80px var(--shadow);
  }
`,T=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,M=t.h1`
  margin: 0;
  font-size: 2.5rem;
  letter-spacing: -0.025em;
  line-height: 1.2;
  background: linear-gradient(135deg, var(--text), var(--muted));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`,C=t.div`
  display: flex;
  gap: 12px;
  color: var(--muted);
  font-size: 1rem;
  flex-wrap: wrap;
  align-items: center;
`,g=t.span`
  color: var(--border);
  font-weight: bold;
`,D=t.span`
  background: var(--bg-1);
  border: 1px solid var(--border);
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--primary-1);
    color: white;
    border-color: var(--primary-1);
  }
`,E=t.div`
  font-size: 1.5rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 8px;
`,Y=t.span`
  color: ${o=>o.$filled?"#f59e0b":"#e5e7eb"};
  font-size: 1.5rem;
  margin-right: 2px;
`,d=t.div`
  margin-top: 24px;
  padding: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: 0 4px 20px var(--shadow-light);
`,l=t.h3`
  margin: 0 0 16px 0;
  font-size: 1.3rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-1), var(--primary-2));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`,m=t.blockquote`
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0;
  padding: 20px 24px;
  background: linear-gradient(135deg, var(--bg-1), var(--bg-2));
  border-left: 4px solid var(--primary-1);
  border-radius: 12px;
  position: relative;
  
  &:before {
    content: '"';
    font-size: 3rem;
    position: absolute;
    top: -10px;
    left: 12px;
    color: var(--primary-1);
    opacity: 0.3;
  }
`,L=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  margin-top: 16px;
`,N=t.img`
  width: 100%;
  height: 130px;
  object-fit: cover;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 15px 30px var(--shadow);
    border-color: var(--primary-1);
  }
`,$=t.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
  backdrop-filter: blur(8px);
  animation: fadeIn 0.3s ease-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`,q=t.img`
  max-width: 90%;
  max-height: 90vh;
  border-radius: 16px;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.5);
  animation: zoomIn 0.3s ease-out;
  
  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale(0.9) translateY(20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`,H=()=>{var x;const{id:o}=u(),[r,h]=s.useState(null),[p,c]=s.useState(null);s.useEffect(()=>{r?document.title=`电影详情 - ${r.title}`:document.title="电影详情"},[r]);const f=async a=>{try{const i=await v(a);h(i.data)}catch(i){console.error("Error fetching movie:",i)}};s.useEffect(()=>{o&&f(o)},[o]);const b=()=>{if(!r)return null;const a=Number(r.rating);if(isNaN(a)||a<1||a>5)return null;const i=[];for(let n=1;n<=5;n++)i.push(e.jsx(Y,{$filled:n<=a,children:"★"},n));return i};return r?e.jsxs(w,{children:[e.jsxs(k,{children:[e.jsx(z,{to:"/",children:"← 返回列表"}),e.jsx(j,{})]}),e.jsxs(S,{children:[e.jsxs("div",{children:[e.jsx(I,{src:r.coverImage||"https://dummyimage.com/300x450/000/fff&text=暂无封面",alt:r.title,loading:"lazy"}),r.images&&r.images.length>0&&e.jsxs(d,{children:[e.jsx(l,{children:"截图"}),e.jsx(L,{children:r.images.map(a=>e.jsx(N,{src:a.url,alt:"电影场景",onClick:()=>c(a.url),loading:"lazy"},a.id))})]})]}),e.jsxs(T,{children:[e.jsx(M,{children:r.title}),e.jsx(E,{style:{marginTop:"5px"},children:b()}),e.jsx("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap",marginTop:"5px"},children:(x=r.genres)==null?void 0:x.map(a=>e.jsx(D,{children:a.name},a.id))}),e.jsxs(C,{style:{marginTop:"5px"},children:[e.jsx("span",{children:r.releaseYear}),e.jsx(g,{children:"•"}),e.jsx("span",{children:r.city}),e.jsx(g,{children:"•"}),e.jsxs("span",{children:["观看于 ",new Date(r.viewedDate).toLocaleDateString("zh-CN")]})]}),e.jsxs(d,{children:[e.jsx(l,{children:"经典语录"}),r.quote?e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:r.quote.split("; ").map((a,i)=>e.jsx(m,{children:a.trim()},i))}):e.jsx(m,{children:"暂无语录"})]}),e.jsxs(d,{children:[e.jsx(l,{children:"影评"}),e.jsx("div",{style:{lineHeight:"1.7",whiteSpace:"pre-wrap",color:"var(--text-secondary)",fontSize:"1.05rem",padding:"8px 0"},children:r.review||"暂无影评"})]}),r.actors&&r.actors.length>0&&e.jsxs(d,{children:[e.jsx(l,{children:"演职员"}),e.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",fontSize:"1.05rem",color:"var(--text-secondary)"},children:r.actors.map(a=>e.jsx("span",{style:{background:"var(--bg-1)",padding:"6px 14px",borderRadius:"999px",border:"1px solid var(--border)"},children:a.name},a.id))})]})]})]}),p&&e.jsx($,{onClick:()=>c(null),children:e.jsx(q,{src:p,alt:"预览"})})]}):e.jsx("div",{children:"加载中..."})};export{H as default};
