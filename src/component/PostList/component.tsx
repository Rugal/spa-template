import * as React from "react";
import Post from "./Post";
import { useQuery } from "@apollo/client";
import { findAllPostBrief } from "./request";
import { PostProperty } from "./Post/component";

const PostList = () => {
  const [expanded, setExpanded] = React.useState<number | false>(false);
  const handleChange = (postId: number) =>
    (event: React.SyntheticEvent, isExpanded: boolean) =>
      setExpanded(isExpanded ? postId : false);

  const { data } = useQuery(findAllPostBrief);

  return <React.Fragment>
    {
      data
        ? data.findAllPost.map((p: PostProperty) =>
          <Post key={p.id} expanded={expanded} handler={handleChange} post={p} />)
        : "Loading"
    }
  </React.Fragment>;
};

export default PostList;
