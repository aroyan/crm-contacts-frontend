import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import CardList from "./CardList";

function App() {
  return (
    <div className="container flex justify-center items-center flex-wrap">
      <AddItem />
      <CardList />
    </div>
  );
}

export default App;
