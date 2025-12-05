import{r as i,j as e,n as h,d as t,o as g,p as b,L as j}from"./index-BRKAISFI.js";import{T as u}from"./ThemeToggle-29KJfNok.js";const f=t.div`
  width: 100%;
  padding: 24px;
`,m=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 16px 20px;
  background: var(--glass);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  backdrop-filter: blur(10px);
`,v=t.h1`
  margin: 0;
`,y=t(j)`
  color: var(--text);
  text-decoration: none;
`,w=t.table`
  width: 100%;
  border-collapse: collapse;
  background: var(--glass);
  border: 1px solid var(--glass-border);
  box-shadow: 0 10px 30px var(--shadow);
  backdrop-filter: blur(10px);
`,n=t.th`
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid var(--glass-border);
  color: var(--muted);
`,a=t.td`
  padding: 12px;
  border-bottom: 1px solid var(--glass-border);
  vertical-align: middle;
`,c=t.button`
  padding: 8px 14px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  margin-right: 6px;
  font-size: 0.9rem;
  box-shadow: 0 10px 20px var(--shadow);
`,k=t(c)`
  background: linear-gradient(135deg, var(--accent-2), #1d4ed8);
  color: white;
  &:hover { opacity: 0.92; }
`,T=t(c)`
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  &:hover { opacity: 0.92; }
`,B=()=>{const[s,d]=i.useState([]);i.useEffect(()=>{document.title="回收站"},[]);const l=async()=>{try{const r=await h();d(r.data)}catch(r){console.error("Error fetching trash:",r)}};i.useEffect(()=>{l()},[]);const x=async r=>{try{await g(r.toString()),d(s.filter(o=>o.id!==r)),alert("Movie restored!")}catch(o){console.error("Error restoring movie:",o),alert("恢复失败")}},p=async r=>{if(window.confirm("确定要永久删除该电影吗？此操作不可恢复。"))try{await b(r.toString()),d(s.filter(o=>o.id!==r))}catch(o){console.error("Error deleting movie:",o),alert("删除失败")}};return e.jsxs(f,{children:[e.jsxs(m,{children:[e.jsx(v,{children:"回收站"}),e.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"center"},children:[e.jsx(y,{to:"/admin",children:"返回管理后台"}),e.jsx(u,{})]})]}),s.length===0?e.jsx("p",{children:"回收站为空。"}):e.jsxs(w,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(n,{style:{width:"100px",padding:"12px 12px 12px 30px"},children:"ID"}),e.jsx(n,{children:"片名"}),e.jsx(n,{children:"删除时间"}),e.jsx(n,{children:"操作"})]})}),e.jsx("tbody",{children:s.map(r=>e.jsxs("tr",{children:[e.jsx(a,{style:{padding:"12px 12px 12px 30px"},children:r.id}),e.jsx(a,{children:r.title}),e.jsx(a,{children:new Date(r.updatedAt||"").toLocaleDateString("zh-CN")}),e.jsxs(a,{children:[e.jsx(k,{onClick:()=>x(r.id),children:"恢复"}),e.jsx(T,{onClick:()=>p(r.id),children:"永久删除"})]})]},r.id))})]})]})};export{B as default};
