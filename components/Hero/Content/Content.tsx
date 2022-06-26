import Link from "next/link";
import { IntHeroButtons, IntHeroContent } from "../../../types/interface";
import { Wrappper } from "./styles";
const Content = ({buttons,content,title}:IntHeroContent) => {
    return(
        <Wrappper>
            <section>
                <h1 dangerouslySetInnerHTML={{__html:title}}/>
                <p dangerouslySetInnerHTML={{__html:content}}/>
            </section>
            <ul>
                {buttons.map(({path,title}:IntHeroButtons,key:number) =>
                    <li key={key}>
                        <Link href={path}>
                            <a>
                                {title}
                            </a>
                        </Link>
                    </li>
                )}
            </ul>
        </Wrappper>
    )
}
export default Content;