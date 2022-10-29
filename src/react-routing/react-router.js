import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Home from '../screens/home';
import Header from '../components/header';
import Templates from '../screens/templates';
import CvView from '../screens/cv-view';
import Form from '../screens/form';
import Cv2Form from '../screens/cv2-form';



const ReactRouter = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/templates" element={<Templates />} />
                    <Route exact path="/form/1" element={<Form />} />
                    <Route exact path="/Cv-view" element={<CvView />} />
                    <Route exact path="/form/2" element={<Cv2Form />} />
                </Routes>
            </Router>
        </div>
    )
}


export default ReactRouter