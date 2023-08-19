export default function Instructions() {

  const tableBorder = "border-[3px] border-gray-200 p-1";
  const mandateComponent = <span className="text-red-500 text-lg">&#42;</span>;

  const redirectJPG = () => {
    window.open("https://compressjpeg.com", "_blank")
  };

  const redirectPDF = () => {
    window.open("https://pdfcompressor.com", "_blank")
  };

  return (
    <div className="flex flex-col gap-3 px-2 my-6 md:my-12">
      <h2 className="text-center uppercase font-semibold text-xl underline underline-offset-4 md:hidden">Instructions</h2>
      <div className="flex flex-col gap-3 mt-4">
        <h2 className="font-semibold">Please read the following, before filling out the form :</h2>
        <ol className="list-decimal ml-4">
          <li>Fields marked with asterisk {mandateComponent} are mandatory.</li>
          <li>Make sure that the details are relevant and genuine.</li>
          <li>Please keep the required documents ready before filling out the form.</li>
        </ol>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <h2 className="font-semibold">Constraints for Documents:</h2>
        <p className="font-medium text-sm">For Photos:</p>
        <table className={`text-center text-sm md:text-base ${tableBorder}`}>
          <tbody>
            <tr>
              <th className={`${tableBorder} font-semibold`}>TYPE</th>
              <th className={`${tableBorder} font-semibold`}>SIZE</th>
              <th className={`${tableBorder} font-semibold`}>DIMENSIONS</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={tableBorder}>Photograph</td>
              <td className={tableBorder}>&lt;1MB</td>
              <td className={tableBorder}>3.5 x 4.5 cm</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={tableBorder}>Signature</td>
              <td className={tableBorder}> &lt;1MB</td>
              <td className={tableBorder}>3.5 x 1.5 cm</td>
            </tr>
          </tbody>
        </table>
        <p className="text-right text-sm">&#42; Please make sure that the photo format is in <span className="font-semibold">.JPG</span></p>
        <button onClick={redirectJPG} className="w-max mt-2 underline text-blue-600 text-sm md:text-base">Link to Compress your JPGs down to 1MB</button>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-sm">For Documents:</p>
        <table className={`text-center text-sm md:text-base ${tableBorder}`}>
          <tbody>
            <tr>
              <th className={`${tableBorder} font-semibold`}>TYPE</th>
              <th className={`${tableBorder} font-semibold px-6 md:px-20`}>SIZE</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={tableBorder}>Transfer Certificate &#40;HSC&#41;</td>
              <td className={tableBorder}>&lt;1MB</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={tableBorder}>SSLC Certificate</td>
              <td className={tableBorder}> &lt;1MB</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={tableBorder}>HSC - 1st year &#40;if applicable&#41;</td>
              <td className={tableBorder}> &lt;1MB</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={tableBorder}>HSC - 2nd year</td>
              <td className={tableBorder}> &lt;1MB</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={tableBorder}>Migration Certificate &#40;if applicable&#41;</td>
              <td className={tableBorder}> &lt;1MB</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={tableBorder}>Community Certificate &#40;if applicable&#41;</td>
              <td className={tableBorder}> &lt;1MB</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={tableBorder}>Provisional Allotment Letter</td>
              <td className={tableBorder}> &lt;1MB</td>
            </tr>
          </tbody>
        </table>
        <p className="text-right text-sm">&#42; Please make sure that the document format is in <span className="font-semibold">.PDF</span></p>
        <button onClick={redirectPDF} className="w-max mt-2 underline text-blue-600 text-sm md:text-base">Link to Compress your PDFs down to 1MB</button>
        <p className="mt-4 font-semibold italic">All of the uploaded documents will be verified physically. Please make sure to bring the original documents.</p>
      </div>
    </div>
  )
}