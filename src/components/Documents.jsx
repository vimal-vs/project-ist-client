export default function Documents({
  TransferCertificate,
  SSLCCertificate,
  HSCFirstYearCertificate,
  HSCSecondYearCertificate,
  MigrationCertificate,
  CommunityCertificate,
  ProvisionalAllotmentLetter,
  updateDocuments
}) {

  const fileStyle = "block w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-900 file:text-white hover:file:bg-yellow-500 w-[105px]";
  const mandateComponent = <span className="text-red-500 text-lg">&#42;</span>;
  const fileNameStyle = "font-semibold text-blue-900 text-sm italic";

  const redirectPDF = () => {
    window.open("https://pdfcompressor.com", "_blank")
  };

  return (
    <div className="flex flex-col gap-2 pb-8 p-2">
      <h2 className="text-center uppercase font-semibold text-xl underline underline-offset-4 py-4 decoration-yellow-500">Document Submission</h2>
      <p className="w-fit font-medium">Upload the respective documents carefully.</p>
      <p className="w-fit font-medium">The file&#40;s&#41; should be of type .PDF and file size should be less than 2MB.</p>
      <button onClick={redirectPDF} className="mt-2 w-fit underline text-blue-900 text-sm md:text-base">Link to compress your PDFs</button>
      <div className="flex flex-wrap gap-8 py-10">
        <div className="flex flex-col gap-3 w-56">
          <label htmlFor="transfer_certificate">Transfer Certificate (HSC){mandateComponent}: </label>
          <input type="file" name="transfer_certificate" accept=".pdf" className={fileStyle} onChange={e => updateDocuments({ TransferCertificate: e.target.files[0] })} autoFocus required={TransferCertificate?.length === 0 ? true : false} />
          <p className={fileNameStyle}>{TransferCertificate?.name}</p>
        </div>
        <div className="flex flex-col gap-3 w-56">
          <label htmlFor="sslc_certificate">SSLC Certificate{mandateComponent}: </label>
          <input type="file" name="sslc_certificate" accept=".pdf" className={fileStyle} onChange={e => updateDocuments({ SSLCCertificate: e.target.files[0] })} required={SSLCCertificate?.length === 0 ? true : false} />
          <p className={fileNameStyle}>{SSLCCertificate?.name}</p>
        </div>
        <div className="flex flex-col gap-3 w-56">
          <label htmlFor="hsc_first_year">HSC - 1st year:  </label>
          <input type="file" name="hsc_first_year" accept=".pdf" className={fileStyle} onChange={e => updateDocuments({ HSCFirstYearCertificate: e.target.files[0] })} />
          <p className={fileNameStyle}>{HSCFirstYearCertificate?.name}</p>
        </div>
        <div className="flex flex-col gap-3 w-56">
          <label htmlFor="hsc_second_year">HSC - 2nd year{mandateComponent}:  </label>
          <input type="file" name="hsc_second_year" accept=".pdf" className={fileStyle} onChange={e => updateDocuments({ HSCSecondYearCertificate: e.target.files[0] })} required={HSCSecondYearCertificate?.length === 0 ? true : false} />
          <p className={fileNameStyle}>{HSCSecondYearCertificate?.name}</p>
        </div>
        <div className="flex flex-col gap-3 w-56">
          <label htmlFor="migration_certificate">Migration Certificate:  </label>
          <input type="file" name="migration_certificate" accept=".pdf" className={fileStyle} onChange={e => updateDocuments({ MigrationCertificate: e.target.files[0] })} />
          <p className={fileNameStyle}>{MigrationCertificate?.name}</p>
        </div>
        <div className="flex flex-col gap-3 w-56">
          <label htmlFor="community_certificate">Community Certificate:  </label>
          <input type="file" name="community_certificate" accept=".pdf" className={fileStyle} onChange={e => updateDocuments({ CommunityCertificate: e.target.files[0] })} />
          <p className={fileNameStyle}>{CommunityCertificate?.name}</p>
        </div>
        <div className="flex flex-col gap-3 w-56">
          <label htmlFor="provisional_allotment_letter">Provisional Allotment Letter{mandateComponent}:</label>
          <input type="file" name="provisional_allotment_letter" accept=".pdf" className={fileStyle} onChange={e => updateDocuments({ ProvisionalAllotmentLetter: e.target.files[0] })} required={ProvisionalAllotmentLetter?.length === 0 ? true : false} />
          <p className={fileNameStyle}>{ProvisionalAllotmentLetter?.name}</p>
        </div>
      </div>
    </div>

  )
}
