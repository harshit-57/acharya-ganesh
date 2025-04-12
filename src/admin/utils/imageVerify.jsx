import React, { useEffect, useState, useContext } from 'react';
import profile from './img/no-profile-picture-icon.svg';
import axios from 'axios';
import { Buffer } from 'buffer';

const ImageVerify = ({ imageURL, width, height }) => {
    const [img, setImg] = useState();
    const fetchImage = async () => {
        if (imageURL) {
            let token = localStorage.getItem('accessToken');
            axios
                .get(`${imageURL}`, {
                    headers: { authorization: token },
                    responseType: 'arraybuffer',
                })
                .then((res) => {
                    let data = `data:${
                        res.headers['content-type']
                    };base64,${new Buffer(res.data, 'binary').toString(
                        'base64'
                    )}`;
                    setImg(data);
                });
        } else {
            setImg(profile);
        }
    };
    useEffect(() => {
        fetchImage();
    }, [imageURL]);

    return <img src={img} alt="profileImg" width={width} height={height} />;
};

export default ImageVerify;
