import "./App.scss";
import ImageOne from "./components/imageOne/imageOne.component";
import ImageTwo from "./components/imageTwo/imageTwo.component";
import ImageThree from "./components/imageThree/imageThree.component";
import TextBox from "./components/textBox/textBox.component";

function App() {
  return (
    <div className="App">
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBox />
      <ImageThree />
    </div>
  );
}

export default App;
