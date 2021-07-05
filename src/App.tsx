import Hello from './component/Hello';
import Header from './component/Header';
import './App.css';

type Props = {
  name: string,
}
let themes = [{
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
}];

function App(props: Props) {
  return (
    <div className="App">
      <Header heading={"React + TypeScript Demo"}/>
      Hello {props.name}
      <Hello  
        str={"Ashish Siddhu"} 
        obj={
          {
            value:[22,44],
            entries: ["doe","John"]
          }
        } 
        arr={[1,2,3,4,5,6,7]}
        arrayOfObj= {themes}
        />
    </div>
  );
}

export default App;
