import { useParams } from "react-router";
import Details from "../Details/Details";
import { serviceData } from "./data";
/* this component will work when user click order button in service card, here use params get the guid and specify the service using guid. then call detais component to show the service in briefly */
const GetService = () => {
  console.log(serviceData);
  const { guid } = useParams();
  const servic = serviceData.find((serv) => {
    if (serv.guid === guid) {
      console.log(serv);
      return serv;
    }
    return "";
  });
  return (
    <div>
      <Details service={servic}></Details>
    </div>
  );
};

export default GetService;
