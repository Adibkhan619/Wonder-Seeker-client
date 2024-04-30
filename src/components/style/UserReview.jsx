import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import UserCard from "./UserCard";

const UserReview = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            });
    }, []);
    console.log(users);
    return (
        
        <div className="flex  lg:my-16">
            <Marquee>
            {users.map((user) => (
                <UserCard user={user} key={user._id}></UserCard>
            ))}
            </Marquee>
        </div>
    );
};

export default UserReview;
