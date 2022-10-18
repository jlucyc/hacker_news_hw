import React, { useEffect, useState } from "react";
import NewsStoryList from "../components/NewsStoryList";
import StoryListItem from "../components/StoryListItem";


const NewsContainer = (() => {
  
    const [stories, setStories] = useState([])
        const [contents, setContents] = useState ([])

        useEffect(() => {
          fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
          .then(res => res.json())
          .then(data => setStories(data))
            fetch("https://hacker-news.firebaseio.com/v0/item/{storyId}.json ")
            .then(res => res.json())
          .then(data => setStories(storyId))






           
            
       },[])

    
     
     
        // const storyPromises = stories.map((story) => {
        // return fetch(story).then(res => res.json())})
        // Promise.all(storyPromises).then((data) => {
        // setContents(data)})

        Promise.all( storyPromises)
        .then( (data) => {
            setContents(data);
            ;
        })
     
     
     

         


    return(
        <>
        <NewsStoryList stories={stories}/>
        </>
    )

})
export default NewsContainer


// https://hacker-news.firebaseio.com/v0/topstories.json
// 