import { useState } from "react";



const PlayerName = () => {
    const [isPlayerEdit, setPlayerEdit] = useState<boolean>(true);
  
  const handleplayerEdit = ()=>{
    setPlayerEdit(!isPlayerEdit)
  }
  return (
    <div>{isPlayerEdit?

        (<div onClick={handleplayerEdit} className="playerName">
          <h1>Player Name</h1>
        </div>):
        (
          <form>
            <input type="text" />
            <button type='button'>Save</button>
          </form>
        )
        }
    </div>
  )
}

export default PlayerName