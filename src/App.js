import './App.css';
import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Layout from './components/layout/Layout';
import LawyersList from './components/lawyers/lawyersList';



function App(props) {
  return (
    <> 
     <Layout>
        <Routes>
           <Route path = "/" element = {<LawyersList />} /> 
        </Routes>
      </Layout>
  </>
  );
}

export default App;
