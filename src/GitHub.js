import React, { useEffect, useState } from 'react';
import axios from 'axios'; // npm install axios
import ReactLoading from 'react-loading'; 

const sleep = (delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  };

function GitHub() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("greg");
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
        .then(res => { 
            // console.log(res.data.items); 
            setData(res.data.items);
                sleep(3500).then(() => {
                        console.log("Data resolved");
                    });
            setIsLoading(false);
            });
        },[ searchTerm ]);
    return (
        <div>
            {/* { isLoading &&
                <h4>Getting data...</h4>
            } */}
            { isLoading &&
                <ReactLoading type="spinningBubbles" color="#444" />
            }
        </div>
        );
    }
export default GitHub;