import { ThemeProvider } from "styled-components";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero/Hero";
import Projects from "../components/Projects/Projects/Projects";
import Seo from "../components/Seo/Seo";
import Skills from "../components/Skills/Skills/Skills";
import Timeline from "../components/Timeline/Timeline/Timeline";
import { content } from "../data/content";
import { Global } from "../styles/Global";
import { theme } from "../styles/theme";

const Page = () => {
  const {seo,hero,projects,skills} = content;
  return(
    <ThemeProvider theme={theme}>
      <Global/>
      <Seo
        description={seo.description}
        image={seo.image}
        title={seo.title}
        canonical='https://rad-web.vercel.app'
      />
      <Hero
        buttons={[...hero.buttons]}
        content={hero.content}
        image={hero.image}
        socials={[...hero.socials]}
        title={hero.title}
      />
      <div className='wrapper'>
        <Timeline/>
        <div className="cell">
          <Skills
            content={skills.content}
            skills={[...skills.skills]}
            title={skills.title}
          />
        </div>
      </div>
      <Projects
        button={projects.button}
        cards={[...projects.cards]}
        content={projects.content}
        title={projects.title}
      />
      <Footer/>
    </ThemeProvider>
  )
}
export default Page;

