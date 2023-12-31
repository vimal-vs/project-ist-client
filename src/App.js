import { useState } from "react";

import Header from "./components/Header";
import Progress from "./components/Progress";
import Instructions from "./components/Instructions";
import BasicForm from "./components/BasicForm";
import PersonalForm from "./components/PersonalForm";
import Undertaking from "./components/Undertaking";
import Documents from "./components/Documents";
import Preview from "./components/Preview";
import useMultiStepForm from "./hooks/useMultiStepForm";

const currentYear = new Date().getFullYear();

const FORM_DATA = {
  StudentName: "",
  Gender: "",
  Dob: "",
  BloodGroup: "",
  FacultyOf: "Engineering & Technology",
  Degree: "B.Tech",
  Course: "",
  YearOfAdmission: currentYear,
  ApplicationNumber: "",
  StudentMobileNumber: "",
  StudentMailId: "",
  StudentAadhar: "",
  MediumOfInstruction: "",
  StudentIs: "",
  Nationality: "",
  Religion: "",
  Community: "",
  MotherTongue: "",
  IndentificationMark1: "",
  IndentificationMark2: "",
  AllergicTo: "",
  FatherName: "",
  FatherOccupation: "",
  FatherOfficeAddress: "",
  FatherMobileNumber: "",
  FatherMailId: "",
  MotherName: "",
  MotherOccupation: "",
  MotherOfficeAddress: "",
  MotherMobileNumber: "",
  MotherMailId: "",
  SiblingName: "",
  SiblingStatus: "",
  SiblingInstitutionName: "",
  AddressCommunication: "",
  CommunicationPincode: "",
  AddressPermanent: "",
  PermanentPincode: "",
}

const FORM_DOCUMENTS = {
  StudentPhoto: [],
  FatherGuardianPhoto: [],
  MotherPhoto: [],
  StudentSignature: [],
  ParentSignature: [],
  TransferCertificate: [],
  SSLCCertificate: [],
  HSCFirstYearCertificate: [],
  HSCSecondYearCertificate: [],
  MigrationCertificate: [],
  CommunityCertificate: [],
  ProvisionalAllotmentLetter: [],
  AffidavitByStudent: [],
  AffidavitByParent: [],
}

export default function Home() {

  const [data, setData] = useState(FORM_DATA);
  const [documents, setDocuments] = useState(FORM_DOCUMENTS);

  const updateFields = (fields) => {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }

  const updateDocuments = (event) => {
    setDocuments(prev => {
      return { ...prev, ...event }
    })
  }


  const progress = [
    "Instructions",
    "Basic Information",
    "Personal Details",
    "Documents",
    "Undertaking",
    "Preview"
  ];

  const formComponents = [
    <Instructions />,
    <BasicForm {...data} updateFields={updateFields} />,
    <PersonalForm {...data} updateFields={updateFields} {...documents} updateDocuments={updateDocuments} />,
    <Documents {...documents} updateDocuments={updateDocuments} />,
    <Undertaking {...documents} updateDocuments={updateDocuments} />,
    <Preview data={data} documents={documents} />
  ];

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultiStepForm([...formComponents]);

  const handleSubmit = (e) => {
    e.preventDefault();
    next();
  };

  const backBtnStyle = "bg-white text-slate-700 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-700 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out";
  const nextBtnStyle = "text-green-500 hover:bg-green-500 hover:text-white border-2 border-green-500 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer transition duration-200 ease-in-out";

  return (
    <>
      <Header />
      <div className="shadow-xl border-t-4 border-gray-100 rounded-2xl pb-2 my-6 mx-auto w-[90%] md:w-2/3 bg-white ">
        <div className="container horizontal mt-5">
          <Progress steps={progress} curStep={currentStepIndex} />
        </div>
        <form className="mt-2 px-6 md:mt-20 md:px-10" onSubmit={handleSubmit}>
          {step}
          <div className="flex justify-around pb-6">
            {!isFirstStep && <button type="button" onClick={back} className={backBtnStyle}>Back</button>}
            {!isLastStep && <button type="submit" className={nextBtnStyle}>{isFirstStep ? "Proceed to form" : "Next"}</button>}
          </div>
        </form>
      </div>
    </>
  )
}
