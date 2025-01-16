import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '865b772b8bc248458bb1d2936d200e26'
    }
})