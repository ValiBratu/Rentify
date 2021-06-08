import React, { useEffect } from 'react';
import { useState } from 'react';
import RentPostCards from '../rentPosts/RentPostCards';

function UserFavoritePosts(props) {


    const [posts, setPosts] = useState([]);

    const userPostsAPI = "https://localhost:44364/api/UserFavorites/";

    useEffect(() => {

        fetch(userPostsAPI + props.id)
            .then(response => response.json())
            .then(data => {

                setPosts(data);
            })
            .catch(err => console.log(err))
    }, [props]);


    const testPdfFetch = () => {
        fetch('https://localhost:44364/api/Export/'+props.id).then(function (response) {
            return response.blob();
        }).then(function (myBlob) {
            var objectURL = URL.createObjectURL(myBlob);

            const pdfDiv = document.getElementById("downloadPDF");

            const downloadLink = document.createElement("a");

            downloadLink.href = objectURL;
            downloadLink.download = "Posts.pdf";
            pdfDiv.appendChild(downloadLink);
            downloadLink.click();

            pdfDiv.removeChild(downloadLink);

            objectURL = URL.revokeObjectURL(myBlob);
            
        })
    }

    return (
        <>

            <div className="tab-content ml-1" id="myTabContent">
                <div id="basicInfo" role="tabpanel" aria-labelledby="basicInfo-tab">
                    
                  
                    <RentPostCards posts={posts}></RentPostCards>
                    <hr />
                    <button type="button" className="btn btn-success" style={{ marginLeft: "420px" }} onClick={testPdfFetch}>Export Posts to PDF </button>
                    <br></br>
                    <div id="downloadPDF"></div>
                </div>
            </div>



        </>
    );

}

export default UserFavoritePosts;