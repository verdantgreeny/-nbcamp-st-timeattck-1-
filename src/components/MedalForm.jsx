import { useState } from "react";
import { Input } from "./Input";

const MedalForm = ({ medals, setMedals }) => {
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [bronze, setBronze] = useState("");

  const reset = () => {
    setCountry("");
    setGold("");
    setSilver("");
    setBronze("");
  }

  const verify = (country) => {
    if(!country || Number(country)) {
        alert("국가이름을 입력해주세요")
        return false
    } else if (!gold || !silver || !bronze) {
        alert("숫자를 입력해주세요")
        return false
    } else if (gold <0 || silver<0 || bronze<0 || gold%1 !== 0|| silver%1 !== 0|| bronze%1 !== 0) {
        alert("숫자는 정수")
        return false
    } else {
        return true
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMedal = {
        id: new Date().getTime(),
        country: country,
        gold: +gold,
        silver: +silver,
        bronze: +bronze, 
    }

    const addedMedal = medals.find((medal)=> medal.cuntry === newMedal.country);

    if(!verify(country,gold, silver, bronze)) {
        reset();
        return false
    }
    if(addedMedal) {
        alert('이미 등록')
        reset();
        return false
    } 



    setMedals([...medals, newMedal]);
    reset();

  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const existingMedal = medals.find((medal)=> medal.country === country);

    if(existingMedal) {
        const updatedMedals = medals.map((medal)=> {
            if(medal.id === existingMedal.id) {
                const newMedal = {
                    ...medal,
                    gold:+gold,
                    silver:+silver,
                    bronze: +bronze,
                };
                return newMedal;
            } else {
                return medal
            }
        });
        setMedals(updatedMedals);
        reset();
    }
  }
  
  return (
    <>
      <form onSubmit={handleSubmit} className="medal-form">
        <Input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="국가명"
          required
        >
          {" "}
          국가명{" "}
        </Input>

        <Input
          type="number"
          value={gold}
          onChange={(e) => setGold(+e.target.value)}
          placeholder="금메달"
          required
        >
          {" "}
          금메달{" "}
        </Input>
        <Input
          type="number"
          value={silver}
          onChange={(e) => setSilver(+e.target.value)}
          placeholder="은메달"
          required
        >
          {" "}
          은메달{" "}
        </Input>
        <Input
          type="number"
          value={bronze}
          onChange={(e) => setBronze(+e.target.value)}
          placeholder="동메달"
          required
        >
          {" "}
          동메달{" "}
        </Input>

        <button type="submit"> 추가 </button>
        <button type="button" onClick={handleUpdate}> 업데이트 </button>
      </form>
    </>
  );
};

export default MedalForm;
