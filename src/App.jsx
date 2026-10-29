import {useState, useEffect} from 'react' ;
import Wrapper from "./components/Wrapper/Wrapper";
import Timer from './components/Timer/Timer'
import ModalWindow from "./components/ModalWindow/ModalWindow";


function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    const idTimeOut = setTimeout(()=>{
      setIsOpenModal(true)
    },2000);
    return () => {
      clearTimeout(idTimeOut)
    };
  }, []);
  const closeModal = ()=>(setIsOpenModal(false))
  return (
    <>
    {isOpenModal &&  <ModalWindow closeModal={closeModal}>
      <h3>modal Window</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quidem quasi consequatur fugiat animi incidunt, dignissimos deserunt illum praesentium esse!</p>
    </ModalWindow>}
    <Wrapper>
      <h2>Timer</h2>
      <Timer />
    </Wrapper>
     <Wrapper>
      <h2>Hi!</h2>
     </Wrapper>
      <Wrapper>
      <h2>Hello!</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, officia. Reiciendis ipsam iste nesciunt quaerat expedita ullam. Laudantium, soluta culpa?</p>
     </Wrapper>
    </>
  );
}

export default App;
