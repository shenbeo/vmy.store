"use strict";(self.webpackChunkvmy_store=self.webpackChunkvmy_store||[]).push([[84],{7084:function(e,s,t){t.r(s),t.d(s,{default:function(){return o}});var l=t(9439),r=t(2791),n=t(7689),a=t(1087),i=t(7628),c=t(184);function o(){var e=(0,r.useState)(!1),s=(0,l.Z)(e,2),t=s[0],o=s[1],d=(0,r.useContext)(i.I),x=d.isOpen,u=d.setIsOpen,m=(d.isOpenUser,d.setIsOpenUser,d.itemAmount);(0,r.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>60?o(!0):o(!1)}))}));var f=(0,n.s0)(),h=JSON.parse(localStorage.getItem("user-info"));console.log(h);var b=(0,r.useState)(!1),j=(0,l.Z)(b,2),g=j[0],p=j[1];return(0,c.jsx)("header",{className:"".concat(t?" py-4 bg-[#212121d4]  shadow-lg text-white ":" py-4 bg-transparent"," fixed w-full z-30 transition-all duration-500"),children:(0,c.jsxs)("div",{className:"container mx-auto flex items-center justify-between h-full w-full",children:[(0,c.jsx)(a.rU,{to:"/",className:"ml-4 md:ml-0",children:(0,c.jsxs)("div",{className:"flex  font_logo text-sm bg-red-700 px-2 py-2 scroll-py-14 text-[#ffffff]",children:[(0,c.jsx)("h1",{className:"",children:"V"}),(0,c.jsx)("h1",{className:"ml-1",children:"M"}),(0,c.jsx)("h1",{className:"ml-1",children:"Y."})]})}),(0,c.jsxs)("div",{className:"flex items-center justify-center",children:[(0,c.jsxs)("div",{onClick:function(){return u(!x)},className:"hover:bg-[#ecececeb] bg-[#b4b3b377] relative w-8 h-8 flex items-center justify-center rounded-full duration-500 transition-all cursor-pointer mx-4",children:[(0,c.jsx)("i",{className:"ri-shopping-bag-line font-extralight"}),(0,c.jsx)("div",{className:"flex absolute items-center justify-center text-[#e9e4e4] rounded-full text-xs ml-6 mb-5 pt-1 bg-rose-500 w-4 h-4",children:(0,c.jsx)("span",{className:"mb-[2px] font-medium",children:m})})]}),(0,c.jsxs)(a.rU,{className:"",children:[(0,c.jsx)("div",{onClick:function(){return p(!g)},className:"hover:bg-[#ecececeb] bg-[#b4b3b377] mr-4 md:mr-0  w-8 h-8 flex items-center justify-center rounded-full duration-500 transition-all cursor-pointer",children:(0,c.jsx)("i",{className:"ri-user-line font-extralight"})}),(0,c.jsx)("div",{children:localStorage.getItem("user-info")?(0,c.jsx)("div",{children:(0,c.jsx)("div",{children:g&&(0,c.jsx)("div",{className:" absolute w-[2rem] mt-4 flex items-center justify-center",children:localStorage.getItem("user-info")?(0,c.jsx)("div",{className:"bg-[#969696] flex flex-col",children:(0,c.jsx)("div",{className:"pr-6 px-2 py-1 hover:bg-[#cacaca] transition-all duration-500 hover:text-black",onClick:function(){localStorage.clear(),f("/")},children:"Logout"})}):null})})}):(0,c.jsx)("div",{children:g&&(0,c.jsx)("div",{className:" absolute w-[2rem] mt-4 flex items-center justify-center",children:(0,c.jsxs)("div",{className:"bg-[#adadad] flex flex-col",children:[(0,c.jsx)(a.rU,{className:"pr-6 px-2 py-1 hover:bg-[#cacaca] transition-all duration-500 hover:text-black border-b-[1px] border-[#ccc]",to:"/login",children:"Login"}),(0,c.jsx)(a.rU,{className:"pr-6 px-2 py-1 hover:bg-[#cacaca] transition-all duration-500 hover:text-black",to:"/register",children:"Register"})]})})})})]})]})]})})}}}]);
//# sourceMappingURL=84.376a5519.chunk.js.map