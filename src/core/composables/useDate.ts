//import moment from "moment";
import dayjs from "dayjs";
import "dayjs/locale/es";
dayjs.locale("es");

export const useDate = () => {
  const formatDate = (date: string) => {
    return dayjs(date).format("DD MMMM YY");
  };

  return {
    formatDate,
  };
};
