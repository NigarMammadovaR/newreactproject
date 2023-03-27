// import { SwapCalls } from "@mui/icons-material";
// import { SwapCalls } from '@material-ui/icons';

import axios from "axios";
import swal from 'sweetalert2';



const errorHandle = (error) =>{
    if(error.response.status == 404){
        swal.fire({
            icon:"error",
            title: "Oops",
            text:`${error.message}`,
        });
}
};

const Get = (url, header) =>{

    return new Promise ((resolve, reject)=>{
        axios.get(`${url}`,{
            header:{
                "Content-type":"application/json",
            },
        })
        .then((response)=>{
            resolve(response);
        })
        .catch((error)=>{
            errorHandle(error);
            reject(error);
        });
    });
};

export {Get};