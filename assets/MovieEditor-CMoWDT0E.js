import{r as u,j as e,d as l,u as M,b as R,c as q,f as $,h as B,k as Q,l as A,L as P}from"./index-Cedc9Ux5.js";import{u as W}from"./index.esm-Q_SLdeO6.js";import{T as H}from"./ThemeToggle-s2QBKYky.js";const O=l.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: var(--bg-card);
  padding: 32px;
  border-radius: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 8px 30px var(--shadow-light);
  max-width: 800px;
  margin: 0 auto;
`,c=l.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,p=l.label`
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-secondary);
`,g=l.input`
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  font-size: 1rem;
  background: var(--bg-1);
  color: var(--text);
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-1);
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: var(--muted);
  }
  
  /* 针对日期输入框的样式，确保在两种主题下选择按钮都可见 */
  &[type="date"] {
    /* 确保日期输入框的箭头颜色在不同主题下都可见 */
    &::-webkit-calendar-picker-indicator {
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    /* 针对Firefox的样式 */
    &::-moz-calendar-picker-indicator {
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 0.2s ease;
    }
  }
  
  /* 深色主题下的日期选择按钮样式 */
  body.dark &[type="date"] {
    &::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }
  
  /* 浅色主题下的日期选择按钮样式 */
  body.light &[type="date"] {
    &::-webkit-calendar-picker-indicator {
      filter: none;
      opacity: 0.7;
    }
    
    &::-webkit-calendar-picker-indicator:hover {
      opacity: 1;
    }
  }
`,U=l.textarea`
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  background: var(--bg-1);
  color: var(--text);
  font-family: inherit;
  line-height: 1.6;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-1);
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
    transform: translateY(-2px);
  }
`,V=l.button`
  padding: 14px 24px;
  font-size: 1rem;
  font-weight: 600;
  background: linear-gradient(135deg, var(--primary-1), var(--primary-2));
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 12px;
  box-shadow: 0 8px 25px var(--shadow-light);
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.95;
    transform: translateY(-2px);
    box-shadow: 0 12px 35px var(--shadow);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,m=l.span`
  color: var(--danger);
  font-size: 0.85rem;
  background: rgba(239, 68, 68, 0.1);
  padding: 4px 8px;
  border-radius: 8px;
  margin-top: 4px;
  display: inline-block;
  border: 1px solid rgba(239, 68, 68, 0.2);
`,_=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
`,J=l.button`
  padding: 8px 16px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: ${t=>t.$isSelected?"linear-gradient(135deg, var(--primary-1), var(--primary-2))":"var(--bg-1)"};
  color: ${t=>t.$isSelected?"#fff":"var(--text)"};
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px var(--shadow-light);
  }
  
  &:active {
    transform: translateY(0);
  }
