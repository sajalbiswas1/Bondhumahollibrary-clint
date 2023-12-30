
const ManualForm = () => {
    const handleForm = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const fatherName = form.fatherName.value;
        const motherName = form.motherName.value;
        const permanentAddress = form.name.value;
        const presentAddress = form.presentAddress.value;
        const nationality = form.nationality.value;
        const religion = form.religion.value;
        const userAge = form.userAge.value;
        const nidNumber = form.nidNumber.value;
        const relationShip = form.relationShip.value;
        const other = form.other.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const obj = { name, fatherName, motherName, permanentAddress, presentAddress, nationality, religion, userAge, nidNumber, relationShip, other, email, phoneNumber }
        console.log(obj);
        fetch('http://localhost:5000/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(data => console.log('data', data))

    }
    return (
        <div>
            <h2 className="text-xl font-bold mt-5 mb-2 ml-4">Manual Form...</h2>
            <hr className="border-black border-2 w-[300px]" />

            <form onSubmit={handleForm} className="card-body">
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">নাম :</span>
                        </label>
                        <input type="text" name="name" placeholder="নাম  " className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">পিতার নাম :</span>
                        </label>
                        <input type="text" name="fatherName" placeholder="পিতার নাম" className="input input-bordered" required />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">মাতার নাম</span>
                        </label>
                        <input type="text" name="motherName" placeholder="মাতার নাম" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">স্থায়ী ঠিকানা :</span>
                        </label>
                        <input type="text" name="permanentAddress" placeholder="গ্রাম,ডাকঘর,উপজেলা,জেলা" className="input input-bordered" required />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">বর্তমান ঠিকানা :</span>
                        </label>
                        <input type="text" name="presentAddress" placeholder="বর্তমান ঠিকানা" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">জাতীয়তা :</span>
                        </label>
                        <input type="text" name="nationality" placeholder="জাতীয়তা " className="input input-bordered" required />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">ধর্ম :</span>
                        </label>
                        <select className="input input-bordered" name="religion" id="">
                            <option value="বিবাহিত">হিন্দু </option>
                            <option value="অবিবাহিত">ইসলাম</option>
                            <option value="অবিবাহিত">খ্রিষ্টান</option>
                            <option value="অবিবাহিত">বৌদ্ধ </option>
                        </select>
                        {/* <input type="text" placeholder="ধর্ম " className="input input-bordered" required /> */}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">বয়স :</span>
                        </label>
                        <input type="text" name="userAge" placeholder="বয়স " className="input input-bordered" required />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">জাতীয়পরিচয় পত্র নম্বর : </span>
                        </label>
                        <input type="text" name="nidNumber" placeholder="জাতীয়পরিচয় পত্র নম্বর " className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text font-bold text-lg">বৈবাহিক অবস্থা :</span>
                        </label>
                        <select className="input input-bordered" name="relationShip" id="">
                            <option value="বিবাহিত">বিবাহিত</option>
                            <option value="অবিবাহিত">অবিবাহিত</option>
                        </select>
                        {/* <input type="text" placeholder="বিবাহিত/অবিবাহিত" className="input input-bordered" required /> */}
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">অন্যান্য :</span>
                        </label>
                        <input type="text" name="other" placeholder="অন্যান্য" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-lg">ইমেইল :</span>
                        </label>
                        <input type="email" name="email" placeholder="rohim@gmail.com" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-lg">ফোন নাম্বার :</span>
                    </label>
                    <input type="text" name="phoneNumber" placeholder="018xxxxxxx" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Registration</button>
                </div>
            </form>
        </div>
    );
};

export default ManualForm;