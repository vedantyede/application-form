import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateFormData } from "../store/formSlice";
import { useNavigate } from "react-router-dom";

const AdditionalInfoForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    dispatch(updateFormData(data));
    navigate("/review");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl py-14">Additional Info</h1>
      <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Cover Letter:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className=" "
              id="inline-cover_letter"
              type="file"
              placeholder=""
              {...register("Cover Letter")}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Resume Upload:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className=""
              id="inline-resume_upload"
              type="file"
              placeholder=""
              {...register("Resume Upload")}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdditionalInfoForm;
