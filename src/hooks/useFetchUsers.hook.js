import { useState, useEffect, useRef } from "react";

export function useFetchUsers(page) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const prevPage = useRef();

  const url = `https://randomuser.me/api/?page=${page}&results=40`;

  useEffect(() => {
    if (prevPage.current === page) return;
    prevPage.current = page;

    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();

        setError(response);
      })
      .then((users) => setData([...data, ...users.results]))
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [page]);

  return { data, loading, error };
}
