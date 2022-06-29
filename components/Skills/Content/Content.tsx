import { IntProjectContent } from "../../../types/interface";
import { Wrapper } from "./styles";
const Content = ({content,title}:IntProjectContent) => {
    return(
        <Wrapper>
            <h2 dangerouslySetInnerHTML={{__html:title}} />
            <p dangerouslySetInnerHTML={{__html:content}} />
        </Wrapper>
    )
}
export default Content;