`,K=({initialData:t,onSuccess:I})=>{const{register:x,handleSubmit:z,reset:E,setValue:i,formState:{errors:a}}=W({mode:"onChange"}),[b,h]=u.useState(!1),[f,w]=u.useState(null),[F,S]=u.useState([]),T=["动作","喜剧","爱情","科幻","剧情","惊悚","冒险","动画","悬疑","犯罪","奇幻","战争","历史","音乐","纪录片","灾难"],[y,k]=u.useState([]),[j,v]=u.useState([]);u.useEffect(()=>{const s=new Date().toISOString().split("T")[0];if(i("viewedDate",t!=null&&t.viewedDate?new Date(t.viewedDate).toISOString().split("T")[0]:s),t){if(i("title",t.title),i("releaseYear",t.releaseYear),i("rating",t.rating),i("city",t.city),i("review",t.review),i("coverImage",t.coverImage),t.genres&&k(t.genres.map(r=>r.name)),t.actors&&i("actors",t.actors.map(r=>r.name).join(", ")),t.images&&S(t.images.map(r=>r.url)),t.quote){const r=t.quote.split(/[;\n]+/).filter(o=>o.trim());v(r)}else v([]);w(t.coverImage||null)}},[t,i]);const Y=async s=>{var d;const r=(d=s.target.files)==null?void 0:d[0];if(!r)return;const o=new FileReader;o.onload=n=>{var C;(C=n.target)!=null&&C.result&&w(n.target.result)},o.readAsDataURL(r),h(!0);try{const C=(await M(r)).data.url;i("coverImage",C)}catch(n){console.error("Error uploading file:",n),alert("上传失败"),w(null)}finally{h(!1)}},G=async s=>{const r=s.target.files;if(!(!r||r.length===0)){h(!0);try{const d=(await R(r)).data.files.map(n=>n.url);S(n=>[...n,...d])}catch(o){console.error("Error uploading gallery:",o),alert("上传失败")}finally{h(!1)}}},L=s=>{S(r=>r.filter(o=>o!==s))},N=async s=>{try{const r=j.filter(n=>n.trim()&&n.length>0),o=[...new Set(r)],d={...s,quote:o.join("; "),genres:y,actors:s.actors?s.actors.split(",").map(n=>n.trim()).filter(Boolean):[],images:F};t&&t.id?(await q(t.id.toString(),d),alert("更新成功")):(await $(d),alert("添加成功"),E(),w(null),S([]),k([]),v([])),I()}catch(r){console.error("Error saving movie:",r),alert("保存失败")}};return e.jsxs(O,{onSubmit:z(N),children:[e.jsxs(c,{children:[e.jsx(p,{children:"片名 *"}),e.jsx(g,{...x("title",{required:"片名为必填项",maxLength:{value:50,message:"片名不能超过50个字符"},minLength:{value:1,message:"片名不能为空"}}),placeholder:"请输入片名"}),a.title&&e.jsx(m,{children:a.title.message})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px"},children:[e.jsxs(c,{children:[e.jsx(p,{children:"观看日期 *"}),e.jsx(g,{type:"date",...x("viewedDate",{required:"观看日期为必填项",validate:s=>{const r=new Date;return new Date(s)<=r||"观看日期不能是未来日期"}})}),a.viewedDate&&e.jsx(m,{children:a.viewedDate.message})]}),e.jsxs(c,{children:[e.jsx(p,{children:"上映年份"}),e.jsx(g,{type:"number",...x("releaseYear",{min:{value:1900,message:"上映年份不能早于1900年"},max:{value:new Date().getFullYear()+1,message:"上映年份不能超过明年"},validate:s=>{if(s==null||s==="")return!0;const r=Number(s);return!isNaN(r)&&Number.isInteger(r)||"请输入有效的年份，如 2023"}}),placeholder:"如 2023"}),a.releaseYear&&e.jsx(m,{children:a.releaseYear.message})]})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px"},children:[e.jsxs(c,{children:[e.jsx(p,{children:"评分（1-5）"}),e.jsx(g,{type:"number",step:"1",...x("rating",{min:{value:1,message:"评分不能低于1分"},max:{value:5,message:"评分不能高于5分"},validate:s=>{if(isNaN(Number(s)))return"请输入有效的评分";const r=Number(s);return Number.isInteger(r)?!0:"请输入1-5之间的整数"}}),placeholder:"如 4"}),a.rating&&e.jsx(m,{children:a.rating.message})]}),e.jsxs(c,{children:[e.jsx(p,{children:"观影城市"}),e.jsx(g,{...x("city",{maxLength:{value:10,message:"城市名称不能超过10个字符"}}),placeholder:"如 北京"}),a.city&&e.jsx(m,{children:a.city.message})]})]}),e.jsxs(c,{children:[e.jsx(p,{children:"电影类型（可多选）"}),e.jsx(_,{children:T.map(s=>e.jsx(J,{$isSelected:y.includes(s),onClick:()=>{y.includes(s)?k(y.filter(r=>r!==s)):k([...y,s])},type:"button",children:s},s))})]}),e.jsxs(c,{children:[e.jsx(p,{children:"演员（逗号分隔）"}),e.jsx(g,{...x("actors",{validate:s=>s?s.split(",").map(o=>o.trim()).filter(Boolean).every(o=>o.length>0)||"演员姓名不能为空":!0}),placeholder:"如 吴京"}),a.actors&&e.jsx(m,{children:a.actors.message})]}),e.jsxs(c,{children:[e.jsx(p,{children:"封面图片"}),e.jsx(g,{type:"file",accept:"image/*",onChange:Y,disabled:b}),e.jsx("input",{type:"hidden",...x("coverImage")}),f&&e.jsx("img",{src:f,alt:"预览",style:{width:"80px",marginTop:"8px",borderRadius:"4px"}})]}),e.jsxs(c,{children:[e.jsx(p,{children:"图集图片"}),e.jsx(g,{type:"file",accept:"image/*",multiple:!0,onChange:G,disabled:b}),b&&e.jsx("span",{children:"上传中..."}),e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"8px"},children:F.map((s,r)=>e.jsxs("div",{style:{position:"relative",margin:"10px"},children:[e.jsx("img",{src:s,alt:`Gallery ${r}`,style:{width:"80px",height:"80px",objectFit:"cover",borderRadius:"4px"}}),e.jsx("button",{type:"button",onClick:()=>L(s),style:{position:"absolute",top:"-8px",right:"-8px",background:"rgba(239, 68, 68, 0.9)",color:"white",border:"2px solid white",borderRadius:"50%",width:"24px",height:"24px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"bold",boxShadow:"0 2px 4px rgba(0,0,0,0.2)",transition:"all 0.2s ease",zIndex:10},title:"删除图片",children:"×"})]},r))})]}),e.jsxs(c,{children:[e.jsx(p,{children:"电影语录"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"12px"},children:[j.map((s,r)=>e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"flex-start"},children:[e.jsx("div",{style:{flex:1},children:e.jsx("input",{type:"text",value:s,onChange:o=>{const d=[...j];d[r]=o.target.value,v(d)},placeholder:"请输入语录...",style:{width:"100%",padding:"10px 12px",border:"1px solid var(--border)",borderRadius:"8px",fontSize:"0.95rem",background:"var(--bg-1)",color:"var(--text)"}})}),e.jsx("button",{type:"button",onClick:()=>{const o=j.filter((d,n)=>n!==r);v(o)},style:{padding:"6px 10px",background:"var(--danger)",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"0.9rem",minWidth:"60px"},children:"删除"})]},r)),e.jsx("button",{type:"button",onClick:()=>v([...j,""]),style:{padding:"10px 16px",background:"var(--primary-1)",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"0.95rem",alignSelf:"flex-start"},children:"+ 添加语录"})]}),e.jsx("div",{style:{fontSize:"0.85rem",color:"var(--muted)"},children:'提示：点击"添加语录"可以添加多条语录，每条语录会自动去重和过滤空内容'})]}),e.jsxs(c,{children:[e.jsx(p,{children:"电影影评 / 感想"}),e.jsx(U,{...x("review",{maxLength:{value:2e3,message:"影评不能超过2000个字符"}}),placeholder:"写你的电影影评...",style:{minHeight:"150px"}}),a.review&&e.jsx(m,{children:a.review.message})]}),e.jsx(V,{type:"submit",children:t?"更新":"保存"})]})},X=l.div`
  width: 100%;
  padding: 16px;
  max-width: 850px;
  margin: 0 auto;
`,Z=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,D=l(P)`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`,se=()=>{const{id:t}=B(),I=Q(),[x,z]=u.useState(void 0),[E,i]=u.useState(!!t);u.useEffect(()=>{document.title=t?"编辑电影":"添加电影"},[t]),u.useEffect(()=>{t&&a(t)},[t]);const a=async h=>{try{const f=await A(h);z(f.data)}catch(f){console.error("Error fetching movie:",f),alert("获取电影详情失败")}finally{i(!1)}},b=()=>{I("/admin")};return E?e.jsx("div",{children:"加载中..."}):e.jsxs(X,{children:[e.jsxs(Z,{children:[e.jsx("h1",{children:t?"编辑电影":"新增电影"}),e.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"center"},children:[e.jsx(D,{to:"/admin",children:"返回管理后台"}),e.jsx(H,{})]})]}),e.jsx(K,{initialData:x,onSuccess:b})]})};export{se as default};
