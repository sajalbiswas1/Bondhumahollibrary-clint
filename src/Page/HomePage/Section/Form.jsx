import { FaArrowAltCircleLeft } from "react-icons/fa";
const Form = () => {
    return (
        <div className="flex items-center gap-5 m-10">
            <a href="https://docs.google.com/forms/d/1qw5tMe-gBvV5HCg32KgoUn92xmj3jsHaTQxLqnpXbtA/edit" className="text-center md:p-10 pt-10 h-40 w-40 bg-slate-200">
                <p>Form Here</p>
                <p>Click Now</p>

            </a>
            <div className="flex items-center gap-2 bg-slate-50">
                <FaArrowAltCircleLeft className="text-xl ml-2" />
                <p className=" py-1 px-3 ">ফরম পূরণ করতে এখানে ক্লিক</p>
            </div>
        </div>
    );
};

export default Form;