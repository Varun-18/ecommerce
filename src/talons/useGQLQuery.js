import { useQuery } from "@apollo/client";

const useGQLQuery = ({ query }) => {
  const { data, loading } = useQuery(query);

  return {
    data,
    loading,
  };
};

export default useGQLQuery;
