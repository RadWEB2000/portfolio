import { ThemeProvider } from "styled-components";
import Hero from "../components/Hero/Hero/Hero";
import { socials } from "../data/socials";
import { Global } from "../styles/Global";
import { theme } from "../styles/theme";

const Page = () => {
  return(
    <ThemeProvider theme={theme}>
      <Global/>
      <Hero
        buttons={[
          {
            path:'',
            title:'Blog'
          },
          {
            path:'',
            title:'CV'
          },
        ]}
        content={`Ea quae ipsum excepturi. Quia distinctio iure aut. Molestias facilis eum est cumque quia doloribus nihil. Ad deleniti qui dolores. Officiis omnis ut suscipit. Possimus vitae quis et maxime fuga animi excepturiEa quae ipsum excepturi. Quia distinctio iure aut. Molestias facilis eum est cumque quia doloribus nihil. Ad deleniti qui dolores. Officiis omnis ut suscipit. Possimus vitae quis et maxime fuga animi excepturi.Ea quae ipsum excepturi. Quia distinctio iure aut. Molestias `}
        image='/assets/images/river.webp'
        socials={[...socials]}
        title='Radosława Adamczyk'
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

