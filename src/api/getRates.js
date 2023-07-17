import { fetchingData } from "./fetchingData";

export const getRates = async (setRates, setLoading, isRatesA) => {
  try {
    const data = await fetchingData();
    const array = isRatesA
      ? Object.entries(data).filter(
          (_, index) => index < Object.entries(data).length / 2
        )
      : Object.entries(data).filter(
          (_, index) => index > Object.entries(data).length / 2
        );
    setRates(array);
  } catch (error) {
    console.log(error);
    return error;
  } finally {
    setLoading(false);
  }
};
