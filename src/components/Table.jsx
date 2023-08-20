export default function Table({ keyy, value, status }) {
    const tableBorder = "border-[3px] border-gray-300 p-1";
    return (
        <tr className="odd:bg-gray-100">
            <td className={`${tableBorder} break-words`}>{keyy}</td>
            <td className={`${tableBorder} text-center break-words`}>{value}</td>
            <td className={`${tableBorder} text-center`}>{status}</td>
        </tr>

    )
}