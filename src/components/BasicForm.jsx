import { useEffect } from "react";

export default function BasicForm({
    StudentName,
    Gender,
    Dob,
    BloodGroup,
    FacultyOf,
    Degree,
    Course,
    YearOfAdmission,
    ApplicationNumber,
    StudentMobileNumber,
    StudentMailId,
    StudentAadhar,
    MediumOfInstruction,
    StudentIs,
    updateFields
}) {

    const inputFieldStyle = "px-2 py-[1px] border-2 border-slate-300 rounded-md -webkit:appearance-none	";
    const selectStyle = "shadow-md shadow-gray-200";
    const mandateComponent = <span className="text-red-500 text-lg">&#42;</span>;

    const currentYear = new Date().getFullYear();
    var currentDate = new Date().toISOString().split('T')[0];

    useEffect(() => {
        updateFields({ FacultyOf: "Engineering & Technology", Degree: "B.Tech", YearOfAdmission: currentYear });
    }, [updateFields, currentYear]);

    return (
        <div className="flex flex-col gap-4 px-4">
            <h2 className="text-center uppercase font-semibold text-xl underline underline-offset-4 py-4 md:hidden">Basic Information</h2>
            <p><b>Note</b> : Fields marked with {mandateComponent} are mandatory</p>
            <div className="flex flex-col justify-center gap-4 py-6 mb-10">
                <div>
                    <label htmlFor="student_name">Name{mandateComponent} : </label>
                    <input name="student_name" type="text" className={inputFieldStyle} value={StudentName} onChange={e => updateFields({ StudentName: e.target.value })} autoFocus required />
                </div>
                <div>
                    <label htmlFor="gender">Gender{mandateComponent} : </label>
                    <select name="gender" className={`${inputFieldStyle} ${selectStyle}`} value={Gender || "default"} onChange={e => updateFields({ Gender: e.target.value })} required>
                        <option value="default" disabled>Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="dob">DOB{mandateComponent} : </label>
                    <input name="dob" type="date" className={`${inputFieldStyle} ${selectStyle}`} max={currentDate} value={Dob} onChange={e => updateFields({ Dob: e.target.value })} required />
                </div>
                <div>
                    <label htmlFor="blood_group">Blood Group{mandateComponent} : </label>
                    <input name="blood_group" type="text" maxLength={3} className={`${inputFieldStyle} uppercase`} value={BloodGroup} onChange={e => updateFields({ BloodGroup: e.target.value })} required />
                </div>
                <div>
                    <label htmlFor="faculty_of">Faculty of{mandateComponent} : </label>
                    <select name="faculty_of" className={`${inputFieldStyle} ${selectStyle} w-max`} defaultValue={"e&t"}>
                        <option value="e&t">Engineering And Technology</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="degree">Degree{mandateComponent} : </label>
                    <select name="degree" className={`${inputFieldStyle} ${selectStyle}`} value={Degree} onChange={e => updateFields({ Degree: e.target.value })} required>
                        <option value="btech">B.Tech</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="course">Course/Specialization{mandateComponent} : </label>
                    <select name="course" className={`${inputFieldStyle} ${selectStyle}`} value={Course || "default"} onChange={e => updateFields({ Course: e.target.value })} required>
                        <option value="default" disabled>Select</option>
                        <option value="biotech">Biotechnology</option>
                        <option value="cse">CSE</option>
                        <option value="cse_aiml">CSE-AIML</option>
                        <option value="cse_bda">CSE-BDA</option>
                        <option value="cse_cyber_security">CSE-Cyber Security</option>
                        <option value="cse_it">CSE-IT</option>
                        <option value="ece">ECE</option>
                        <option value="eee">EEE</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="year_of_admission">Year of Admission{mandateComponent} : </label>
                    <input name="year_of_admission" type="number" className={inputFieldStyle} value={currentYear} onChange={e => updateFields({ YearOfAdmission: e.target.value })} disabled />
                </div>
                <div>
                    <label htmlFor="application_register_number">Application Register No.{mandateComponent} : </label>
                    <input name="application_register_number" type="text" className={`${inputFieldStyle} uppercase`} value={ApplicationNumber} onChange={e => updateFields({ ApplicationNumber: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="student_phone_no">Student Mobile No.{mandateComponent} : </label>
                    <input name="student_phone_no" type="number" className={inputFieldStyle} value={StudentMobileNumber} onChange={e => updateFields({ StudentMobileNumber: e.target.value })} required />
                </div>
                <div>
                    <label htmlFor="student_email">Student Email Id{mandateComponent} : </label>
                    <input name="student_email" type="text" className={inputFieldStyle} value={StudentMailId} onChange={e => updateFields({ StudentMailId: e.target.value })} required />
                </div>
                <div>
                    <label htmlFor="student_aadhar_no">Student Aadhar No.{mandateComponent} : </label>
                    <input name="student_aadhar_no" type="number" className={inputFieldStyle} value={StudentAadhar} onChange={e => updateFields({ StudentAadhar: e.target.value })} required />
                </div>
                <div>
                    <label htmlFor="medium_of_instruction">Medium of Instruction in HSC{mandateComponent} : </label>
                    <input name="medium_of_instruction" type="text" className={inputFieldStyle} value={MediumOfInstruction} onChange={e => updateFields({ MediumOfInstruction: e.target.value })} required />
                </div>
                <div className="flex gap-2 md:gap-4">
                    <p>Student is{mandateComponent} : </p>
                    <select name="student_is" className={`${inputFieldStyle} ${selectStyle}`} value={StudentIs || "default"} onChange={e => updateFields({ StudentIs: e.target.value })} required>
                        <option value="default" disabled>Select</option>
                        <option value="day_scholar">Day Scholar</option>
                        <option value="hosteller">Hosteller</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
