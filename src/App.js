import React from "react";
import AppRouter from "./AppRouter";
import Navbarhome from "./views/Components/HomeComponents/NavbarHome";
import Footer from "./views/Components/HomeComponents/Footer";
function App() {
  // const dispatch = useDispatch();
  // let allUser = useSelector((state) => state.auth.allUsers);
  // useEffect(() => {
  //   dispatch(get_User());
  // }, [dispatch]);
  return (
    <div className="App">
      <Navbarhome />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
