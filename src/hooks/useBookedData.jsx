import { useState } from "react";

const useBookedData = ({ data }) => {
    const [bookedData, setBookedData] = useState({});
    setBookedData(data);
    return { bookedData, setBookedData }
};

export default useBookedData;