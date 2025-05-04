import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";

import SearchPage from "../pages/SearchPage";
import DetailsPage from "../pages/DetailsPage";

import MoodDetectionPage from "../pages/MoodDetectionPage";
import WebcamMoodDetection from "../pages/WebcamMoodDetection";
import MoodResult from "../pages/MoodResult";
import QuizPage from "../pages/QuizPage";
import RecommendationResult from "../pages/RecommendationResult";






const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path :":explore",
                element: <ExplorePage/>
            },
            {
                path : ":explore/:id",
                element : <DetailsPage/>
            },
            
            {
                path:"search",
                element:<SearchPage/>
            },
            
            {
                path :"mood-detection",
                element:<MoodDetectionPage/>
            },
            {
                path: "webcam-mood",
                element: <WebcamMoodDetection />
            },
            {
                path: "mood-result/:mood",
                element: <MoodResult />
            },
            {
                path: "quiz",
                element: <QuizPage />
            },
            {
                path: "recommendation",
                element: <RecommendationResult/>
            },
           
            
        ]
    }
])

export default router;