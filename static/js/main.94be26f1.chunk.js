(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),i=t.n(r),c=(t(13),t(1)),s=t(2),o=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home",style:{color:"black",fontSize:"20px"}},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about",style:{color:"black",fontSize:"20px"}},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume",style:{color:"black",fontSize:"20px"}},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio",style:{color:"black",fontSize:"20px"}},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact",style:{color:"black",fontSize:"20px"}},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))}),l.a.createElement("li",{key:"Geeks For Geeks"},l.a.createElement("a",{href:"https://auth.geeksforgeeks.org/user/JanhaviTatewar/practice/",target:"_blank"},l.a.createElement("i",{className:"iconify","data-icon":"simple-icons:geeksforgeeks","data-inline":"false"})))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),p=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/Janhavi.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),h=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item "},l.a.createElement("div",{className:"twelve columns block"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("label",null,"CGPA : ",e.CGPA)),":\xa0")}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns block"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("label",null,l.a.createElement("b",null,"Work Description :-")),e.works.map(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"text_color"},e))})),":\xa0")}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"block"},l.a.createElement("b",{style:{color:"black"}},l.a.createElement("h4",null,e.skillname))))}))))))}}]),a}(n.Component),k=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,l.a.createElement("b",{style:{color:"black"}},"Check Out Some of My Works.")),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"block"},l.a.createElement("h5",null,e.name),e.description.map(function(e){return l.a.createElement("div",{className:"text_color"},e)})),":\xa0")})))))}}]),a}(n.Component),E=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Linked in :",e.linkedinId)))))}}]),a}(n.Component),f=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}),l.a.createElement("li",{key:"Geeks For Geeks"},l.a.createElement("a",{href:"https://auth.geeksforgeeks.org/user/JanhaviTatewar/practice/",target:"_blank"},l.a.createElement("i",{className:"iconify","data-icon":"simple-icons:geeksforgeeks","data-inline":"false"}))))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),g={imagebaseurl:"https://github.com/TatewarJanhavi",name:"Janhavi Tatewar",role:"Full Stack Developer",linkedinId:"https://www.linkedin.com/in/janhavi-tatewar-4b9189143/",skypeid:"Your skypeid",roleDescription:"I like dabbling in various parts of Software development and like to learn about new technologies. I want to secure a responsible career opportunity to fully utilize my training and skills, while making a signi\ufb01cant contribution  to the success of the company",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/janhavi-tatewar-4b9189143/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/TatewarJanhavi",className:"fa fa-github"},{name:"leetcode",url:"https://leetcode.com/08111998",className:"cib-leetcode"},{name:"HackerRank",url:"https://www.hackerrank.com/tatewarjanhavi5",className:"cib-hackerrank"}],aboutme:"I am currently working as Full Stack developer in BlackHawk Network. It's been an year I am working in BlackHawk Network . I did 6 months intership in Grab India, where I was DevSecOps Intern .In 2019  I won Smart India Hackthon where I created an Helmet Detection Application. I want to secure a responsible career opportunity to fully utilize my training and skills, while making a signi\ufb01cant contribution to the success of the company",address:"India",website:"https://github.com/TatewarJanhavi",education:[{UniversityName:"Shri Ramdeobaba College of Engineering and Management",specialization:"B.E Computer Science",MonthOfPassing:"MAY",YearOfPassing:"2020",CGPA:"9.31"},{UniversityName:"Higher Secondary Certificate",specialization:"Computer Science",MonthOfPassing:"May",YearOfPassing:"2016",CGPA:"8.0"},{UniversityName:"Secondary School Certificate",specialization:"Somalwar High School",MonthOfPassing:"May",YearOfPassing:"2014",CGPA:"8.9"}],work:[{CompanyName:"BlackHawk Network",specialization:"Software Engineer",MonthOfLeaving:"Currently Working here",works:["-Working on a B2B Rewards platform ( named Hawk Marketplace portal ) which enables clients to place Gift cards order.","-Working as Full Stack developer Frontend is designed using Ruby on Rails Backend is designed using Spring Boot  Database used is Postgres, MySql . Worked on Microservices which send emailAnd SMS","-Worked on AWS services such as SQS , CloudWatch , Api Gateway , CloudFormation , Role policy , S3 bucket and delivered a POC to handle scheduler synchronization over multiple instances using sqs queue","-Developed POC on Shedlock which helped in scheduling job for multiple EC2 instance in efficient and optimized way.","-Developed POC on Akka framework which helped in achieving concurrency in  microservice"]},{CompanyName:"GRAB",specialization:"DevSecOps Intern",MonthOfLeaving:"Aug",YearOfLeaving:"2020",works:["- Worked on AWS services  and REST Api","- Created a Slack bot which automate Devops processes","- Worked on Web Application Firewall to filter incoming traffic","- Worked on OKTA automation ","- Wrote a script which detects dangling domain and protect from subdomain attack"]},{CompanyName:"InfoCepts",specialization:"Data Analyst Intern",MonthOfLeaving:"May",YearOfLeaving:"2019",works:["- Data Analysis and Reporting was  performed using the MicroStrategy tool.","- Dataset used: Indian Lok Sabha Election."]}],skillsDescription:"",skills:[{skillname:"JAVA",percentage:"90%"},{skillname:"SPRING BOOT ",percentage:"80%"},{skillname:"AMAZON WEB SERVICE",percentage:"60%"},{skillname:"DATA STRUCTURE AND ALGORITHMS",percentage:"70%"},{skillname:"PYTHON",percentage:"70%"},{skillname:"REACTJS",percentage:"60%"},{skillname:"MongoDB",percentage:"50%"},{skillname:"HTML5",percentage:"70%"},{skillname:"CSS",percentage:"70%"},{skillname:"JAVASCRIPT",percentage:"70%"},{skillname:"MYSQL",percentage:"70%"},{skillname:"POSTGRES",percentage:"60%"},{skillname:"RUBY ON RAILS",percentage:"70%"},{skillname:"AKKA FRAMEWORK",percentage:"70%"}],portfolio:[{name:"Helmet Detection (Smart India Hackathon) ",description:["\u25cf Developed a software which counts the total number of vehicles on tra\ufb03c signal,detects people who are not wearing a helmet ,detects number plate of vehicles and generate e- challan for respective vehicle. ","\u25cf For  detecting people and bikes I used a pre trained YOLO model which was trained on a COCO dataset.YOLOV2 model which can detect a motorcycle and human being separately. It  also created bounding boxes around them. We used the concept of IOU(intersection over union)to calculate overlapping between different boxes of people and bikes","\u25cf For helmet detection we used around 10k images, 2000 of which were available online and the rest of the images we annotated ourselves by using MICROSOFT VOTT annotator.","\u25cf For detection of number plates, we have used OpenALPR.","\u25cf UI created was using Python Tkinter . "]},{name:"Face Recognition Payment Application",description:["\u25cf An A\u200bndroid app which recognizes your face and asks you to blink,if face matches successfully your transaction will be processed.","\u25cf For Face detection we have used \u200bDepthwise Separable Convolution \u200bby using \u200bMobile Vision API\u200b.","\u25cf Face Recognition using \u200bdlib state of the art face recognition model \u200bwhich is based on deep learning\u200b.","\u25cf For Bink detection it checks eye aspect ratio"]},{name:"Relive your Memories",description:["An Application where you need to create your account and you can store you memories as a Memory card","Tech Stack :","Front-End - React","Back-End - Node.js, Express.js & MongoDB"]},{name:"Blockchain",description:["Developed a simple blockchain using java wherein a distributed network was created and blocks were chained using Merkle tree .SHA-256 algorithm was used to generate hash."]}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},b=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{resumeData:g}),l.a.createElement(p,{resumeData:g}),l.a.createElement(h,{resumeData:g}),l.a.createElement(k,{resumeData:g}),l.a.createElement(E,{resumeData:g}),l.a.createElement(f,{resumeData:g}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.94be26f1.chunk.js.map