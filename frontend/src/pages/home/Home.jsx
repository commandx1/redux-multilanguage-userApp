import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PageHeader from "../../components/shared/PageHeader";
import { deleteCurrentUser, deleteUsers } from "../../store/actions/actions";
import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteCurrentUser());
    dispatch(deleteUsers());
  }, [dispatch]);

  return (
    <div className="home">
      <PageHeader />
    </div>
  );
};

export default Home;
