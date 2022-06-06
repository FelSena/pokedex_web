import { useEffect, useState } from "react";
import API, { clearBaseUrl } from "../API/API";

function Cards({ pkmUrl }) {
  const [currentPkm, setCurrentPkm] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const url = clearBaseUrl(pkmUrl);

  useEffect(() => {
    setIsMounted(true);
    API.get(url)
      .then((res) => {
        if (isMounted) {
          setCurrentPkm(res.data);
        }
      })
      .catch((err) => console.error(err));

    return () => {
      setIsMounted(false);
    };
  });

  return (
    <div>
      <img src={currentPkm?.sprites?.front_default} alt={currentPkm?.name} />
      {/* <span>{currentPkm?.name}</span> */}
      {currentPkm?.types?.map((type) => (
        <span>{type.type.name}</span>
      ))}
    </div>
  );
}

export default Cards;
