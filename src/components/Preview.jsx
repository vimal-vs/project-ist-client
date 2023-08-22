import { useState } from "react";
import Table from "./Table";
import axios from "axios";

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

  const userDocumentFieldsPreview = [
    'Student Photo',
    'Father/Gaurdian Photo',
    'Mother Photo',
    'Student Signature',
    'Parent Signature',
    'Transfer Certificate',
    'SSLC Certificate',
    'HSC First Year Certificate',
    'HSC Second Year Certificate',
    'Migration Certificate',
    'Community Certificate',
    'Provisional Allotment Letter',
    "Affidavit By Student",
    "Affidavit By Parent"
  ];

  const userDataValues = data;

  const userDocumentValues = { ...documents };

  const userDocuments = new FormData();

  Object.keys(userDocumentValues).map((step, i) => {
    return userDocuments.append(userDocumentFields[i], userDocumentValues[step]);
  })

  const DisplayFormData = Object.keys(userDataValues).map((step, i) => {
    return (
      <Table key={step} keyy={userDataFields[i]} value={userDataValues[step]} status={!data[step] ? (<span className="text-red-500 font-medium">&#40;?&#41;</span>) : (<span className="text-green-500 text-xl font-bold">&#10003;</span>)} />
    );
  });
  const DisplayDocumentData = Object.keys(documents).map((step, i) => {
    return (
      <Table key={step} keyy={userDocumentFieldsPreview[i]} value={userDocumentValues[step]?.name} status={userDocumentValues[step]?.name === undefined ? (<span className="text-red-500 font-medium">&#40;?&#41;</span>) : (<span className="text-green-500 text-xl font-bold">&#10003;</span>)} />
    );
  });


  const [checkBox, setCheckBox] = useState(false);

  const handleCheckBox = (event) => {
    (event.target.checked) ? setCheckBox(true) : setCheckBox(false);
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
              else alert("Register Number already exists!");
            })
            .catch(err => {
              alert(err);
            });
        }
      })
      .catch(err => {
        alert("Check your file(s) size & try again!");
      });
  }
  return (
    <div className="flex flex-col gap-6 py-6">
      <p className="font-lg font-semibold">Here&apos;s the preview of your form, kindly check before submission.</p>
      <table className={`w-full md:w-3/4 ${tableBorder}`}>
        <tbody>
          <tr>
            <th className={`${tableBorder} text-white md:font-semibold bg-blue-900 text-xs md:text-base`}>FIELD</th>
            <th className={`${tableBorder} text-white md:font-semibold bg-blue-900 md:px-20 text-xs md:text-base`}>ENTERED VALUE</th>
            <th className={`${tableBorder} text-white md:font-semibold bg-blue-900 text-xs md:text-base`}>STATUS</th>
          </tr>
        </tbody>
        <tbody>
          {DisplayFormData}
        </tbody>
        <tbody>
          {DisplayDocumentData}
        </tbody>
      </table>
      <div className="flex flex-col gap-4 border-y-2 py-8">
        <h3 className="md:text-lg font-medium underline underline-offset-4 decoration-yellow-500">Here's the Preview of the uploaded images :</h3>
        <div className="flex flex-col gap-12 px-4 md:w-3/4">
          <div className="flex flex-col md:flex-row md:justify-between gap-6">
            {userDocumentValues["StudentPhoto"]?.name !== undefined &&
              <div className="flex flex-col gap-2 md:w-52">
                <p className="">Student&apos;s Photo :</p>
                <img src={URL.createObjectURL(userDocumentValues["StudentPhoto"])} alt="img" className="h-40 object-contain border-2 border-gray-300 bg-gray-100" />
              </div>
            }
            {userDocumentValues["FatherGaurdianPhoto"]?.name !== undefined &&
              <div className="flex flex-col gap-2 md:w-52">
                <p className="">Father&apos;s/Gaurdian&apos;s Photo :</p>
                <img src={URL.createObjectURL(userDocumentValues["FatherGaurdianPhoto"])} alt="img" className="h-40 object-contain border-2 border-gray-300 bg-gray-100" />
              </div>
            }
            {userDocumentValues["MotherPhoto"]?.name !== undefined &&
              <div className="flex flex-col gap-2 md:w-52">
                <p className="">Mother&apos;s Photo :</p>
                <img src={URL.createObjectURL(userDocumentValues["MotherPhoto"])} alt="img" className="h-40 object-contain border-2 border-gray-300 bg-gray-100" />
              </div>
            }
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:justify-between md:w-[80%]">
            {userDocumentValues["StudentSignature"]?.name !== undefined &&
              <div className="flex flex-col gap-2 md:w-60">
                <p className="">Student&apos;s Signature :</p> <img src={URL.createObjectURL(userDocumentValues["StudentSignature"])} alt="img" className="h-40 object-contain border-2 border-gray-300 bg-gray-100 md:w-52" />
              </div>
            }
            {userDocumentValues["ParentSignature"]?.name !== undefined &&
              <div className="flex flex-col gap-2 md:w-60">
                <p className="">Parent&apos;s/Gaurdian&apos;s Signature :</p>
                <img src={URL.createObjectURL(userDocumentValues["ParentSignature"])} alt="img" className="h-40 object-contain border-2 border-gray-300 bg-gray-100 md:w-52" />
              </div>
            }
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-6">
        <button onClick={() => window.print()} className="bg-blue-900/90 font-normal text-white py-1 w-fit px-2 rounded-md hover:bg-blue-900 transition-all duration-150">Download Application</button>
        <p className="text-sm italic">Select destination as "Save as PDF" and save the PDF before submission.</p>
        <p className="text-sm"> Make sure to bring the hard copy of this application.</p>
      </div>
      <div className="flex gap-2 items-start px-2">
        <input type="checkbox" name="confirmation" className="border-2 w-fit mt-[5px]" onChange={handleCheckBox} />
        <label htmlFor="confirmation" className="font-medium px-4 text-sm md:text-base">I assure that the above all details and documents are genuine and if found falsified, I understand that my admission will stand forfeited.</label>
      </div>
      <button onClick={submitHandler} className={`bg-green-500 text-white hover:bg-green-600 border-2 border-green-500 hover:border-green-600 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer transition duration-200 ease-in-out w-fit mx-auto ${!checkBox && 'pointer-events-none opacity-50 cursor-not-allowed'}`}>Submit</button>
    </div>
  )
};
