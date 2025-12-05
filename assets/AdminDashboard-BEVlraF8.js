import{r as l,A as L,g as M,j as e,L as b,d as s,e as z,i as E,a as Y}from"./index-Cedc9Ux5.js";import{T as D}from"./ThemeToggle-s2QBKYky.js";const R=s.div`
  width: 100%;
  padding: 32px;
  max-width: 1400px;
  margin: 0 auto;
`,A=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
  padding: 20px 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: 0 4px 20px var(--shadow-light);
`,B=s.h1`
  margin: 0;
  font-size: 2rem;
  background: linear-gradient(135deg, var(--primary-1), var(--primary-2));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`,N=s(b)`
  padding: 12px 24px;
  background: linear-gradient(135deg, var(--accent-2), #1d4ed8);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  box-shadow: 0 8px 25px var(--shadow-light);
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.92;
    transform: translateY(-2px);
    box-shadow: 0 12px 35px var(--shadow);
  }
`,W=s.table`
  width: 100%;
  border-collapse: collapse;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px var(--shadow-light);
`,c=s.th`
  text-align: left;
  padding: 16px 20px;
  border-bottom: 2px solid var(--border);
  color: var(--muted);
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: var(--bg-1);
`,x=s.td`
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  vertical-align: middle;
  font-size: 0.95rem;
  transition: background-color 0.2s ease;
`,m=s.tr`
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(139, 92, 246, 0.05);
  }
  
  &:last-child td {
    border-bottom: none;
  }
`,w=s.button`
  padding: 8px 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 4px 15px var(--shadow-light);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px var(--shadow);
  }
`,I=s(b)`
  padding: 8px 16px;
  background: linear-gradient(135deg, var(--accent-2), #1d4ed8);
  color: #fff;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  margin-right: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 4px 15px var(--shadow-light);
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.95;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px var(--shadow);
  }
`,O=s(w)`
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  
  &:hover {
    opacity: 0.95;
  }
