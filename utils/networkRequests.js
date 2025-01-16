const axios = require("axios");

exports.metaPostRequest = async (data) => {
    return await axios({
        method: "POST",
        url: process.env.META_API,
        headers: {
            Authorization: `Bearer ${process.env.GRAPH_API_TOKEN}`,
            'Content-Type': 'application/json',
        },
        data
    });
};

exports.postRequest = async (url, data, header) => {
    return await axios({
        method: "POST",
        url,
        headers :{
            Authorization: `Bearer`,
            'Content-Type': 'application/json',
            ...header
        },
        data
    });
};

exports.getRequest = async (url, header) => {
    return await axios({
        method: "GET",
        url,
        headers: {
            Authorization: `Bearer`,
            'Content-Type': 'application/json',
            ...header
        },
    });
};