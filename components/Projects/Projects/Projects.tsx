import { IntProjects } from "../../../types/interface";
import Card from "../Card/Card"
import Content from "../Content/Content"
import { Wrapper } from "./styles";

const Projects = ({button,cards,content,title}:IntProjects) => {
    return(
        <Wrapper>
            <Content
                content={content}
                title={title}
            />
            <ul>
                {cards.map(({content,image,path,stack,title},key) => 
                    <Card
                        button={button}
                        content={content}
                        image={image}
                        key={key}
                        path={path}
                        stack={stack}
                        title={title}

                    />
                )}
            </ul>
        </Wrapper>
    )
}
export default Projects;