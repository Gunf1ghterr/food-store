import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";
import { useAddress } from "../../hooks/useAddress";
import React from "react";

export const CheckoutMap: React.FC<{
  setAddress: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setAddress }) => {
  const [showMap, setShowMap] = useState(false);
  const [coords, setCoords] = useState("");
  const [placemarkCoordinates, setPlacemarkCoordinates] = useState<number[]>(
    []
  );

  const { data, isSuccess } = useAddress(
    `https://geocode-maps.yandex.ru/1.x/?apikey=${process.env.REACT_APP_API_KEY}&geocode=${coords}&format=json`,
    showMap
  );

  useEffect(() => {
    if (isSuccess) {
      setAddress(`${data?.description || ""} ${data?.name}`);
    }
  }, [data, isSuccess, setAddress]);

  const handleMapClick = (e: any) => {
    const clickedCoords: number[] = e.get("coords");
    setPlacemarkCoordinates(clickedCoords);
    setCoords(clickedCoords.slice().reverse().join(","));
  };

  return (
    <>
      <div className="col-12 mb-3 ">
        <div className="card">
          <div className="card-header d-flex justify-content-center">
            <p className="h4">Карта</p>
            <div className="form-check form-switch mx-3 mt-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={() => setShowMap(!showMap)}
              />
            </div>
          </div>

          {showMap && (
            <div className="card-body p-0">
              <YMaps
                enterprise
                query={{ apikey: String(process.env.REACT_APP_API_KEY) }}
              >
                <Map
                  defaultState={{
                    center: [58.602658, 49.666612],
                    zoom: 14,
                    controls: ["zoomControl", "fullscreenControl"],
                  }}
                  modules={["control.ZoomControl", "control.FullscreenControl"]}
                  options={{
                    suppressMapOpenBlock: true,
                  }}
                  width="100%"
                  height="500px"
                  onClick={handleMapClick}
                >
                  <Placemark
                    geometry={placemarkCoordinates}
                    id="position"
                    modules={["geoObject.addon.balloon"]}
                    properties={{ balloonContentHeader: "Доставить сюда" }}
                    options={{
                      preset: "islands#redDotIcon",
                    }}
                  />
                </Map>
              </YMaps>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
