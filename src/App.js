import { AppWrapper } from "./components/styles";
import Home from "./components/Home";
import InstructorProfile from "./components/InstructorProfile";
import NotFound from "./components/NotFound";
import { useState } from "react";
import { Route, Switch ,Redirect} from "react-router-dom";

const App = ({ instructors }) => {
  // const homemadeRouter = () => {
  //   switch (currentPage) {
  //     case "/":
  //       return <Home instructors={instructors} goTo={setCurrentPage} />;

  //     case "/instructors/hamza":
  //       return (
  //         <InstructorProfile
  //           instructors={instructors}
  //           instructorSlug="hamza"
  //           goTo={setCurrentPage}
  //         />
  //       );

  //     case "/instructors/laila":
  //       return (
  //         <InstructorProfile
  //           instructors={instructors}
  //           instructorSlug="laila"
  //           goTo={setCurrentPage}
  //         />
  //       );

  //     case "/instructors/hasan":
  //       return (
  //         <InstructorProfile
  //           instructors={instructors}
  //           instructorSlug="hasan"
  //           goTo={setCurrentPage}
  //         />
  //       );

  //     case "/404":
  //       return <NotFound goTo={setCurrentPage} />;

  //     default:
  //       setCurrentPage("/404");
  //       break;
  //   }
  // };

  return (
    <AppWrapper>
      <Switch>
        <Route exact path="/">
          <Home instructors={instructors} />
        </Route>
        <Route exact path="/instructors/:instructorSlug">
          <InstructorProfile instructors={instructors} />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </AppWrapper>
  );
};

export default App;
