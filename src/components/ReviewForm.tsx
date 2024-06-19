import { useSelector } from "react-redux";

const ReviewForm = () => {
  const formData = useSelector((state: any) => state.form.formData);

  return (
    <div>
      <h1>ReviewForm</h1>
      <pre>{JSON.stringify(formData, null, 1)}</pre>

      <input
        className="shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="submit"
        onClick={() => {
          alert("Form submitted");
        }}
      />
    </div>
  );
};

export default ReviewForm;
