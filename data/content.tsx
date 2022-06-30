import { projects } from "./projects";
import { skills } from "./skills";
import { socials } from "./socials";
import { timeline } from "./timeline";

export const content = {
    seo:{
        title:'RadWEB - websites, web applications, positioning',
        description:'Welcome to the portfolio page where you will find out who I am and what projects I have completed as a web and application developer.',
        image:'/assets/images/river.webp',
    },
    hero:{
        buttons:[
            {
                path:'https://rad-web.vercel.app',
                title:'Blog'
            }
        ],
        image:'/assets/images/river.webp',
        content:`Hi! My name is Radosław Adamczyk, and I'm a owner RadWEB blog. I'm a young programmer which creating modern websites and web application. Moreover I have an experience in SEO.<br/> I finished in May 2019 Catholic Public Academic High School in Śrem. I had extend math, computer science, physics and hisotory. I create commercial website and privte apps for Janury 2020`,
        socials:[...socials],
        title:'Radosław Adamczyk'
    },
    projects:{
        button:'See more',
        content:'I already created my first real website at the end of 2019, where I only used HTML, CSS and Notepad. Much has changed since then. In mid-2020, I started creating applications and websites based on the React ecosystem (mainly Gatsby and Next). Currently, I have 3 commercial projects under my belt.',
        cards:[...projects],
        title:'Projects'
    },
    skills:{
        title:'Skills',
        content:`I have been creating websites since 2016 and since then I have had the pleasure of getting acquainted with many programming technologies. I took my first steps in this field with the use of HTML and CSS. Today my range of skills has expanded to include the React ecosystem along with its most popular frameworks.`,
        skills:[...skills]
    },
    timeline:[...timeline]
}