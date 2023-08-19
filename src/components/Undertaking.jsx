export default function Undertaking() {
  const fileStyle = "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-900 file:text-white hover:file:bg-yellow-500";
  const uploadHandlerStudent = () => {

  };
  const uploadHandlerParent = () => {

  };
  const studentPDF = () => {
    window.open("/student_affidavit.pdf", "_blank")
  };
  const parentPDF = () => {
    window.open("/parent_affidavit.pdf", "_blank")
  };
  const mandateComponent = <span className="text-red-500 text-lg">&#42;</span>;
  return (
    <div className="flex flex-col gap-6 pb-8">
      <h2 className="text-center uppercase font-semibold text-xl underline underline-offset-4 py-4 md:hidden">Undertaking</h2>
      <div className="flex flex-col gap-2">
        <p className="w-fit font-medium">Download the following files, fill the documents with relevant information.</p>
        <p className="w-fit font-medium">Upload scanned copy of the documents respectively.</p>
      </div>
      <div className="flex flex-wrap gap-12 py-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="by_student" className="font-semibold">Affidavit by Student{mandateComponent}: </label>
            <button onClick={studentPDF} className="w-fit underline text-blue-600">Click here to download</button>
          </div>
          <input type="file" accept=".pdf" name="by_student" className={fileStyle} onChange={uploadHandlerStudent} />
        </div>

        <div className="flex flex-col gap-6 pb-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="by_parent" className="font-semibold">Affidavit by Parent{mandateComponent}: </label>
            <button onClick={parentPDF} className="w-fit underline text-blue-600">Click here to download</button>
          </div>
          <input type="file" accept=".pdf" name="by_parent" className={fileStyle} onChange={uploadHandlerParent} />
        </div>
      </div>
    </div >
  )
};