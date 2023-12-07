import { FaArrowAltCircleLeft } from "react-icons/fa";
const Form = () => {
    return (
        <div>
            <div className="text-center mt-5">
                <p className="text-xs">সর্বদা জ্ঞানের সন্ধানে</p>
                <h2 className="text-2xl font-bold mt-2">বন্ধুমহল পাঠাগার</h2>
                <p className="text-sm mt-2">প্রতিষ্ঠাতা: অধ্যাপক ডা. এস কে বল্লভ</p>
                <p className="text-sm mt-2">স্থাপিত: ২০২২ ইং </p>
                <p className="text-sm mt-2">হারতা, উজিরপুর, বরিশাল।</p>
            </div>
            <h2 className="text-xl font-bold mt-5 md:mt-10 mb-2 ml-4">Google Form...</h2>
            <hr className="border-black border-2 w-[300px]" />
            
            <div className="flex items-center gap-5 m-10">
                <a href="https://docs.google.com/forms/d/1qw5tMe-gBvV5HCg32KgoUn92xmj3jsHaTQxLqnpXbtA/edit" className="text-center md:p-10 pt-10 h-40 w-40 bg-slate-200">
                    <p>Form Here</p>
                    <p>Click Now</p>

                </a>
                <div className="flex items-center gap-2 bg-slate-50">
                    <FaArrowAltCircleLeft className="text-xl ml-2" />
                    <p className=" py-1 px-3 ">ফরম পূরণ করতে এখানে ক্লিক করুন</p>
                </div>
            </div>
        </div>
    );
};

export default Form;