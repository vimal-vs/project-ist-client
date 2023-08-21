import { useState } from "react";
import axios from "axios";
import Table from "./Table";

export default function Preview({ data, documents }) {

  const tableBorder = "border-[1px] border-blue-900 p-1";

  const userDataFields = [
    'Student Name',
    'Gender',
    'DOB',
    'Blood Group',
    'Faculty Of',
    'Degree',
    'Course',
    'Year Of Admission',
    'Application Register No.',
    'Student Phone No.',
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
    'Address for Communication',
    'Pin Code: Address for Communication',
    'Permanent Address',
    'Pin Code: Permanent Address'
  ];

  const userDocumentFields = [
    'StudentPhoto',
    'FatherGaurdianPhoto',
    'MotherPhoto',
    'StudentSignature',
    'ParentSignature',
    'TransferCertificate',
    'SSLCCertificate',
    'HSCFirstYearCertificate',
    'HSCSecondYearCertificate',
    'MigrationCertificate',
    'CommunityCertificate',
    'ProvisionalAllotmentLetter',
    "AffidavitByStudent",
    "AffidavitByParent"
  ];

  const userDataValues = data;

  const userDocumentValues = { ...documents };

  const userDocuments = new FormData();

  Object.keys(userDocumentValues).map((step, i) => {
    return userDocuments.append(userDocumentFields[i], userDocumentValues[step]);
  })

  const DisplayFormData = Object.keys(userDataValues).map((step, i) => {
    return (
      <Table key={step} keyy={userDataFields[i]} value={userDataValues[step]} status={!data[step] ? (<span className="text-red-500 text-lg font-medium">&#40;?&#41;</span>) : (<span className="text-green-500 text-xl font-bold">&#10003;</span>)} />
    );
  });

  const [checkBox, setCheckBox] = useState(false);

  const handleCheckBox = (e) => {
    (e.target.checked) ? setCheckBox(true) : setCheckBox(false);
  }

  const submitHandler = () => {

    const regNumber = data.ApplicationNumber;
    axios.post(`${process.env.REACT_APP_API_URL}/api/upload/${regNumber}`, userDocuments, {
      headers: {
        'content-type': 'multipart/form-data',
      }
    })
      .then(res => {
        if (res.status === 200) {
          axios.post(`${process.env.REACT_APP_API_URL}/api/submit/${regNumber}`, { data })
            .then(res => {
              if (res.data === 'Data Added') {
                window.location.href = '/success';
              }
              else alert(res.data);
            })
            .catch(err => {
              alert(err);
            });
        }
      })
      .catch(err => {
        alert(err);
      });
  }

  return (
    <div className="flex flex-col gap-6 py-6">
      <p className="font-lg font-semibold">Here&apos;s the preview of your form, kindly check before submission.</p>
      <table className={`text-sm md:text-base w-full ${tableBorder}`}>
        <tbody>
          <tr>
            <th className={`${tableBorder} text-white font-semibold bg-blue-900`}>FIELD</th>
            <th className={`${tableBorder} text-white font-semibold bg-blue-900 md:px-20`}>ENTERED VALUE</th>
            <th className={`${tableBorder} text-white font-semibold bg-blue-900`}>STATUS</th>
          </tr>
        </tbody>
        <tbody>
          {DisplayFormData}
        </tbody>
      </table>
      <div className="flex gap-2 items-start px-2">
        <input type="checkbox" name="confirmation" className="border-2 w-fit mt-[5px]" onChange={handleCheckBox} />
        <label htmlFor="confirmation" className="font-medium px-4 text-sm md:text-base">I assure that the above all details and documents are genuine and if found falsified, I understand that my admission will stand forfeited.</label>
      </div>
      <button onClick={submitHandler} className={`bg-green-500 text-white hover:bg-green-600 border-2 border-green-500 hover:border-green-600 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer transition duration-200 ease-in-out w-fit mx-auto ${!checkBox && 'pointer-events-none opacity-50 cursor-not-allowed'}`}>Submit</button>
    </div>
  )
};
