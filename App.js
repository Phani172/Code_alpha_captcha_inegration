import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';

const App = () => {
    return <>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                </Routes>
        </BrowserRouter>
    </>

};
export default App;