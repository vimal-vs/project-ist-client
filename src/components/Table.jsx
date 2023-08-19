export default function Table( {keyy, value, status} ){
  const tableBorder = "border-[3px] border-gray-300 p-1";
    return (
        <tr className="odd:bg-gray-100">
            <td className={tableBorder}>{keyy}</td>
            <td className={tableBorder}>{value}</td>
            <td className={tableBorder}>{status}</td>
        </tr>
        
    )
}