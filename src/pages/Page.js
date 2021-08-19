import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../components/Main";
import Kakao from "../components/kakao/Kakao";
import Krafton from "../components/krafton/Krafton";
import Nexon from "../components/nexon/Nexon";

const Page = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/kakao" component={Kakao} />
    <Route path="/krafton" component={Krafton} />
    <Route path="/nexon" component={Nexon} />
  </Switch>
);

export default Page;
