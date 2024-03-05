import { useForm } from "react-hook-form";
import Modal from "./Modal";
import PropTypes from "prop-types";
import axios from "axios";

const AddblogsModal = ({ isOpen, setIsOpen }) => {
  const { handleSubmit, register, reset } = useForm();
  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const submit = ({
    title,
    description,
    longdescription,
    category,
    date,
    imageurl,
  }) => {
    const blog = {
      title,
      imageurl,
      description,
      longdescription,
      category,
      date,
    };

    axios.post(`http://localhost:5000/addblogs`, blog)
    .then((res) => {
      console.log(res.data)
    })
    .catch(error => {
      console.log(error)
    })
    onCancel();
    reset();
  };

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <form onSubmit={handleSubmit(submit)}>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Title
            </label>
            <input
              className="w-full rounded-md border-2 py-2"
              type="text"
              id="title"
              {...register("title")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Image URL
            </label>
            <input
              className="w-full rounded-md border-2 py-2"
              type="text"
              id="imageurl"
              {...register("imageurl")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Short Description
            </label>
            <textarea
              className="w-full rounded-md border-2 py-2"
              type="text"
              id="description"
              {...register("description")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Long Description
            </label>
            <textarea
              className="w-full rounded-md border-2 py-2"
              type="text"
              id="longdescription"
              {...register("longdescription")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Category
            </label>
            <select
              className="w-full rounded-md border-2 py-2"
              id="category"
              {...register("category")}
            >
              <option value="remote work">Remote Work</option>
              <option value="Photography">Photography</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Home Improvement">Home Improvement</option>
              <option value="Productivity">Productivity</option>
              <option value="Parsenal Development">Personal Development</option>
              <option value="Creativity">Creativity</option>
            </select>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Date
            </label>
            <input
              className="w-full rounded-md border-2 py-2"
              type="date"
              id="date"
              {...register("date")}
            />
          </div>

          <div className="flex gap-3 justify-end">
            <button
              onClick={() => onCancel()}
              type="button"
              className="btn bg-red-400 text-white rounded-full border-2 py-2 uppercase"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-1 px-5 bg-black rounded-full text-white"
            >
              ADD
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

AddblogsModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default AddblogsModal;