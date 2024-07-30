import React from "react";
import Uploadpost from "../components/Uploadpost";
import Tweetpost from "../components/Tweetpost";
import data from "@/Data/data";

export default function Post() {
   const TweetData = data.tweets.posts[0];
   return <>
      <Uploadpost />
      <Tweetpost
         type={TweetData.type}
         dp_link={TweetData.dp_link}
         user_name={TweetData.user_name}
         image_link={TweetData.image_link}
         image_desc={TweetData.image_desc}
      />
   </>;
}
