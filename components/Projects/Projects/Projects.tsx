import { IntProjects } from "../../../types/interface";
import Card from "../Card/Card"
import Content from "../Content/Content"

const Projects = ({button,cards,content,title}:IntProjects) => {
    return(
        <div>
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
        </div>
    )
}
export default Projects;