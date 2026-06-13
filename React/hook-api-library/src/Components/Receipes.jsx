import { useEffect, useState } from "react";
import useAPI from "../CustomHOOK/useAPI";

export const Receipes = () => {

  const [receipe, setReceipe] = useState([]);

  const { dataFromAPI, loading, error } = useAPI(
    "https://dummyjson.com/recipes",
  );
  console.log(dataFromAPI);

useEffect(() => {
  if (dataFromAPI?.recipes) {
    setReceipe(dataFromAPI.recipes);
  }
}, [dataFromAPI]);
  return (
  <>
  <div>Receipes</div>
  <ul>
    {receipe?.map((r,i)=>(
      <li key={i}>{r.name}</li>
    ))}
  </ul>
  </>
)
};

export default Receipes