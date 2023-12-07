
const ManualForm = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mt-5 mb-2 ml-4">Manual Form...</h2>
            <hr className="border-black border-2 w-[300px]" />

            <form className="card-body">
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">নাম :</span>
                        </label>
                        <input type="text" placeholder="নাম  " className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">পিতার নাম :</span>
                        </label>
                        <input type="text" placeholder="পিতার নাম" className="input input-bordered" required />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">মাতার নাম</span>
                        </label>
                        <input type="text" placeholder="মাতার নাম" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">স্থায়ী ঠিকানা :</span>
                        </label>
                        <input type="text" placeholder="গ্রাম,ডাকঘর,উপজেলা,জেলা" className="input input-bordered" required />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">বর্তমান ঠিকানা :</span>
                        </label>
                        <input type="text" placeholder="বর্তমান ঠিকানা" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">জাতীয়তা :</span>
                        </label>
                        <input type="text" placeholder="জাতীয়তা " className="input input-bordered" required />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">ধর্ম :</span>
                        </label>
                        <input type="text" placeholder="ধর্ম " className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">বয়স :</span>
                        </label>
                        <input type="text" placeholder="বয়স " className="input input-bordered" required />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">জাতীয়পরিচয় পত্র নম্বর : </span>
                        </label>
                        <input type="text" placeholder="জাতীয়পরিচয় পত্র নম্বর " className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">বৈবাহিক অবস্থা :</span>
                        </label>
                        <input type="text" placeholder="বিবাহিত/অবিবাহিত" className="input input-bordered" required />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">অন্যান্য :</span>
                        </label>
                        <input type="text" placeholder="অন্যান্য" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">ইমেইল :</span>
                        </label>
                        <input type="email" placeholder="ইমেইল" className="input input-bordered" required/>
                    </div>
                </div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">ফোন নাম্বার :</span>
                        </label>
                        <input type="text" placeholder="ফোন নাম্বার" className="input input-bordered" required/>
                    </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Registration</button>
                </div>
            </form>
        </div>
    );
};

export default ManualForm;