import React from "react";
import Accordions from "./components/Accordions/Accordions";
import accordionData from "./components/Accordions/utils/content";
// import Calculator from "./components/Calculator";
// import Counter from "./components/Counter";
import Form from "./components/Form";
// import HiddenSearchBar from "./components/HiddenSearchBar";
// import Meal from "./components/Meal";
// import Testimonials from "./components/Testimonials";
// import Todo from "./components/Todo";
// import ToggleBackgroundColor from "./components/ToggleBackgroundColor";

const App = () => {
  return (
    <div>

      {/* <div className="accordion">
        {accordionData.map(({ title, content }, index) => (
          <Accordions key={index} title={title} content={content} />
        ))}
      </div> */}

      {/* <Calculator /> */}
      {/* <Counter /> */}

      < Form />

      {/* <HiddenSearchBar /> */}

      {/* <Meal /> */}

      {/* <Testimonials /> */}
      {/* <Todo /> */}
      {/* <ToggleBackgroundColor /> */}
    </div>
  );
};

export default App;
