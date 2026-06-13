import { useReducer } from "react"

const initialState={coin:0,level:1}

function coinReducer(state,action){
    switch (action.type){
        case "COLLECT_COIN":{
            return {...state, coin:state.coin + 1, level:state.level}
        }
        case "LOSE_COIN":{
            return {...state,coin: state.coin -1,level:state.level}
        }
        case "RESET":{
            return{ coin:0, level:1}
        }
        case "COLLECT_5_COINs":{
            return {...state, coin:state.coin+5, level:state.level}
        }case "BONUS":{
            return {...state, coin:state.coin+10, level:state.level}
        }
        case "LEVEL_UP":{
            if(state.coin>=10){
                return {...state, coin:0, level:state.level+1}
            }
            else {
                return state
            }

        }
        default:
            return state
    }

}


const CoinCollecter = () => {
    const [state,dispatch]=useReducer(coinReducer,initialState)
  return (
   <>
    <div>Coin Collecter</div>
    <h1>Coin:{state.coin}</h1>
    <h1>Level:{state.level}</h1>
    <button onClick={()=>dispatch({type:"COLLECT_COIN"})}>Collect Coin</button>
    <button onClick={()=>dispatch({type:"LOSE_COIN"})}>Lose Coin</button>
    <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
    <button onClick={()=>dispatch({type:"COLLECT_5_COINs"})}>Collect 5 Coins</button>
    <button onClick={()=>dispatch({type:"BONUS"})}>Bonus Coins</button>
    <button onClick={()=>dispatch({type:"LEVEL_UP"})}>Level UP</button>



   </>

  )
}

export default CoinCollecter