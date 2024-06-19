import { useForm } from "react-hook-form";

const InputComponent = (props: any) => {
  const { formState: { errors }, } = useForm({ mode: "onBlur", reValidateMode: "onChange" });
  return (
    <div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            {props.name}
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id="inline-password"
            type="text"
            placeholder={props.placeholder}
            {...props.register(`${props.name}`, { required: true })}
            aria-invalid={errors.field ? "true" : "false"}
          />
          {errors.field?.type === "required" && (
            <p role="alert">Field Required</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
