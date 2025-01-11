import{_ as b,r as v,o as g,c as x,a as o,d as w,y as h,z as c,A as m}from"./index-C9SpQrn5.js";const i={_origin:"https://api.emailjs.com"},y=(t,a="https://api.emailjs.com")=>{i._userID=t,i._origin=a},u=(t,a,n)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!a)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class p{constructor(a){this.status=a.status,this.text=a.responseText}}const f=(t,a,n={})=>new Promise((r,e)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:l})=>{const d=new p(l);d.status===200||d.text==="OK"?r(d):e(d)}),s.addEventListener("error",({target:l})=>{e(new p(l))}),s.open("POST",i._origin+t,!0),Object.keys(n).forEach(l=>{s.setRequestHeader(l,n[l])}),s.send(a)}),k=(t,a,n,r)=>{const e=r||i._userID;return u(e,t,a),f("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:e,service_id:t,template_id:a,template_params:n}),{"Content-type":"application/json"})},j=t=>{let a;if(typeof t=="string"?a=document.querySelector(t):a=t,!a||a.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return a},_=(t,a,n,r)=>{const e=r||i._userID,s=j(n);u(e,t,a);const l=new FormData(s);return l.append("lib_version","3.2.0"),l.append("service_id",t),l.append("template_id",a),l.append("user_id",e),f("/api/v1.0/email/send-form",l)},S={init:y,send:k,sendForm:_},E={class:"text-white mt-5",id:"contact"},L={class:"grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-10"},q={class:"bg-[#111a3e] w-full rounded-2xl overflow-hidden border-2 border-[#111a3e] backdrop-blur-lg"},A={class:"mb-6"},D={class:"mb-6"},M={class:"mb-6"},T={__name:"ContactSection",setup(t){const a=v({email:"",subject:"",message:""}),n=async()=>{const{email:r,subject:e,message:s}=a.value;if(!r||!e||!s){alert("Please fill out all fields.");return}try{const l=await S.send("service_krkzn5s","template_r1v7yaa",{email:r,subject:e,message:s},"Ru8D2bGudHK91BnEz");alert("Message Sent!"),console.log(l),a.value.email="",a.value.subject="",a.value.message=""}catch(l){console.error("Error sending email:",l),alert("Something went wrong, please try again later.")}};return(r,e)=>(g(),x("section",E,[e[9]||(e[9]=o("h2",{class:"text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16"},"Let's Connect",-1)),o("div",L,[e[7]||(e[7]=w('<div data-v-6a7943a6><p class="text-lg text-[#adb7be] leading-relaxed mb-6 text-justify" data-v-6a7943a6> Are you looking for someone to <span class="font-bold text-yellow-500" data-v-6a7943a6>turn your data</span> into meaningful <span class="font-bold text-yellow-500" data-v-6a7943a6>insights</span> and provide <span class="font-bold text-yellow-500" data-v-6a7943a6>effective solutions</span>? Do you need <span class="font-bold text-yellow-500" data-v-6a7943a6>dynamic reports</span> that bring <span class="font-bold text-yellow-500" data-v-6a7943a6>clarity</span> and guide <span class="font-bold text-yellow-500" data-v-6a7943a6>smarter decisions</span>? Perhaps you&#39;re seeking advanced <span class="font-bold text-yellow-500" data-v-6a7943a6>Excel automation</span> with <span class="font-bold text-yellow-500" data-v-6a7943a6>VBA</span> to streamline your workflow, or a skilled <span class="font-bold text-yellow-500" data-v-6a7943a6>back-end developer</span> to power your applications? Or maybe you need a <span class="font-bold text-yellow-500" data-v-6a7943a6>SQL database expert</span> to manage and organize your data efficiently? I’m here to help you tackle challenges, achieve your goals, and bring your <span class="font-bold text-yellow-500" data-v-6a7943a6>ideas to reality</span>. Let’s work together to make it happen—<span class="text-yellow-500 font-bold" data-v-6a7943a6>reach out today</span>! </p><div class="col-lg-4 col-md-4 mb-lg-0 mt-5" data-v-6a7943a6><div class="flex mb-10 items-center" data-v-6a7943a6><div class="p-2 bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border-2 border-[#111a3e] backdrop-blur-lg" data-v-6a7943a6><img src="https://img.icons8.com/metro/50/ffffff/new-post.png" alt="new-post" class="w-6" data-v-6a7943a6></div><div class="ml-5 text-white" data-v-6a7943a6><h4 data-v-6a7943a6>Email</h4><p data-v-6a7943a6>jessedanbancale@gmail.com</p></div></div><div class="flex mb-10 items-center" data-v-6a7943a6><div class="p-2 bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border-2 border-[#111a3e] backdrop-blur-lg" data-v-6a7943a6><img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="linkedin" class="w-6" data-v-6a7943a6></div><div class="ml-5 text-white" data-v-6a7943a6><h4 data-v-6a7943a6>LinkedIn</h4><p data-v-6a7943a6><a href="https://www.linkedin.com/in/jpbancale" target="_blank" data-v-6a7943a6>Jesse Dan Bancale</a></p></div></div></div></div>',1)),o("div",q,[o("form",{onSubmit:h(n,["prevent"]),class:"flex flex-col p-4"},[o("div",A,[e[3]||(e[3]=o("label",{for:"email",class:"text-white block mb-2 text-sm font-medium"},"Email",-1)),c(o("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>a.value.email=s),type:"email",id:"email",class:"bg-[#111827] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5",placeholder:"email@gmail.com",required:""},null,512),[[m,a.value.email]])]),o("div",D,[e[4]||(e[4]=o("label",{for:"subject",class:"text-white block mb-2 text-sm font-medium"},"Subject",-1)),c(o("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>a.value.subject=s),type:"text",id:"subject",class:"bg-[#111827] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5",placeholder:"Subject",required:""},null,512),[[m,a.value.subject]])]),o("div",M,[e[5]||(e[5]=o("label",{for:"message",class:"text-white block mb-2 text-sm font-medium"},"Message",-1)),c(o("textarea",{"onUpdate:modelValue":e[2]||(e[2]=s=>a.value.message=s),id:"message",class:"bg-[#111827] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5",placeholder:"Let's talk about...",required:"",rows:"6"},null,512),[[m,a.value.message]])]),e[6]||(e[6]=o("button",{type:"submit",class:"z-1 w-full px-6 py-3 rounded-full sm:w-max flex justify-center text-white bg-primary border-2 border-transparent"}," Send Message ",-1))],32)]),e[8]||(e[8]=o("div",{class:"bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3 translate-1/2"},null,-1))])]))}},C=b(T,[["__scopeId","data-v-6a7943a6"]]);export{C as default};
