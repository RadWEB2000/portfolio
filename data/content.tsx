import { socials } from "./socials";

export const content = {
    seo:{
        title:'',
        description:'',
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
    }
}