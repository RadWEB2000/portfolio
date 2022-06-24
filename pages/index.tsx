import { ThemeProvider } from "styled-components";
import Hero from "../components/Hero/Hero"
import { Global } from "../styles/Global";
import { theme } from "../styles/theme";

const Page = () => {
  return(
    <ThemeProvider theme={theme}>
      <Global/>
      <Hero
        content={`Hi! My name is Radek and I have 22 years old. I'm a owner <a href='https://rad-web.vercel.app' target='_blank'>RadWEB blog</a> <br/> I'm current living in Poland, nearby Poznań. I have many passions, where programming is the most important. I'm creating websites for 2016. I've finished Catholic Public Academic High School in Śrem, where I was on extended math, physics, computer science and history.`}
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        status=''
        title="Radosław Adamczyk"
      />
    </ThemeProvider>
  )
}
export default Page;