`,U=s(w)`
  background: linear-gradient(135deg, #6b7280, #374151);
  color: white;
  
  &:hover {
    opacity: 0.95;
  }
`,P=s.div`
  color: var(--muted);
  font-size: 0.95rem;
  margin-right: 16px;
  font-weight: 500;
`,F=()=>{const[u,f]=l.useState([]),[t,h]=l.useState(1),[g,y]=l.useState(10),[d,j]=l.useState(1),p=l.useContext(L);l.useEffect(()=>{document.title="电影管理后台"},[]),l.useEffect(()=>{v()},[t,g]);const v=async()=>{try{const a=await M({page:t,limit:g});f(a.data.data),j(a.data.totalPages)}catch(r){console.error("Error fetching movies:",r)}},S=async()=>{try{const r=await z(),a=JSON.stringify(r.data,null,2),o=new Blob([a],{type:"application/json"}),n=URL.createObjectURL(o),i=document.createElement("a"),C=new Date().toISOString().slice(0,10).replace(/-/g,"");i.href=n,i.download=`movies-backup-${C}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(n),alert("导出成功")}catch{alert("导出失败")}},T=async r=>{var o;const a=(o=r.target.files)==null?void 0:o[0];if(a)try{const n=await a.text(),i=JSON.parse(n);await E(i),alert("导入成功"),v()}catch{alert("导入失败")}finally{r.target.value=""}},k=async r=>{if(window.confirm("确认删除该电影吗？"))try{await Y(r.toString()),f(u.filter(a=>a.id!==r))}catch(a){console.error("Error deleting movie:",a),alert("删除失败")}};return e.jsxs(R,{children:[e.jsxs(A,{children:[e.jsx(B,{children:"电影管理"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(b,{to:"/admin/trash",style:{marginRight:"10px",color:"#666",textDecoration:"none"},children:"🗑 回收站"}),e.jsx(N,{to:"/admin/add",children:"新增电影"}),e.jsx("button",{onClick:S,style:{marginLeft:"10px",padding:"10px 20px",borderRadius:"10px",border:"none",background:"linear-gradient(135deg, var(--accent-2), #1d4ed8)",color:"#fff",cursor:"pointer",fontSize:"0.95rem",fontWeight:"500",boxShadow:"0 4px 15px var(--shadow-light)",transition:"all 0.2s ease"},onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-2px)",r.currentTarget.style.boxShadow="0 8px 25px var(--shadow)"},onMouseLeave:r=>{r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="0 4px 15px var(--shadow-light)"},children:"导出数据"}),e.jsxs("label",{style:{marginLeft:"10px"},children:[e.jsx("span",{style:{padding:"10px 20px",borderRadius:"10px",background:"linear-gradient(135deg, var(--accent), #059669)",color:"#fff",cursor:"pointer",fontSize:"0.95rem",fontWeight:"500",boxShadow:"0 4px 15px var(--shadow-light)",transition:"all 0.2s ease",display:"inline-block"},onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-2px)",r.currentTarget.style.boxShadow="0 8px 25px var(--shadow)"},onMouseLeave:r=>{r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="0 4px 15px var(--shadow-light)"},children:"导入数据"}),e.jsx("input",{type:"file",accept:"application/json",onChange:T,style:{display:"none"}})]}),(p==null?void 0:p.user)&&e.jsxs(e.Fragment,{children:[e.jsxs(P,{children:["当前用户: ",p.user.username]}),e.jsx(U,{onClick:p.logout,title:"退出登录",children:"退出"})]}),e.jsx(D,{})]})]}),e.jsxs(W,{children:[e.jsx("thead",{children:e.jsxs(m,{children:[e.jsx(c,{children:"片名"}),e.jsx(c,{children:"观看日期"}),e.jsx(c,{children:"发行年份"}),e.jsx(c,{children:"评分"}),e.jsx(c,{children:"更新日期"}),e.jsx(c,{children:"操作"})]})}),e.jsx("tbody",{children:u.map(r=>e.jsxs(m,{children:[e.jsx(x,{children:r.title}),e.jsx(x,{children:new Date(r.viewedDate).toLocaleDateString("zh-CN")}),e.jsx(x,{children:r.releaseYear}),e.jsx(x,{children:r.rating}),e.jsx(x,{children:r.updatedAt?new Date(r.updatedAt).toLocaleDateString("zh-CN"):"-"}),e.jsxs(x,{children:[e.jsx(I,{to:`/admin/edit/${r.id}`,children:"编辑"}),e.jsx(O,{onClick:()=>k(r.id),children:"删除"})]})]},r.id))})]}),d>1&&e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"8px",padding:"20px"},children:[e.jsx("button",{onClick:()=>h(Math.max(1,t-1)),disabled:t===1,style:{padding:"10px 16px",borderRadius:"12px",border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",cursor:t===1?"not-allowed":"pointer",opacity:t===1?.6:1,transition:"all 0.2s ease",fontWeight:"500",fontSize:"0.95rem",boxShadow:"0 4px 15px var(--shadow-light)"},onMouseEnter:r=>{t!==1&&(r.currentTarget.style.transform="translateY(-2px)",r.currentTarget.style.boxShadow="0 8px 25px var(--shadow)",r.currentTarget.style.borderColor="var(--primary-1)")},onMouseLeave:r=>{t!==1&&(r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="0 4px 15px var(--shadow-light)",r.currentTarget.style.borderColor="var(--border)")},children:"上一页"}),Array.from({length:d}).slice(0,Math.min(d,10)).map((r,a)=>{const o=a+1;return e.jsx("button",{onClick:()=>h(o),style:{padding:"10px 16px",borderRadius:"12px",border:`1px solid ${t===o?"var(--primary-1)":"var(--border)"}`,background:t===o?"var(--primary-1)":"var(--bg-card)",color:t===o?"#fff":"var(--text)",cursor:"pointer",fontWeight:t===o?700:500,fontSize:"0.95rem",transition:"all 0.2s ease",boxShadow:"0 4px 15px var(--shadow-light)"},onMouseEnter:n=>{t!==o&&(n.currentTarget.style.transform="translateY(-2px)",n.currentTarget.style.boxShadow="0 8px 25px var(--shadow)",n.currentTarget.style.borderColor="var(--primary-1)")},onMouseLeave:n=>{t!==o&&(n.currentTarget.style.transform="translateY(0)",n.currentTarget.style.boxShadow="0 4px 15px var(--shadow-light)",n.currentTarget.style.borderColor="var(--border)")},children:o},a)}),e.jsx("button",{onClick:()=>h(Math.min(d,t+1)),disabled:t===d,style:{padding:"10px 16px",borderRadius:"12px",border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",cursor:t===d?"not-allowed":"pointer",opacity:t===d?.6:1,transition:"all 0.2s ease",fontWeight:"500",fontSize:"0.95rem",boxShadow:"0 4px 15px var(--shadow-light)"},onMouseEnter:r=>{t!==d&&(r.currentTarget.style.transform="translateY(-2px)",r.currentTarget.style.boxShadow="0 8px 25px var(--shadow)",r.currentTarget.style.borderColor="var(--primary-1)")},onMouseLeave:r=>{t!==d&&(r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="0 4px 15px var(--shadow-light)",r.currentTarget.style.borderColor="var(--border)")},children:"下一页"}),e.jsxs("select",{value:String(g),onChange:r=>{y(Number(r.target.value)),h(1)},style:{padding:"10px 16px",borderRadius:"12px",border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text)",cursor:"pointer",fontWeight:"500",fontSize:"0.95rem",marginLeft:"16px",boxShadow:"0 4px 15px var(--shadow-light)"},children:[e.jsx("option",{value:"10",children:"每页 10 条"}),e.jsx("option",{value:"20",children:"每页 20 条"}),e.jsx("option",{value:"50",children:"每页 50 条"})]})]})]})};export{F as default};
