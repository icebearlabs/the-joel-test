import { IntroPage, TestPage, ResultPage } from "./pages";
import { AppContext } from "./main";

const App = () => {
  const renderPage = (status) => {
    console.log("Status:", status);
    switch (status) {
      case "intro":
        return <IntroPage />;
      case "test":
        return <TestPage />;
      case "result":
        return <ResultPage />;
    }
  };

  return (
    <div className="flex flex-col p-10 h-screen w-full">
      <AppContext.Consumer>
        {({ status }) => renderPage(status)}
      </AppContext.Consumer>
    </div>
  );
};

export default App;
