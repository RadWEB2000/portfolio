import { content } from "../../../data/content";
import Card from "../Card/Card"

const Timeline = () => {
    const {timeline} = content;
    return(
        <div>
            <ul>
                {timeline.map(({content,date,title},key) =>
                    <Card
                        content={content}
                        date={date}
                        key={key}
                        title={title}
                    />
                )}
                
            </ul>
        </div>
    )
}
export default Timeline;