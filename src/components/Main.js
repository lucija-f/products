import dataClients from "../data.json";
import Card from "./Card";
import React, { useState } from "react";

function Main() {
  const [search, setSearch] = useState("");

  const products = {
    food: [
      "brasno",
      "Cokoladni sveti Nikola",
      "puding u vrecici",
      "riža",
      "suhe sljive",
      "pašta",
      "vindija puding (cokolada, vanilija, ljesnjak)",
      "cokolesnik",
      "pez bomboni",
      "Kava",
      "zivotinjsko carstvo",
      "domacica kesi",
      "banane",
      "Jaja",
      "Konzervirana tuna",
      "mlijeko",
      "Mljeveno meso (mijesano)",
      "cokolino",
      "keksolino",
      "kakao",
      "ulje",
      "jogurt",
    ],

    partying: [
      "Igrace karte",
      "domacica kesi",
      "pez bomboni",
      "RIDLEY X-BOW DISC SORA XBO01CM",
      "Petarde (pirat, male)",
    ],

    beer: ["Rostilj", "Mljeveno meso (mijesano)"],

    movies: [
      "DVD s 3 epizode Konana barbarina",
      "Ethernet kabel (10m)",
      "Televizor Telefunken",
    ],

    sport: [
      "skije",
      "BIANCHI VIA NIRONE 7 DAMA BIANCA SORA 7P-PEARL WHITE/BLACK-CK16",
      "CUBE AXIAL WS IRIDIUM´N´AQUA 2019",
      "ORBEA COMFORT 42 PACK BLU-GRN 2019",
      "ORBEA AVANT H60 BLU-GRN 2019",
      "BIANCHI VIA NIRONE 7 ALU SORA D2-BLACK/GRAPHITE-CK16",
      "CUBE ATTAIN BLACK´N´RED 2019",
      "BIANCHI DAMA BIANCA VIA NIRONE 7 ALU SORA REPARTO CORSE ABR-1 7F-CK16/BLACKWHITE",
      "BIANCHI NIRONE 7 ALU SORA REPARTO CORSE ABR-1 1D-CK16/BLK",
      "ORBEA AVANT H60 BK-RED-WH 2019",
      "RIDLEY X-BOW DISC SORA XBO01CM",
    ],

    music: ["slusalice", "Mobitel"],

    cats: ["Konzervirana tuna", "mlijeko"],

    walking: ["Cipele", "slusalice", "Mobitel"],

    shopping: [
      "Cipele",
      "Torba",
      "Novčanik",
      "Mobitel",
      "Olovka",
      "Vata",
      "Tuš za oči",
    ],

    fitness: ["sapun", "Torba", "Ručnik", "jogurt", "slusalice"],

    cars: ["WD-40", "Krpa za prasinu"],

    art: ["Olovka", "Tuš za oči"],

    nature: ["zemlja za cvijece", "Cipele", "zivotinjsko carstvo", "banane"],

    netflix: [
      "DVD s 3 epizode Konana barbarina",
      "Ethernet kabel (10m)",
      "Televizor Telefunken",
    ],
  };

  function productsSuggestion(arrayOfInterests) {
    const suggestions = [];

    arrayOfInterests.map((interes) => {
      if (interes in products) {
        const randNum = getRandomInt(products[interes].length);
        const oneItem = products[interes][randNum];
        suggestions.push(oneItem);
      }
    });

    return suggestions.join(", ");
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const personsArr = dataClients
    .filter((val) => {
      if (search === "") {
        return val;
      } else if (
        val.firstName.toLowerCase().includes(search.toLowerCase()) ||
        val.lastName.toLowerCase().includes(search.toLowerCase())
      ) {
        return val;
      }
    })
    .map((client, key) => (
      <Card
        key={key}
        firstName={client.firstName}
        lastName={client.lastName}
        age={client.age}
        gender={client.gender.toUpperCase()}
        interests={client.interests.join(", ")}
        suggestions={productsSuggestion(client.interests)}
      />
    ));

  return (
    <main>
      <div className="search-el">
        <input
          type="text"
          placeholder="Search for client..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      <div>{personsArr}</div>
    </main>
  );
}

export default Main;
