import React from "react";
import StoryListItem from "./StoryListItem";

const NewsStoryList = (({stories}) => {
  
    const storyItems = stories.map((story, index) => {

        return <StoryListItem key={index} story={story} />
    });

    return(
        <>
        <ul>
            <li>
                {storyItems}
            
            </li>
        </ul>

        </>
    )

})
export default NewsStoryList