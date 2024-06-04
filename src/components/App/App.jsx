import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../Layout/Layout';
import Home from '../../page/Home';

export const App = () => {
    return (
        <div>
            <>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Route>
                </Routes>
            </>
        </div>
    )
};


