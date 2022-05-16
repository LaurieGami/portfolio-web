import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import styled from "styled-components";

import MainPage from "./components/pages/MainPage";
import Navigation from "./components/general/Navigation";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    min-height: 100vh;
`

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`

function App() {
  return (
    <BrowserRouter>
        <Container>
          <Navigation />
            <PageContent>
              <Routes>
                <Route exact path="/" element={<MainPage />} />
              </Routes>
            </PageContent>
        </Container>
      </BrowserRouter>
  );
}

export default App;
