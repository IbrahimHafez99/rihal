import { v4 as uuidv4 } from "uuid";

export interface BikeTheft {
  id: string;
  caseTitle: string;
  description: string;
  theftDate: string;
  reportDate: string;
  location: string;
  latitude: number;
  longitude: number;
}

export const data: BikeTheft[] = [
  {
    id: uuidv4(),
    caseTitle: "Stolen Mountain Bike",
    description:
      "A $3,000 full-suspension mountain bike was stolen from a garage in Prenzlauer Berg.",
    theftDate: "2022-05-15",
    reportDate: "2022-01-16",
    location: "Prenzlauer Berg",
    latitude: 52.5392,
    longitude: 13.4242,
  },
  {
    id: uuidv4(),
    caseTitle: "Bike Theft at the Park",
    description:
      "A bike was stolen from a park in Neukölln while the owner was playing basketball.",
    theftDate: "2022-07-01",
    reportDate: "2022-07-02",
    location: "Neukölln",
    latitude: 52.4408,
    longitude: 13.4445,
  },
  {
    id: uuidv4(),
    caseTitle: "Bike Shop Break-in",
    description:
      "Thieves broke into a bike shop in Charlottenburg and stole several high-end road bikes.",
    theftDate: "2022-09-10",
    reportDate: "2022-09-11",
    location: "Charlottenburg",
    latitude: 52.5166,
    longitude: 13.3041,
  },
  {
    id: uuidv4(),
    caseTitle: "Bike Shop Break-in",
    description:
      "Thieves broke into a bike shop in Charlottenburg and stole several high-end road bikes.",
    theftDate: "2022-09-10",
    reportDate: "2022-09-11",
    location: "Charlottenburg",
    latitude: 52.5166,
    longitude: 13.3041,
  },
  {
    id: uuidv4(),
    caseTitle: "Bike Shop Break-in",
    description:
      "Thieves broke into a bike shop in Charlottenburg and stole several high-end road bikes.",
    theftDate: "2022-09-10",
    reportDate: "2022-09-11",
    location: "Charlottenburg",
    latitude: 52.5166,
    longitude: 13.3041,
  },
  {
    id: uuidv4(),
    caseTitle: "Bike Shop Break-in",
    description:
      "Thieves broke into a bike shop in Charlottenburg and stole several high-end road bikes.",
    theftDate: "2022-09-10",
    reportDate: "2022-09-11",
    location: "Charlottenburg",
    latitude: 52.5166,
    longitude: 13.3041,
  },
  {
    id: uuidv4(),
    caseTitle: "Bike Shop Break-in",
    description:
      "Thieves broke into a bike shop in Charlottenburg and stole several high-end road bikes.",
    theftDate: "2022-09-10",
    reportDate: "2022-09-11",
    location: "Charlottenburg",
    latitude: 52.5166,
    longitude: 13.3041,
  },
  {
    id: uuidv4(),
    caseTitle: "Bike Shop Break-in",
    description:
      "Thieves broke into a bike shop in Charlottenburg and stole several high-end road bikes.",
    theftDate: "2022-09-10",
    reportDate: "2022-09-11",
    location: "Charlottenburg",
    latitude: 52.5166,
    longitude: 13.3041,
  },
];
