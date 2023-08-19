import { useRef, useState } from "react";

export default function Documents() {

  const fileStyle = "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-900 file:text-white hover:file:bg-yellow-500";
  const mandateComponent = <span className="text-red-500 text-lg">&#42;</span>;
  
  const redirectPDF = () => {
    window.open("https://pdfcompressor.com", "_blank")
  };

  const [selectedFile, setSelectedFile] = useState();
  const [isSuccess, setIsSuccess] = useState(true);
  const inputFile = useRef(null);

  const handleReset = () => {
    if (inputFile.current) {
        inputFile.current.value = "";
        inputFile.current.type = "text";
        inputFile.current.type = "file";
    }
  };
  const handleFileChange = () => {
    if(inputFile.current){
      setSelectedFile(inputFile.current);
      validateSelectedFile();
      if(isSuccess === false){
        handleReset();
      }
    }
  };

  const validateSelectedFile = () => {

    if (!selectedFile) {
      window.alert("Please choose a file");
      setIsSuccess(false);
      return;
    }
    
    if(selectedFile.size > 1024){
      window.alert("File size is greater than maximum limit");
      setIsSuccess(false);
      return;
    }
  };

  return (
    <div className="flex flex-col gap-2 pb-8 p-2">
      <h2 className="text-center uppercase font-semibold text-xl underline underline-offset-4 py-4 md:hidden">Documents</h2>
      <p className="w-fit font-medium">Upload the respective documents carefully and make sure that the file is of .PDF and file size is less than 1MB.</p>
      <button onClick={redirectPDF} className="w-max mt-2 underline text-blue-600 text-sm md:text-base">Link to Compress your PDFs down to 1MB</button>
      <div className="flex flex-wrap gap-8 py-10">
        <div className="flex flex-col gap-3 ">
        <label htmlFor="transfer_certificate">Transfer Certificate (HSC){mandateComponent}: </label>  
        <input type="file" name="transfer_certificate" accept=".pdf" className={fileStyle} required/>
        </div>

        <div className="flex flex-col gap-3 w-max">
        <label htmlFor="sslc_certificate">SSLC Certificate{mandateComponent}: </label>  
        <input type="file" name="sslc_certificate" accept=".pdf" className={fileStyle} required/>
        </div>

        <div className="flex flex-col gap-3 w-max">
        <label htmlFor="hsc_first_year">HSC - 1st year:  </label> 
        <input type="file" name="hsc_first_year" accept=".pdf" className={fileStyle}/>
        </div>


        <div className="flex flex-col gap-3 w-max">
        <label htmlFor="hsc_second_year">HSC - 2nd year{mandateComponent}:  </label> 
        <input type="file" name="hsc_second_year" accept=".pdf" className={fileStyle} required/>
        </div>

        <div className="flex flex-col gap-3 w-max">
        <label htmlFor="migration_certificate">Migration Certificate:  </label> 
        <input type="file" name="migration_certificate" accept=".pdf" className={fileStyle}/>
        </div>


        <div className="flex flex-col gap-3 w-max">
        <label htmlFor="community_certificate">Community Certificate:  </label> 
        <input type="file" name="community_certificate" accept=".pdf" className={fileStyle}/>
        </div>


        <div className="flex flex-col gap-3 w-max">
        <label htmlFor="provisional_allotment_letter">Provisional Allotment Letter{mandateComponent}:</label> 
        <input type="file" name="provisional_allotment_letter" accept=".pdf" className={fileStyle} required/>
        </div>
      </div>
    </div>
    
  )
}
