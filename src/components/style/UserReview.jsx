import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import UserCard from "./UserCard";

const UserReview = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://tourism-management-server-gold.vercel.app/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            });
    }, []);
    console.log(users);
    return (
        
        <div className="flex my-10 lg:my-16">
            <Marquee>
            {users.map((user) => (
                <UserCard user={user} key={user._id}></UserCard>
            ))}
            </Marquee>
        </div>
    );
};

export default UserReview;
