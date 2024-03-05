import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

const BlogDetails = () => {
    const blog = useLoaderData()
    console.log(blog)
    const {_id, image, description, longdescription, date,} = blog;
    return (
        <div>
            <Banner/>
            <div>
                <p>{_id}</p>
                <img src={image} alt="" />
                <p>{description}</p>
                <p>{longdescription}</p>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default BlogDetails;