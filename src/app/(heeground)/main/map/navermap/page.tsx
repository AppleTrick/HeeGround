"use client";

import Script from "next/script";
export type NaverMap = naver.maps.Map;

type Lat = number;
type Lng = number;
export type Coordinates = [Lat, Lng];

export default function NaverMapPage(): JSX.Element {
  const initMap = () => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    });
  };

  return (
    <>
      <div>NaverMapPage</div>
      <Script onLoad={initMap} src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_API_KEY}`}></Script>
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </>
  );
}
