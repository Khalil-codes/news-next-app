import Image from "next/image";
import React from "react";

const ProfilePage = ({ profile }) => {
    return (
        <div className="container">
            <div>
                <h1>Profile Page:</h1>
                <div className="profile-content">
                    <div>
                        <Image
                            src={profile.imageURL}
                            width={250}
                            height={250}
                        />
                    </div>
                    <div>
                        <h3>Name: {profile.name}</h3>
                    </div>
                    <div>
                        <h3>Position: {profile.position}</h3>
                    </div>
                    <div>
                        <h3>Description:</h3>
                        <p>{profile.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const response = await fetch(
        "https://my-json-server.typicode.com/khalil-codes/json-fake-api-demo/profile"
    );
    const data = await response.json();
    return {
        props: {
            profile: data,
        },
    };
};

export default ProfilePage;
