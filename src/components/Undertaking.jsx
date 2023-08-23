export default function Undertaking({
  AffidavitByStudent,
  AffidavitByParent,
  updateDocuments
}) {

  const fileStyle = "block w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-900 file:text-white hover:file:bg-yellow-500 w-[105px]";
  const mandateComponent = <span className="text-red-500 text-lg">&#42;</span>;
  const fileNameStyle = "font-semibold text-blue-900 text-sm italic";


  return (
    <div className="flex flex-col gap-4 pb-10">
      <h2 className="text-center uppercase font-semibold text-xl underline underline-offset-4 py-4 decoration-yellow-500">Undertaking</h2>
      <div className="flex flex-col gap-2">
        <p className="w-fit font-medium">Upload scanned copy of the documents respectively.</p>
      </div>
      <div className="flex flex-wrap gap-12 py-6">
        <div className="flex flex-col gap-6 w-56">
          <div className="flex flex-col gap-1">
            <label htmlFor="by_student" className="font-semibold">Affidavit by Student{mandateComponent}: </label>
          </div>
          <div className="flex flex-col gap-3">
            <input type="file" accept=".pdf" name="by_student" className={fileStyle} onChange={e => updateDocuments({ AffidavitByStudent: e.target.files[0] })} required={AffidavitByStudent?.length === 0 ? true : false} />
            <p className={fileNameStyle}>{AffidavitByStudent?.name}</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-56">
          <div className="flex flex-col gap-1">
            <label htmlFor="by_parent" className="font-semibold">Affidavit by Parent{mandateComponent}: </label>
          </div>
          <div className="flex flex-col gap-3">
            <input type="file" accept=".pdf" name="by_parent" className={fileStyle} onChange={e => updateDocuments({ AffidavitByParent: e.target.files[0] })} required={AffidavitByParent?.length === 0 ? true : false} />
            <p className={fileNameStyle}>{AffidavitByParent?.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
};