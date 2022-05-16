import useSWR, { useSWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const baseUrl = "https://www-old.cmuccdc.org/api2/dustboy/ranking/1/45?v=1";

const useCmuccdc = () => {
  const { data,mutate, error } = useSWR(baseUrl, fetcher);
  console.log(`fetched new data from cmuccdc at ${new Date().toLocaleString("th-TH")}`)
  return {
    isLoading: !error && !data,
    isError: error,
    data,
    mutate
  };
};

export default useCmuccdc;
