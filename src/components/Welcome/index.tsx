import React from "react";

type WelcomeProps = {
  name?: string,
};

function Welcome(props:WelcomeProps) {
  const {name} = props;
  
  return <h3>Welcome{name?` ${name}!`:"!"}</h3>;
}

export default Welcome;
