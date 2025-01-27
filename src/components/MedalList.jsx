import {useState} from "react";

const MedalList = ({ medals, setMedals }) => {
    const handleDelete = function (id) {
        const newMedalList = medals.filter((medal)=> medal.id !== id);
        setMedals(newMedalList);
    }

    medals.sort((a,b)=>b.gold-a.gold);
    
    console.log(medals)
  return (
    <>
      <ul>
        {medals.map((medal)=>(
            <li key={medal.id}>
                <span>{medal.country}</span>
                <span>금:{medal.gold}</span>
                <span>은:{medal.silver}</span>
                <span>동:{medal.bronze}</span>
                <button onClick={()=>handleDelete(medal.id)}>삭제</button>
            </li>
        ))}
      </ul>
    </>
  );
};

export default MedalList;
