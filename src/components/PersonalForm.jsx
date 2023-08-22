import { useState } from "react";

export default function PersonalForm({
  Nationality,
  Religion,
  Community,
  IndentificationMark1,
  IndentificationMark2,
  AllergicTo,
  FatherName,
  FatherOccupation,
  FatherOfficeAddress,
  FatherMobileNumber,
  FatherMailId,
  MotherName,
  MotherOccupation,
  MotherOfficeAddress,
  MotherMobileNumber,
  MotherMailId,
  SiblingName,
  SiblingStatus,
  SiblingInstitutionName,
  AddressCommunication,
  CommunicationPincode,
  AddressPermanent,
  PermanentPincode,
  updateFields,
  StudentPhoto,
  FatherGaurdianPhoto,
  MotherPhoto,
  StudentSignature,
  ParentSignature,
  updateDocuments
}) {

  const fileStyle = "block w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-900 file:text-white hover:file:bg-yellow-500 w-[104px]";
  const inputFieldStyle = "px-2 py-[1px] border-2 border-slate-200 rounded-md";
  const mandateComponent = <span className="text-red-500 text-lg">&#42;</span>;
  const fileNameStyle = "font-semibold text-blue-900 text-sm italic";

  const redirectJPG = () => {
    window.open("https://compressjpeg.com", "_blank")
  };

  const [showStudentPhoto, setShowStudentPhoto] = useState();
  const [showFatherGaurdianPhoto, setShowFatherGaurdianPhoto] = useState("");
  const [showMotherPhoto, setShowMotherPhoto] = useState("");
  const [showStudentSignature, setShowStudentSignature] = useState("");
  const [showParentSignature, setShowParentSignature] = useState("");

  const handleSameAddress = (event) => {
    if (event.target.checked === true) {
      updateFields({ AddressPermanent: AddressCommunication });
      updateFields({ PermanentPincode: CommunicationPincode });
    }
    else {
      updateFields({ AddressPermanent: "" });
      updateFields({ PermanentPincode: "" });
    }
  };

  return (
    <div className="flex flex-col px-4 gap-4">
      <h2 className="text-center uppercase font-semibold text-xl underline underline-offset-4 py-4 decoration-yellow-500">Personal Details</h2>
      <p><b>Note</b> : Fields marked with {mandateComponent} are mandatory</p>
      <div className="flex flex-col gap-6 py-6 mb-10">
        <div>
          <label htmlFor="nationality">Nationality{mandateComponent} : </label>
          <select name="nationality" className={inputFieldStyle} value={Nationality || ""} pattern="[a-zA-Z ]*$" onChange={e => updateFields({ Nationality: e.target.value })} autoFocus required>
            <option value="" disabled>Select</option>
            <option value="india">India</option>
          </select>
        </div>
        <div>
          <label htmlFor="religion">Religion{mandateComponent} : </label>
          <input name="religion" type="text" className={inputFieldStyle} value={Religion} pattern="[a-zA-Z ]*$" onChange={e => updateFields({ Religion: e.target.value })} required />
        </div>
        <div>
          <label htmlFor="community">Communtiy{mandateComponent} : </label>
          <select name="community" className={inputFieldStyle} value={Community || ""} onChange={e => updateFields({ Community: e.target.value })} required>
            <option value="" disabled>Select</option>
            <option value="oc">OC</option>
            <option value="bc">BC</option>
            <option value="bcm">BCM</option>
            <option value="mbc">MBC/DNC</option>
            <option value="sc">SC</option>
            <option value="st">ST</option>
            <option value="sca">SCA</option>
          </select>
        </div>
        <div>
          <label htmlFor="identification_mark_one">Identification Mark 1{mandateComponent} : </label>
          <input name="identification_mark_one" type="text" className={inputFieldStyle} value={IndentificationMark1} onChange={e => updateFields({ IndentificationMark1: e.target.value })} required />
        </div>
        <div>
          <label htmlFor="identification_mark_two">Identification Mark 2 : </label>
          <input name="identification_mark_two" type="text" className={inputFieldStyle} value={IndentificationMark2} onChange={e => updateFields({ IndentificationMark2: e.target.value })} />
        </div>
        <div>
          <label htmlFor="allergic_to">Allergic to (food/medication/others){mandateComponent} : </label>
          <input name="allergic_to" type="text" className={inputFieldStyle} value={AllergicTo} onChange={e => updateFields({ AllergicTo: e.target.value })} required />
        </div>
        <div className="flex flex-col gap-4 py-6 border-y-2">
          <p className="font-semibold">Father&apos;s Details :</p>
          <div>
            <label htmlFor="father_name">Father&apos;s Name{mandateComponent} : </label>
            <input name="father_name" type="text" className={inputFieldStyle} value={FatherName} pattern="[a-zA-Z ]*$" onChange={e => updateFields({ FatherName: e.target.value })} required />
          </div>
          <div>
            <label htmlFor="father_occupation">Father&apos;s Occupation{mandateComponent} : </label>
            <input name="father_occupation" type="text" className={inputFieldStyle} value={FatherOccupation} onChange={e => updateFields({ FatherOccupation: e.target.value })} required />
          </div>
          <div>
            <label htmlFor="father_office_address">Father&apos;s Office Address{mandateComponent} : </label>
            <input name="father_office_address" type="text" className={inputFieldStyle} value={FatherOfficeAddress} onChange={e => updateFields({ FatherOfficeAddress: e.target.value })} required />
          </div>
          <div>
            <label htmlFor="father_phone_no">Father&apos;s Mobile Number{mandateComponent} : </label>
            <input name="father_phone_no" type="tel" className={inputFieldStyle} value={FatherMobileNumber} pattern="[0-9]{10,}" onChange={e => updateFields({ FatherMobileNumber: e.target.value })} required />
          </div>
          <div>
            <label htmlFor="father_mail_id">Father&apos;s Mail Id{mandateComponent} : </label>
            <input name="father_mail_id" type="email" className={inputFieldStyle} value={FatherMailId} onChange={e => updateFields({ FatherMailId: e.target.value })} required />
          </div>
        </div>
        <div className="flex flex-col gap-4 pb-6 border-b-2">
          <p className="font-semibold">Mother&apos;s Details :</p>
          <div>
            <label htmlFor="mother_name">Mother&apos;s Name{mandateComponent} : </label>
            <input name="mother_name" type="text" className={inputFieldStyle} value={MotherName} pattern="[a-zA-Z ]*$" onChange={e => updateFields({ MotherName: e.target.value })} required />
          </div>
          <div>
            <label htmlFor="mother_occupation">Mother&apos;s Occupation{mandateComponent} : </label>
            <input name="mother_occupation" type="text" className={inputFieldStyle} value={MotherOccupation} onChange={e => updateFields({ MotherOccupation: e.target.value })} required />
          </div>
          <div>
            <label htmlFor="mother_office_address">Mother&apos;s Office Address{mandateComponent} : </label>
            <input name="mother_office_address" type="text" className={inputFieldStyle} value={MotherOfficeAddress} onChange={e => updateFields({ MotherOfficeAddress: e.target.value })} required />
          </div>
          <div>
            <label htmlFor="mother_phone_no">Mother&apos;s Mobile Number{mandateComponent} : </label>
            <input name="mother_phone_no" type="tel" className={inputFieldStyle} value={MotherMobileNumber} pattern="[0-9]{10,}" onChange={e => updateFields({ MotherMobileNumber: e.target.value })} required />
          </div>
          <div>
            <label htmlFor="mother_mail_id">Mother&apos;s Mail Id : </label>
            <input name="mother_mail_id" type="email" className={inputFieldStyle} value={MotherMailId} onChange={e => updateFields({ MotherMailId: e.target.value })} />
          </div>
        </div>
        <div className="flex flex-col gap-4 pb-6 border-b-2">
          <p className="font-semibold">Sibling&apos;s Details :</p>
          <div>
            <label htmlFor="sibling_name">Sibling&apos;s Name : </label>
            <input name="sibling_name" type="text" className={inputFieldStyle} value={SiblingName} pattern="[a-zA-Z ]*$" onChange={e => updateFields({ SiblingName: e.target.value })} />
          </div>
          <div>
            <label htmlFor="sibling_status">Current Status : </label>
            <input name="sibling_status" type="text" className={inputFieldStyle} value={SiblingStatus} onChange={e => updateFields({ SiblingStatus: e.target.value })} />
          </div>
          <div>
            <label htmlFor="sibling_education">Institution Name : </label>
            <input name="sibling_education" type="text" className={inputFieldStyle} value={SiblingInstitutionName} onChange={e => updateFields({ SiblingInstitutionName: e.target.value })} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="address_communication" className="w-fit">Address for Communication{mandateComponent} : </label>
          <textarea name="address_communication" className="border-2 md:w-2/3 lg:w-1/3" value={AddressCommunication} onChange={e => updateFields({ AddressCommunication: e.target.value })}></textarea>
        </div>
        <div>
          <label htmlFor="pin_code_communication">Pin Code{mandateComponent} : </label>
          <input name="pin_code_communication" type="number" className={inputFieldStyle} value={CommunicationPincode} onChange={e => updateFields({ CommunicationPincode: e.target.value })} required />
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="same_address" onChange={handleSameAddress} />
          <label htmlFor="same_address">Same as Address for Communication</label>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="address_permanent" className="w-fit">Permanent Address{mandateComponent} : </label>
          <textarea name="address_permanent" className="border-2 md:w-2/3 lg:w-1/3" value={AddressPermanent} onChange={e => updateFields({ AddressPermanent: e.target.value })}></textarea>
        </div>
        <div>
          <label htmlFor="pin_code_permanent">Pin Code{mandateComponent} : </label>
          <input name="pin_code_permanent" type="number" className={inputFieldStyle} value={PermanentPincode} onChange={e => updateFields({ PermanentPincode: e.target.value })} required />
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex flex-col gap-2">
            <p className="w-fit font-medium">Upload the respective photos and make sure that the file is of .JPG and file size is less than 2MB.</p>
            <button onClick={redirectJPG} className="w-fit text-start mt-2 underline text-blue-900 text-sm md:text-base">Link to compress your JPGs</button>
          </div>
          <div className="flex flex-wrap gap-10 pt-6">
            <div className="flex flex-col gap-5 w-56">
              <label htmlFor="student_photo">Student&apos;s Photo{mandateComponent} : </label>
              <div className="flex flex-col gap-2">
                <input type="file" name="student_photo" accept=".jpg" className={fileStyle}
                  onChange={e => { updateDocuments(e.target.files ? { StudentPhoto: e.target.files[0] } : ""); (e.target.files[0]) ? setShowStudentPhoto(URL.createObjectURL(e.target.files[0])) : setShowStudentPhoto("") }} required={StudentPhoto?.length === 0 ? true : false} />
                <img src={showStudentPhoto} alt="" />
                <p className={fileNameStyle}>{StudentPhoto?.name}</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-56">
              <label htmlFor="father_photo">Father&apos;s/Gaurdian&apos;s Photo{mandateComponent} : </label>
              <div className="flex flex-col gap-2">
                <input type="file" name="father_photo" accept=".jpg" className={fileStyle}
                  onChange={e => { updateDocuments({ FatherGaurdianPhoto: e.target.files[0] }); (e.target.files[0]) ? setShowFatherGaurdianPhoto(URL.createObjectURL(e.target.files[0])) : setShowFatherGaurdianPhoto("") }} required={FatherGaurdianPhoto?.length === 0 ? true : false} />
                <img src={showFatherGaurdianPhoto} alt="" />
                <p className={fileNameStyle}>{FatherGaurdianPhoto?.name}</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-56">
              <label htmlFor="mother_photo">Mother&apos;s Photo{mandateComponent} : </label>
              <div className="flex flex-col gap-2">
                <input type="file" name="mother_photo" accept=".jpg" className={fileStyle}
                  onChange={e => { updateDocuments({ MotherPhoto: e.target.files[0] }); (e.target.files[0]) ? setShowMotherPhoto(URL.createObjectURL(e.target.files[0])) : setShowMotherPhoto("") }} required={MotherPhoto?.length === 0 ? true : false} />
                <img src={showMotherPhoto} alt="" />
                <p className={fileNameStyle}>{MotherPhoto?.name}</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-56">
              <label htmlFor="student_signature">Student&apos;s Signature{mandateComponent} : </label>
              <div className="flex flex-col gap-2">
                <input type="file" name="student_signature" accept=".jpg" className={fileStyle}
                  onChange={e => { updateDocuments({ StudentSignature: e.target.files[0] }); (e.target.files[0]) ? setShowStudentSignature(URL.createObjectURL(e.target.files[0])) : setShowStudentSignature("") }} required={StudentSignature?.length === 0 ? true : false} />
                <img src={showStudentSignature} alt="" />
                <p className={fileNameStyle}>{StudentSignature?.name}</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-56">
              <label htmlFor="parent_signature">Parent&apos;s/Gaurdian&apos;s Signature{mandateComponent} : </label>
              <div className="flex flex-col gap-2">
                <input type="file" name="parent_signature" accept=".jpg" className={fileStyle}
                  onChange={e => { updateDocuments({ ParentSignature: e.target.files[0] }); (e.target.files[0]) ? setShowParentSignature(URL.createObjectURL(e.target.files[0])) : setShowParentSignature("") }} required={ParentSignature?.length === 0 ? true : false} />
                <img src={showParentSignature} alt="" />
                <p className={fileNameStyle}>{ParentSignature?.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
