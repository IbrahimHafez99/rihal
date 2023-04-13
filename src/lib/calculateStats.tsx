import { data } from "../dummy";
import moment from "moment";
type MyObject = {
  [key: string]: number;
};
export const calculateStats = () => {
  const locs = data.reduce((acc: MyObject, curr) => {
    if (!acc[curr.location]) acc[curr.location] = 0;
    acc[curr.location]++;
    return acc;
  }, {});
  const groupedData = data.reduce((acc: MyObject, curr) => {
    const month = moment(curr.theftDate).format("MMM YYYY");
    if (!acc[month]) {
      acc[month] = 0;
    }
    acc[month] += 1;
    return acc;
  }, {});
  return { locs, groupedData };
};
