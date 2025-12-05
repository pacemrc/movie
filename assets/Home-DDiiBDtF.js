import{r as i,g as H,j as e,L as U,d as r}from"./index-Cedc9Ux5.js";import{T as W}from"./ThemeToggle-s2QBKYky.js";const q=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  
  /* 响应式设计：根据屏幕尺寸调整列数 */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 16px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 16px;
    padding: 12px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 12px;
    padding: 8px;
  }
`,A=r.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px var(--shadow-light);
  position: relative;
  isolation: isolate;
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent, rgba(139, 92, 246, 0.08));
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px var(--shadow);
    border-color: var(--primary-1);
  }
  
  &:hover:before {
    opacity: 1;
  }
`,J=r.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${A}:hover & {
    transform: scale(1.05);
  }
`,K=r.div`
  padding: 12px 18px;
  background: var(--bg-card);
  position: relative;
  z-index: 1;
`,Q=r.h3`
  margin: 0 0 4px 0;
  font-size: 1.2rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.01em;
  color: var(--text);
`,V=r.div`
  font-weight: 800;
  font-size: 1rem;
  margin-bottom: 4px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,X=r.div`
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.4;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  
  & > div {
    margin: 0;
  }
`,Z=r.div`
  display: flex;
  gap: 16px;
  padding: 20px 28px;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border);
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 2px 10px var(--shadow-light);
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  
  /* 响应式设计：根据屏幕尺寸调整内边距和间距 */
  @media (max-width: 1200px) {
    padding: 16px 20px;
    gap: 12px;
  }
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    gap: 10px;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    padding: 10px 12px;
    gap: 8px;
    justify-content: center;
  }
`,d=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  
  /* 响应式设计：在小屏幕上垂直排列 */
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 6px;
  }
`,x=r.label`
  font-size: 0.95rem;
  color: var(--text);
  font-weight: 500;
  white-space: nowrap;
`,ee=r.input`
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  width: 240px;
  background: var(--bg-1);
  color: var(--text);
  font-size: 0.95rem;
  transition: all 0.2s ease;
  
  &:focus {
    border-color: var(--primary-1);
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
    outline: none;
  }
  
  &::placeholder {
    color: var(--muted);
  }
  
  /* 响应式设计：根据屏幕尺寸调整宽度 */
  @media (max-width: 1200px) {
    width: 200px;
  }
  
  @media (max-width: 768px) {
    width: 180px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`,te=r.button`
  padding: 12px 20px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--bg-1);
  color: var(--text);
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  
  &:hover {
    border-color: var(--danger);
    background: rgba(239, 68, 68, 0.1);
    color: var(--danger);
  }
  
  &:focus {
    border-color: var(--danger);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    outline: none;
  }
  
  /* 响应式设计：在小屏幕上调整样式 */
  @media (max-width: 480px) {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }
`,ne=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  grid-column: 1 / -1;
  gap: 16px;
`,re=r.div`
  width: 48px;
  height: 48px;
  border: 4px solid var(--border);
  border-top-color: var(--primary-1);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,ie=r.div`
  font-size: 1.1rem;
  color: var(--muted);
  font-weight: 500;
`,ae=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  grid-column: 1 / -1;
  gap: 16px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 16px;
  margin: 20px;
`,oe=r.div`
  font-size: 48px;
  margin-bottom: 8px;
`,se=r.div`
  font-size: 1.1rem;
  color: var(--danger);
  text-align: center;
  line-height: 1.5;
  max-width: 500px;
`,le=r.button`
  padding: 12px 24px;
  border: 1px solid var(--danger);
  border-radius: 12px;
  background: var(--bg-1);
  color: var(--danger);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  margin-top: 8px;
  
  &:hover {
    background: rgba(239, 68, 68, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px var(--shadow-light);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }
`,de=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  grid-column: 1 / -1;
  gap: 16px;
  color: var(--muted);
  text-align: center;
`,xe=r.div`
  font-size: 64px;
  margin-bottom: 8px;
  opacity: 0.5;
`,pe=r.div`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 4px;
`,ce=r.div`
  font-size: 1rem;
  color: var(--muted);
  max-width: 400px;
`,s=r.select`
  padding: 12px 24px 12px 12px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--bg-1);
  color: var(--text);
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  /* 控制下三角位置 */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
  min-width: 100px;
  
  &:focus {
    border-color: var(--primary-1);
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
    outline: none;
  }
  
  option {
    background: var(--bg-2);
    color: var(--text);
    text-align: left;
  }
  
  /* 响应式设计：在小屏幕上调整样式 */
  @media (max-width: 480px) {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }
