import { Provider } from "react-redux";
import "./App.css";
import Steps from "./components/Steps.tsx";
import store from "./store/store.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PersonalInfoForm from "./components/PersonalInfoForm.tsx";
import EducationForm from "./components/EducationForm.tsx";
import WorkExperienceForm from "./components/WorkExperienceForm.tsx";
import SkillsForm from "./components/SkillsForm.tsx";
import AdditionalInfoForm from "./components/AdditionalInfoForm.tsx";
import ReviewForm from "./components/ReviewForm.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PersonalInfoForm />,
    },
    {
      path: "/education",
      element: <EducationForm />,
    },
    {
      path: "/work-experience",
      element: <WorkExperienceForm />,
    },
    {
      path: "/skills",
      element: <SkillsForm />,
    },
    {
      path: "/additional-info",
      element: <AdditionalInfoForm />,
    },
    {
      path: "/review",
      element: <ReviewForm />,
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <Steps />
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
