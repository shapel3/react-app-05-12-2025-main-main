import Wrapper from "./components/Wrapper/Wrapper";
import Timer from './components/Timer/Timer'
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
 
  return (
    <>
    <Wrapper >
      <Tooltip textTooltip='this is a times, click START to start times'>
        <h2>Timer</h2>
      </Tooltip>
      <h2>Timer</h2>
      <Timer />
    </Wrapper>
     <Wrapper>
      <Tooltip textToottip='click button and select'>
        <h2>Dropdown Menu!</h2>
      </Tooltip>
      
      <DropdownMenu text='hi, user!'>
        <button>account</button>
        <button>logout</button>
      </DropdownMenu>
      <DropdownMenu text='type' widthList={500}>
        <p>Lorem, ipsum dolor.</p>
        <p>Animi, nemo veritatis.</p>
        <p>Sequi, at soluta.</p>
      </DropdownMenu>
      <DropdownMenu text='links'>
        <a href="">lorem 1</a>
        <a href="">lorem 2</a>
        <a href="">lorem 3</a>
      </DropdownMenu>
     </Wrapper>
      <Wrapper>
      <h2>Hello!</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, officia. Reiciendis ipsam iste nesciunt quaerat expedita ullam. Laudantium, soluta culpa?</p>
     </Wrapper>
    </>
  );
}

export default App;
