//its a fetch library we can fetch can post request allows you to interact
//with apis very easily
import axios from "axios";
const instance=axios.create({
    //from backend running terminal
    baseURL:"http://localhost:5001/shopping-site-37160/us-central1/api"
    //the api url(cloud function)
});

export default instance;
