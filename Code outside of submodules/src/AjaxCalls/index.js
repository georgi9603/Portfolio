const axios = require('axios');

const axiosCalls = (() => {
     const getUser = async () => {
        const response = await axios.get('https://api.github.com/users/georgi9603');
        return response;
    }
    return { getUser };
})();

export default axiosCalls