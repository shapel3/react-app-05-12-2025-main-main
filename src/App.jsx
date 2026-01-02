import Task from "./components/Task/Task";
import Comment from "./components/Comment/Comment";

const dataTask = {
  id:1,
  text: 'Learning prop-types',
  days:4,
  isDone:false
}
const comment={
  id:1,
  content:'cool',
  amountLike:135,
  isNew:false
}


function App() {
  return (
    <>
    <Task dataTask={dataTask}  />
    <Comment comment={comment}/>
    </>
  );
}

export default App;
