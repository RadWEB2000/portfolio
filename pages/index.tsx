import { ThemeProvider } from "styled-components";
import Hero from "../components/Hero/Hero/Hero";
import Projects from "../components/Projects/Projects/Projects";
import { content } from "../data/content";
import { socials } from "../data/socials";
import { stack } from "../data/stack";
import { Global } from "../styles/Global";
import { theme } from "../styles/theme";

const Page = () => {
  const {seo,hero} = content;
  return(
    <ThemeProvider theme={theme}>
      <Global/>
      <Hero
        buttons={[...hero.buttons]}
        content={hero.content}
        image={hero.image}
        socials={[...hero.socials]}
        title={hero.title}
      />
      <Projects
        button="See more"
        cards={[
          {
            content:``,
            image:'',
            path:'',
            stack:[html,css,typescript],
            title:'Filip Bukowiecki'
          }
        ]}
        content={`Ea quae ipsum excepturi. Quia distinctio iure aut. Molestias facilis eum est cumque quia doloribus nihil. Ad deleniti qui dolores. Officiis omnis ut suscipit. Possimus vitae quis et maxime fuga animi excepturiEa quae ipsum excepturi. Quia distinctio iure aut. Molestias facilis eum est cumque quia doloribus nihil. Ad deleniti qui dolores. Officiis omnis ut suscipit. Possimus vitae quis et maxime fuga animi excepturi.E`}
        title="Projects"
      />
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
      <li>a</li>
    </ThemeProvider>
  )
}
export default Page;

