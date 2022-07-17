import { stack } from './stack';
const {
    html,
    css,
    bootstrap,
    scss,
    styled,
    javascript,
    typescript,
    react,
    gatsby,
    next,
    seo
} = stack;
export const projects = [
    {
        content:`Yhis is the first application where I used SSG inside NextJS application and it is first version of this app. I want to add here Redux to store list of favourite movie, tv show or person and write custom video player in the future.`,
        image:'/assets/images/man-gd20cf27d0_1920.jpg',
        path:'https://rad-web-filmbase.vercel.app/',
        stack:[html,css,styled,javascript,typescript,next],
        title:'RadWEB FilmBase'
    },
    {
        content:`This is main project where I sharing with my knowledge about of programming, seo and history.`,
        image:'/assets/images/radweb.jpg',
        path:'https://rad-web.vercel.app/',
        stack:[html,css,styled,javascript,typescript,next,seo],
        title:'RadWEB blog'
    },
    {
        content:`Another commercial website for my mate who is profesional camera operator and film editor.`,
        image:'/assets/images/bukowiecki.jpg',
        path:'https://filipbukowiecki.vercel.app/',
        stack:[html,styled,javascript,typescript,next,seo],
        title:'Filip Bukowiecki'
    },
    {
        content:`The next one buissness realization for the exporter of potatoes`,
        image:'/assets/images/river.jpg',
        path:'https://agromar.netlify.app/',
        stack:[html,css,styled,javascript,typescript,gatsby,seo],
        title:'Agromar'
    },
    {
        content:`The first commercial website for local blueberry grower near Poznań. Today this page gains TOP 10 in Google browser on local searching.`,
        image:'/assets/images/berries.jpg',
        path:'https://borowkowy-gaj.pl/',
        stack:[html,css,bootstrap,javascript,seo],
        title:'Borówkowy Gaj'
    },
    {
        content:`This is app, where you can find any movie which was in IMDB database. You may check rate, poster or description and add any movie to colletion of favourite movies.`,
        image:'/assets/images/cinema.jpg',
        path:'https://movie-app-xi-blush.vercel.app/',
        stack:[html,styled,react],
        title:'MovieApp'
    },
    {
        content:`The first attempt to create ToDo App in React and react-router. This app has 3 subpages. The first subpage contains only tasks, and second subpage have only notes. The last section of app give possibility create task or note.`,
        image:'/assets/images/tasks.jpg',
        path:'https://task-app-alpha.vercel.app/tasks',
        stack:[html,scss,styled,react],
        title:'TaskApp'
    },
    {
        content:`The first React App, where I connected with API. In this app you can find any place on Earth, and check current temperature, clouds or timezone.`,
        image:'/assets/images/weather.jpg',
        path:'https://weather-app-snowy-omega.vercel.app/',
        stack:[html,scss,react],
        title:'WeatherApp'
    },
    {
        content:`This is another portfolio page for chimney sweep. I used here first time AnimatedOnScroll plugin and Bootstrap.`,
        image:'/assets/images/chimney.jpg',
        path:'https://portfolio-kominiarza.vercel.app/',
        stack:[html,css,bootstrap],
        title:'Chimney sweep website'
    },
    {
        content:`Simple example one page website, where I learned SCSS preprocessor.`,
        image:'/assets/images/taxi.jpg',
        path:'https://euro-taxi-plus-srem.vercel.app/',
        stack:[html,scss],
        title:'Euro Taxi +'
    },
    {
        content:`The first semi-advanvced example multi-page website for builders company. I used here tool for lightbox gallery and css to changing realization subpage.`,
        image:'/assets/images/builders.jpg',
        path:'https://firma-budowlana.vercel.app/',
        stack:[html,css,scss,javascript],
        title:'Builders company website'
    },
    {
        content:`This is an example page for photographer.`,
        image:'/assets/images/photographer.jpg',
        path:'https://portfolio-fotografa.vercel.app/',
        stack:[html,css],
        title:'Photographer website'
    },
    {
        content:`This is an example page for cinematographer.`,
        image:'/assets/images/cinematography.jpg',
        path:'https://portfolio-kinematografa.vercel.app/',
        stack:[html,css],
        title:'Cinematographer website'
    },
    {
        content:`This is a first my private website which create and I put on github. It's example page for singers.`,
        image:'/assets/images/singer.jpg',
        path:'https://portfolio-piosenkarza.vercel.app/',
        stack:[html,css],
        title:'Singer website'
    },
    {
        content:`This is semi-comercial website for diler of electric cars and motors.`,
        image:'/assets/images/psp.jpg',
        path:'https://github.com/RadoslawAdamczyk2000/psp-motors',
        stack:[html,css,scss],
        title:'PSP website'
    }
]
