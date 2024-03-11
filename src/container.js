import React from "react";
import feeds from "./feeds"
import post from "./post"
export default function Container(props) {
  if (props.flag === 1) return <Feeds />;
  else if (props.flag === 2) return <post />;
}
