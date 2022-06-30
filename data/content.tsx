import { projects } from "./projects";
import { socials } from "./socials";

export const content = {
    seo:{
        title:'RadWEB - websites, internet applications, positioning',
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
        content:'Ea quae ipsum excepturi. Quia distinctio iure aut. Molestias facilis eum est cumque quia doloribus nihil. Ad deleniti qui dolores. Officiis omnis ut suscipit. Possimus vitae quis et maxime fuga animi excepturiEa quae ipsum excepturi. Quia distinctio iure aut. Molestias facilis eum est cumque quia doloribus nihil. Ad deleniti qui dolores. Officiis omnis ut suscipit. Possimus vitae quis et maxime fuga animi excepturi.E',
        cards:[...projects],
        title:'Projects'
    }
}