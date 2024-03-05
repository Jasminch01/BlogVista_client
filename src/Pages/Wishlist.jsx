import { useLoaderData } from "react-router-dom";

const Wishlist = () => {
    const wishlist = useLoaderData()
    console.log(wishlist)
    return (
        <div>
        </div>
    );
};

export default Wishlist;