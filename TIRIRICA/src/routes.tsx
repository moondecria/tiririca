import{createBrowserRouter} from "react-router-dom";

import {Home} from "./Home/index";
import {Sobre} from "./Sobre/index";
import {contato} from "./pages/contato/index"

const router = createBrowserRouter ([

    {
        path:"/",
        element: <Home/>



    },


    {
       path:"/Sobre",
       element:<Sobre/>




    }

    {

       path:"/contato",
       element:<contato/>
    }

])

export{router};