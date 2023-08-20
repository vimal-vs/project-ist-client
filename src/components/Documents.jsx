export default function Documents(
  TransferCertificate,
  SSLCCertificate,
  HSCFirstYearCertificate,
  HSCSecondYearCertificate,
  MigrationCertificate,
  CommunityCertificate,
  ProvisionalAllotment,
  updateDocuments
) {

  const fileStyle = "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-900 file:text-white hover:file:bg-yellow-500";
  const mandateComponent = <span className="text-red-500 text-lg">&#42;</span>;

  const redirectPDF = () => {
    window.open("https://pdfcompressor.com", "_blank")
  };

  return (
    <div className="flex flex-col gap-2 pb-8 p-2">
      <h2 className="text-center uppercase font-semibold text-xl underline underline-offset-4 py-4 md:hidden">Documents</h2>
      <p className="w-fit font-medium">Upload the respective documents carefully and make sure that the file is of .PDF and file size is less than 1MB.</p>
      <button onClick={redirectPDF} className="w-max mt-2 underline text-blue-600 text-sm md:text-base">Link to Compress your PDFs down to 1MB</button>
      <div className="flex flex-wrap gap-8 py-10">
        <div className="flex flex-col gap-3 ">
          <label htmlFor="transfer_certificate">Transfer Certificate (HSC){mandateComponent}: </label>
          <input type="file" name="transfer_certificate" accept=".pdf" className={fileStyle} onChange={e => updateDocuments({ TransferCertificate: e.target.files[0] })} required />
        </div>

        <div className="flex flex-col gap-3 w-max">
          <label htmlFor="sslc_certificate">SSLC Certificate{mandateComponent}: </label>
          <input type="file" name="sslc_certificate" accept=".pdf" className={fileStyle} onChange={e => updateDocuments({ SSLCCertificate: e.target.files[0] })} required />
        </div>

        <div className="flex flex-col gap-3 w-max">
          <label htmlFor="hsc_first_year">HSC - 1st year:  </label>
          <input type="file" name="hsc_first_year" accept=".pdf" className={fileStyle} onChange={e => updateDocuments({ HSCFirstYearCertificate: e.target.files[0] })} />
        </div>


        <div className="flex flex-col gap-3 w-max">
          <label htmlFor="hsc_second_year">HSC - 2nd year{mandateComponent}:  </label>
          <input type="file" name="hsc_second_year" accept=".pdf" className={fileStyle} onChange={e => updateDocuments({ HSCSecondYearCertificate: e.target.files[0] })} required />
        </div>

        <div className="flex flex-col gap-3 w-max">
          <label htmlFor="migration_certificate">Migration Certificate:  </label>
          <input type="file" name="migration_certificate" accept=".pdf" className={fileStyle} onChange={e => updateDocuments({ MigrationCertificate: e.target.files[0] })} />
        </div>


        <div className="flex flex-col gap-3 w-max">
          <label htmlFor="community_certificate">Community Certificate:  </label>
          <input type="file" name="community_certificate" accept=".pdf" className={fileStyle} onChange={e => updateDocuments({ CommunityCertificate: e.target.files[0] })} />
        </div>


        <div className="flex flex-col gap-3 w-max">
          <label htmlFor="provisional_allotment_letter">Provisional Allotment Letter{mandateComponent}:</label>
          <input type="file" name="provisional_allotment_letter" accept=".pdf" className={fileStyle} onChange={e => updateDocuments({ ProvisionalAllotment: e.target.files[0] })} required />
        </div>
      </div>
    </div>

  )
}
