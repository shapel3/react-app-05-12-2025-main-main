import GroupCheckBoxes from "./components/GroupCheckBoxes/GroupCheckBoxes";

const interestsList = [
  "Photography",
  "Traveling",
  "Reading",
  "Music",
  "Cooking",
  "Gaming",
  "Hiking",
  "Fitness",
  "Art",
  "Technology",
  "Writing",
  "Gardening",
  "Cycling",
  "Dancing",
  "Swimming",
];
const sweets = [

  "Chocolate",

  "Candy",

  "Ice cream",

  "Cake",

  "Cookies",

  "Donuts",

  "Brownies",

  "Cupcakes",

  "Marshmallows",

  "Lollipops",

  "Macarons",

  "Fudge",

  "Cheesecake",

  "Muffins",

  "Tarts"

];
function App() {
  return(
   <>
    <GroupCheckBoxes list={interestsList} />
    <hr />
    <GroupCheckBoxes list={sweets} />
    <hr />
    <GroupCheckBoxes list={[1,2,3]} />
  </>
  );
}

export default App;
