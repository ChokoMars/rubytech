import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { UserCard, UsersList } from "./components";
import { useFetchUsers } from "./hooks/useFetchUsers.hook";

import "./App.css";

function App() {
  // hello
  const [page, setPage] = useState(1);
  const [curUser, setCurUser] = useState(null);

  const { data, loading, error } = useFetchUsers(page);

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setPage((page) => page + 1);
    }
  }, [inView]);

  const onSelectUser = (id) => {
    const currentUser = data.find((user) => {
      return user.cell === id;
    });
    setCurUser(currentUser);
  };

  return (
    <div className="App">
      {!loading && !error && (
        <>
          <UsersList
            users={data}
            onSelectUser={onSelectUser}
            currentRef={ref}
          />
          <UserCard curUser={curUser} />
          <div> Изменения для переноса </div>
        </>
      )}
    </div>
  );
}

export default App;
