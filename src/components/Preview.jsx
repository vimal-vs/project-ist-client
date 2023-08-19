import { useState } from "react";
import axios from "axios";
import Table from "./Table";

export default function Preview(props) {

  const userDataFields = [
    'Student Name',
    'Gender',
    'Dob',
    'Blood Group',
    'Faculty Of',
    'Degree',
    'Course',
    'Year Of Admission',
    'Application Register No.',
    'Student Phone No',
    'Student Email',
    'Student Aadhar No.',
    'Medium Of Instruction',
    'Student is',
    'Nationality',
    'Religion',
    'Community',
    'Identification Mark One',
    'Identification Mark Two',
    'Allergic To',
    'Father Name',
    'Father Occupation',
    'Father Office Address',
    'Father Phone No.',
    'Father Mail Id',
    'Mother Name',
    'Mother Occupation',
    'Mother Office Address',
    'Mother Phone No.',
    'Mother Mail Id',
    'Sibling Name',
    'Sibling Current Status',
    'Sibling Institution Name',
    'Address Communication',
    'Pin Code: Communication',
    'Address Permanent',
    'Pin Code: Permanent',
    'Student Photo',
    'Father Photo',
    'Mother Photo',
    'Student Signature',
    'Parent Signature',
    'Transfer Certificate',
    'SSLC Certificate',
    'HSC First Year',
    'HSC Second Year',
    'Migration Certificate',
    'Community Certificate',
    'Provisional Allotment Letter',
    "Affidavit by Student",
    "Affidavit by Parent"
  ];

  const data = { ...props };

  const datas = Object.keys(data).map((step, i) => {
    return (
      <Table key={step} keyy={userDataFields[i]} value={data[step]} status={!data[step] ? (<span className="text-red-500 text-lg font-medium">&#40;?&#41;</span>) : (<span className="text-green-500 text-xl font-bold">&#10003;</span>)} />
    );
  });

  const tableBorder = "border-[3px] border-gray-300 p-1";

  const [checkBox, setCheckBox] = useState(false);

  const handleCheckBox = (e) => {
    (e.target.checked) ? setCheckBox(true) : setCheckBox(false);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (checkBox === false) {
      alert("Verify & Agree Before Submission!");
      return;
    }

    axios.post(`${process.env.REACT_APP_API_URL}/api/upload`, { data })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        alert(err);
      });

    axios.post(`${process.env.REACT_APP_API_URL}/api/submit`, { data })
      .then(res => {
        if (res.data === 'Data Added') {
          window.location.href = '/success'
        }
        else alert(res.data);
      })
      .catch(err => {
        alert(err);
      });
  }
  return (
    <form className="flex flex-col gap-6 py-6" onSubmit={submitHandler}>
      <p className="font-lg font-semibold">Here&apos;s the preview of your form, kindly check before submission.</p>
      <table className={`text-center text-sm md:text-base w-full ${tableBorder}`}>
        <tbody>
          <tr>
            <th className={`${tableBorder} font-bold bg-blue-500/20 md:px-20`}>FIELD</th>
            <th className={`${tableBorder} font-semibold bg-blue-500/20 px-6 md:px-16`}>ENTERED VALUE</th>
            <th className={`${tableBorder} font-semibold bg-blue-500/20`}>STATUS</th>
          </tr>
        </tbody>
        <tbody>
          {datas}
        </tbody>
      </table>
      <div className="flex gap-2 items-start px-2">
        <input type="checkbox" name="confirmation" className="border-2 w-fit mt-[5px]" onChange={handleCheckBox} />
        <label htmlFor="confirmation" className="font-medium px-4">I assure that the above all details and documents are genuine and if found falsified, I understand that my admission will stand forfeited.</label>
      </div>
      <button type="submit" className="bg-green-500 text-white hover:bg-green-600 border-2 border-green-500 hover:border-green-600 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer transition duration-200 ease-in-out w-fit mx-auto">Submit</button>
    </form>
  )
};
