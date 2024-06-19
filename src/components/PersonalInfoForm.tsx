import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateFormData } from "../store/formSlice";
import { useNavigate } from "react-router-dom";
import InputComponent from "../common/InputComponent";

const PersonalInfoForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    dispatch(updateFormData(data));
    navigate("/education");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl py-14">Personal Info</h1>
      <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          register={register}
          name="Name:"
          placeholder="Enter Name"
        />
        <InputComponent
          register={register}
          name="Email:"
          placeholder="Enter Email"
        />
        <InputComponent
          register={register}
          name="Phone:"
          placeholder="Enter Phone"
        />
        <InputComponent
          register={register}
          name="Address:"
          placeholder="Enter Address"
        />

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
