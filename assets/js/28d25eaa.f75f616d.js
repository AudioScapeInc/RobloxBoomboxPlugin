"use strict";(self.webpackChunkaudioscape=self.webpackChunkaudioscape||[]).push([[767],{5822:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=o(4848),i=o(8453);const r={sidebar_position:2},s="Production Configuration",c={id:"tutorial-basics/secret-setup",title:"Production Configuration",description:"Set up your own HTTP secret to enable the Boombox to function in production in your game.",source:"@site/docs/tutorial-basics/secret-setup.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/secret-setup",permalink:"/RobloxBoomboxPlugin/docs/tutorial-basics/secret-setup",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation Guide",permalink:"/RobloxBoomboxPlugin/docs/tutorial-basics/installation-guide"},next:{title:"AudioScape Boombox Plugin Advanced Settings",permalink:"/RobloxBoomboxPlugin/docs/tutorial-basics/AdvancedSettings"}},l={},a=[{value:"Steps to Configure",id:"steps-to-configure",level:3},{value:"FAQ",id:"faq",level:2},{value:"Advanced Developer Controls",id:"advanced-developer-controls",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"production-configuration",children:"Production Configuration"})}),"\n",(0,t.jsx)(n.p,{children:"Set up your own HTTP secret to enable the Boombox to function in production in your game."}),"\n",(0,t.jsx)(n.admonition,{title:"My tip",type:"danger",children:(0,t.jsxs)(n.p,{children:["You will need to set up your own secret to enable the Boombox to function in production in your game. If you do not have an API key, you can use this default rate-limited secret provided by Audioscape.ai: ",(0,t.jsx)(n.code,{children:"mNyj8dItG0aSjEqYY2Bu085Vq27Qyf5E7eIW7oa4"}),"."]})}),"\n",(0,t.jsx)("iframe",{width:"483",height:"272",src:"https://www.youtube.com/embed/XdRR_sPp5h0",title:"Plugin Secret configuration for the free Audioscape Roblox Boombox plugin",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,t.jsx)(n.h3,{id:"steps-to-configure",children:"Steps to Configure"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Open Your Game in Roblox"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.a,{href:"https://create.roblox.com",children:"Roblox Create page"})," with your experiences."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Click on the thumbnail of your experience with the Audioscape Boombox plugin and select "Manage Experience".'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://github.com/user-attachments/assets/11a05556-4114-451a-ad3f-94efbe77fa79",alt:"Manage Experience"})," ",(0,t.jsx)(n.img,{src:"https://github.com/user-attachments/assets/422a2cce-107d-40c7-89ba-b6aef8d400b5",alt:"Manage Experience"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Navigate to Secrets"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On the configuration page, find the ",(0,t.jsx)(n.strong,{children:"Secrets"})," tab on the left-hand side."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/user-attachments/assets/c601ab69-d5d3-4e61-884a-24e944ded009",alt:"Secrets Tab"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Secrets"})," to open the settings page."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Create a New Secret"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Create Secret"})," button (indicated by a plus sign ",(0,t.jsx)(n.code,{children:"+"}),")."]}),"\n",(0,t.jsx)(n.li,{children:"A prompt will appear for you to name your new secret."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Set the Secret Name"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Enter the following exact name for the secret:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"audioscape_boombox_api_key"})})]}),"\n",(0,t.jsx)(n.li,{children:"The name must be exactly as written above. If there are any discrepancies, the Boombox will not work."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Add the Secret Value"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you already have a production API key from Audioscape.ai, enter that as the secret value."}),"\n",(0,t.jsxs)(n.li,{children:["If you do not have an API key, you can use this default rate-limited secret provided by Audioscape.ai: ",(0,t.jsx)(n.code,{children:"mNyj8dItG0aSjEqYY2Bu085Vq27Qyf5E7eIW7oa4"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Finalize the Setup"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["After entering the secret name and value, click ",(0,t.jsx)(n.strong,{children:"Create"})," to save the secret."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"You're All Set!"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The HTTP secret is now successfully configured for your game. The Audioscape Boombox will be able to pull the API key and function correctly in your game."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"The boombox doesn't work!"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Check if you have configured the ",(0,t.jsx)(n.a,{href:"#configure-api-key",children:"API key"})," and ",(0,t.jsx)(n.a,{href:"#production-configuration",children:"secret"})," properly following the steps above."]}),"\n",(0,t.jsx)(n.li,{children:"Make sure you have an active internet connection, and that your speakers and game audio are enabled."}),"\n",(0,t.jsxs)(n.li,{children:["If it still doesn't work, it could be that you hit the daily rate limit of 500 requests per day. If so, please allow 24 hours for it to restart. And, ",(0,t.jsx)(n.a,{href:"https://discord.gg/MShtx9aaHh",children:"contact us"})," for an unlimited API key."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Need help? Reach out to us in our ",(0,t.jsx)(n.a,{href:"https://discord.gg/MShtx9aaHh",children:"developer discord"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"advanced-developer-controls",children:"Advanced Developer Controls"}),"\n",(0,t.jsxs)(n.p,{children:["There are a number of dev-configurable settings for volume, player location, accent colors, and pushing tracks to the player when you want. See our ",(0,t.jsx)(n.a,{href:"/RobloxBoomboxPlugin/docs/tutorial-basics/AdvancedSettings",children:"advanced settings doc"})," for more info."]}),"\n",(0,t.jsx)(n.p,{children:"Enjoy using the Audioscape Boombox in your experience!"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var t=o(6540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);