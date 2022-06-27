import { IntProjectContent } from "../../../types/interface";
const Content = ({content,title}:IntProjectContent) => {
    return(
        <section>
            <h2 dangerouslySetInnerHTML={{__html:title}} />
            <p dangerouslySetInnerHTML={{__html:content}} />
        </section>
    )
}
export default Content;