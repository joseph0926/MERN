import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACE = [
  {
    id: "p1",
    title: "barcelona",
    description: "aksfsdfjklsadjlfajdk",
    imageUrl:
      "https://w.namu.la/s/5a42e74ffccabab190b7cca8d366a027fb35fb077c4926474068a43588c50f17683db46c77fef5cf4229c75320efdb8b07a7092cdff2525eec5d8cc2073bfe0e937ce9616719b555ea255ff7dadc2d4d3878602feb3a93d7c939b9c6f497d6f368cc32b70397b1b80c05568942c475cd",
    address: "dummy location",
    location: {
      let: 40.1234,
      lng: -73.1234,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "barcelona",
    description: "aksfsdfjklsadjlfajdk",
    imageUrl:
      "https://w.namu.la/s/5a42e74ffccabab190b7cca8d366a027fb35fb077c4926474068a43588c50f17683db46c77fef5cf4229c75320efdb8b07a7092cdff2525eec5d8cc2073bfe0e937ce9616719b555ea255ff7dadc2d4d3878602feb3a93d7c939b9c6f497d6f368cc32b70397b1b80c05568942c475cd",
    address: "dummy location",
    location: {
      let: 40.1234,
      lng: -73.1234,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACE}></PlaceList>;
};

export default UserPlaces;