`,me=()=>{const[C,G]=i.useState([]),[l,a]=i.useState(1),[w,_]=i.useState(10),[p,O]=i.useState(1),[h,z]=i.useState(""),[g,M]=i.useState(""),[u,E]=i.useState(""),[m,R]=i.useState(""),[v,T]=i.useState(""),[j,I]=i.useState(""),[f,L]=i.useState(""),[y,Y]=i.useState("viewedDate"),[S,F]=i.useState("desc"),[B,D]=i.useState(!1),[k,P]=i.useState("");i.useEffect(()=>{document.title="我的观影记录"},[]),i.useEffect(()=>{const t=setTimeout(()=>{N()},300);return()=>clearTimeout(t)},[h,g,u,m,v,j,f,y,S,l,w]);const N=async()=>{var t,o;D(!0),P("");try{const n={page:l,limit:w,sortBy:y,sortOrder:S};h&&(n.search=h),g&&(n.genre=g),u&&(n.ratingMin=u),m&&(n.ratingMax=m),v&&(n.yearMin=v),j&&(n.yearMax=j),f&&(n.city=f);const c=await H(n);G(c.data.data),O(c.data.totalPages)}catch(n){console.error("Error fetching movies:",n),P(((o=(t=n.response)==null?void 0:t.data)==null?void 0:o.message)||"获取电影列表失败，请稍后重试")}finally{D(!1)}},$=()=>{z(""),M(""),E(""),R(""),T(""),I(""),L(""),Y("viewedDate"),F("desc"),a(1)};return e.jsxs(he,{children:[e.jsxs(Z,{children:[e.jsxs(d,{children:[e.jsx(x,{children:"类型："}),e.jsxs(s,{value:g,onChange:t=>{M(t.target.value),a(1)},children:[e.jsx("option",{value:"",children:"全部类型"}),e.jsx("option",{value:"动作",children:"动作"}),e.jsx("option",{value:"喜剧",children:"喜剧"}),e.jsx("option",{value:"爱情",children:"爱情"}),e.jsx("option",{value:"科幻",children:"科幻"}),e.jsx("option",{value:"剧情",children:"剧情"}),e.jsx("option",{value:"惊悚",children:"惊悚"}),e.jsx("option",{value:"冒险",children:"冒险"}),e.jsx("option",{value:"动画",children:"动画"}),e.jsx("option",{value:"悬疑",children:"悬疑"}),e.jsx("option",{value:"犯罪",children:"犯罪"}),e.jsx("option",{value:"奇幻",children:"奇幻"}),e.jsx("option",{value:"战争",children:"战争"}),e.jsx("option",{value:"历史",children:"历史"}),e.jsx("option",{value:"音乐",children:"音乐"}),e.jsx("option",{value:"纪录片",children:"纪录片"}),e.jsx("option",{value:"灾难",children:"灾难"})]})]}),e.jsxs(d,{children:[e.jsx(x,{children:"评分范围："}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsxs(s,{value:u,onChange:t=>{E(t.target.value),a(1)},style:{width:"80px"},children:[e.jsx("option",{value:"",children:"最小"}),e.jsx("option",{value:"1",children:"1"}),e.jsx("option",{value:"2",children:"2"}),e.jsx("option",{value:"3",children:"3"}),e.jsx("option",{value:"4",children:"4"}),e.jsx("option",{value:"5",children:"5"})]}),e.jsx("span",{style:{color:"var(--muted)",whiteSpace:"nowrap"},children:"-"}),e.jsxs(s,{value:m,onChange:t=>{R(t.target.value),a(1)},style:{width:"80px"},children:[e.jsx("option",{value:"",children:"最大"}),e.jsx("option",{value:"1",children:"1"}),e.jsx("option",{value:"2",children:"2"}),e.jsx("option",{value:"3",children:"3"}),e.jsx("option",{value:"4",children:"4"}),e.jsx("option",{value:"5",children:"5"})]})]})]}),e.jsxs(d,{children:[e.jsx(x,{children:"年份："}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsxs(s,{value:v,onChange:t=>{T(t.target.value),a(1)},style:{width:"100px"},children:[e.jsx("option",{value:"",children:"起始"}),Array.from({length:50}).map((t,o)=>{const n=(new Date().getFullYear()-49+o).toString();return e.jsx("option",{value:n,children:n},n)})]}),e.jsx("span",{style:{color:"var(--muted)",whiteSpace:"nowrap"},children:"-"}),e.jsxs(s,{value:j,onChange:t=>{I(t.target.value),a(1)},style:{width:"100px"},children:[e.jsx("option",{value:"",children:"结束"}),Array.from({length:50}).map((t,o)=>{const n=(new Date().getFullYear()-49+o).toString();return e.jsx("option",{value:n,children:n},n)})]})]})]}),e.jsxs(d,{children:[e.jsx(x,{children:"城市："}),e.jsxs(s,{value:f,onChange:t=>{L(t.target.value),a(1)},children:[e.jsx("option",{value:"",children:"全部城市"}),e.jsx("option",{value:"北京",children:"北京"}),e.jsx("option",{value:"上海",children:"上海"}),e.jsx("option",{value:"广州",children:"广州"}),e.jsx("option",{value:"深圳",children:"深圳"}),e.jsx("option",{value:"杭州",children:"杭州"}),e.jsx("option",{value:"成都",children:"成都"}),e.jsx("option",{value:"武汉",children:"武汉"}),e.jsx("option",{value:"西安",children:"西安"}),e.jsx("option",{value:"南京",children:"南京"}),e.jsx("option",{value:"重庆",children:"重庆"})]})]}),e.jsxs(d,{children:[e.jsx(x,{children:"排序："}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsxs(s,{value:y,onChange:t=>{Y(t.target.value),a(1)},style:{width:"120px"},children:[e.jsx("option",{value:"viewedDate",children:"观看日期"}),e.jsx("option",{value:"releaseYear",children:"发行年份"}),e.jsx("option",{value:"rating",children:"评分"})]}),e.jsxs(s,{value:S,onChange:t=>{F(t.target.value),a(1)},style:{width:"80px"},children:[e.jsx("option",{value:"desc",children:"降序"}),e.jsx("option",{value:"asc",children:"升序"})]})]})]}),e.jsxs(d,{children:[e.jsx(x,{children:"显示："}),e.jsxs(s,{value:String(w),onChange:t=>{_(Number(t.target.value)),a(1)},children:[e.jsx("option",{value:"10",children:"每页 10 条"}),e.jsx("option",{value:"20",children:"每页 20 条"}),e.jsx("option",{value:"30",children:"每页 30 条"}),e.jsx("option",{value:"50",children:"每页 50 条"})]})]}),e.jsx(ee,{placeholder:"搜索片名...",value:h,onChange:t=>z(t.target.value)}),e.jsx(te,{onClick:$,children:"重置"}),e.jsx("div",{style:{display:"flex",alignItems:"center",marginLeft:"auto"},children:e.jsx(W,{})})]}),B&&e.jsxs(ne,{children:[e.jsx(re,{}),e.jsx(ie,{children:"加载中..."})]}),k&&e.jsxs(ae,{children:[e.jsx(oe,{children:"⚠️"}),e.jsx(se,{children:k}),e.jsx(le,{onClick:N,children:"重试"})]}),!B&&!k&&e.jsx(q,{children:C.length>0?C.map(t=>{const o=()=>{const n=Number(t.rating);if(isNaN(n)||n<1||n>5)return null;const c=[];for(let b=1;b<=5;b++)c.push(e.jsx("span",{style:{color:b<=n?"#f59e0b":"#e5e7eb",fontSize:"1.2rem",marginRight:"2px"},children:"★"},b));return c};return e.jsx(U,{to:`/movie/${t.id}`,style:{textDecoration:"none",color:"inherit"},children:e.jsxs(A,{children:[e.jsx(J,{src:t.coverImage||"https://dummyimage.com/300x450/000/fff&text=暂无封面",alt:t.title,loading:"lazy"}),e.jsxs(K,{children:[e.jsx(Q,{title:t.title,children:t.title}),e.jsx(V,{children:o()}),e.jsxs(X,{children:[e.jsx("div",{children:t.releaseYear}),t.genres&&t.genres.length>0&&e.jsx("div",{style:{fontSize:"0.8rem"},children:t.genres.map(n=>n.name).join(", ")})]})]})]})},t.id)}):e.jsxs(de,{children:[e.jsx(xe,{children:"🎬"}),e.jsx(pe,{children:"没有找到符合条件的电影"}),e.jsx(ce,{children:"尝试调整筛选条件或搜索关键词"})]})}),p>1&&e.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"8px",padding:"10px"},children:[e.jsx("button",{onClick:()=>a(Math.max(1,l-1)),disabled:l===1,children:"上一页"}),Array.from({length:p}).slice(0,Math.min(p,10)).map((t,o)=>e.jsx("button",{onClick:()=>a(o+1),style:{fontWeight:l===o+1?700:400},children:o+1},o)),e.jsx("button",{onClick:()=>a(Math.min(p,l+1)),disabled:l===p,children:"下一页"})]})]})},he=r.div`
  width: 100%;
`;export{me as default};
