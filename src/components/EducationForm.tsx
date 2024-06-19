import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateFormData } from "../store/formSlice";
import { useNavigate } from "react-router-dom";
import InputComponent from "../common/InputComponent";

const EducationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    dispatch(updateFormData(data));
    navigate("/work-experience");
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "jobs",
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl py-14">Education</h1>
      <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item: any, index: any) => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            <InputComponent
              name="Institute/School:"
              register={register}
              placeholder="Enter Institute/School"
            />
            <InputComponent
              name="Board/University:"
              register={register}
              placeholder="Enter Board/University"
            />
            <InputComponent
              name="CGPA:"
              register={register}
              placeholder="Enter CGPA"
            />
            <InputComponent
              name="Passing Year"
              register={register}
              placeholder="Enter Passing Year"
            />
            <button
              className="shadow bg-red-400 hover:bg-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={() => remove(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <div className="flex flex-col justify-center items-center">
          <button
            className="shadow bg-green-400 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded my-2"
            type="button"
            onClick={() =>
              append({ companyName: "", jobTitle: "", duration: "" })
            }
          >
            Add Education
          </button>
          <button
            className="shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;
