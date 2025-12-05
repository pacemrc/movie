import{r as o,k as f,A as w,j as e,d as r,m as y}from"./index-BRKAISFI.js";import{T as j}from"./ThemeToggle-29KJfNok.js";import{u as k}from"./index.esm-D9bqNjCc.js";const S=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, var(--bg-1), var(--bg-2));
`,C=r.div`
  background: var(--bg-card);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 20px 80px var(--shadow);
  width: 100%;
  max-width: 450px;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  &:hover:before {
    opacity: 1;
  }
`,E=r.h2`
  text-align: center;
  margin-bottom: 28px;
  background: linear-gradient(135deg, var(--primary-1), var(--primary-2));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.025em;
`,g=r.input`
  width: 100%;
  padding: 14px 18px;
  margin-bottom: 18px;
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
`,L=r.button`
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, var(--primary-1), var(--primary-2));
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 12px 35px var(--shadow-light);
  transition: all 0.2s ease;
  margin-top: 8px;
  
  &:hover {
    opacity: 0.95;
    transform: translateY(-2px);
    box-shadow: 0 16px 45px var(--shadow);
  }
  
  &:active {
    transform: translateY(0);
  }
`,n=r.div`
  color: var(--danger);
  margin-bottom: 18px;
  text-align: center;
  font-size: 0.95rem;
  background: rgba(239, 68, 68, 0.1);
  padding: 12px;
  border-radius: 10px;
  border: 1px solid rgba(239, 68, 68, 0.3);
`,q=()=>{const{register:s,handleSubmit:u,formState:{errors:a,isSubmitting:i}}=k(),[d,p]=o.useState(""),h=f(),l=o.useContext(w);o.useEffect(()=>{document.title="登录"},[]);const b=async v=>{var c,x;p("");try{const t=await y.post("/auth/login",v);l&&(l.login(t.data.token,{username:t.data.username,role:t.data.role}),h("/admin"))}catch(t){p(((x=(c=t.response)==null?void 0:c.data)==null?void 0:x.message)||"登录失败，请检查用户名和密码")}};return e.jsx(S,{children:e.jsxs(C,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(j,{})}),e.jsx(E,{children:"管理员登录"}),e.jsxs("form",{onSubmit:u(b),children:[e.jsxs(m,{children:[e.jsx(g,{type:"text",placeholder:"用户名",...s("username",{required:"用户名为必填项",minLength:{value:3,message:"用户名长度不能少于3个字符"},maxLength:{value:20,message:"用户名长度不能超过20个字符"}})}),a.username&&e.jsx(n,{children:a.username.message})]}),e.jsxs(m,{children:[e.jsx(g,{type:"password",placeholder:"密码",...s("password",{required:"密码为必填项",minLength:{value:6,message:"密码长度不能少于6个字符"},maxLength:{value:30,message:"密码长度不能超过30个字符"}})}),a.password&&e.jsx(n,{children:a.password.message})]}),d&&e.jsx(n,{children:d}),e.jsx(L,{type:"submit",disabled:i,children:i?"登录中...":"登录"})]})]})})},m=r.div`
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;export{q as default};
