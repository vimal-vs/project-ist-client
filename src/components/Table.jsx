export default function Table({ keyy, value, status }) {
    const tableBorder = "border-[1px] border-blue-900 p-1";
    return (
        <tr className="even:bg-slate-200/50">
            <td className={`${tableBorder} break-words`}>{keyy}</td>
            <td className={`${tableBorder} text-center break-words`}>{value}</td>
            <td className={`${tableBorder} text-center`}>{status}</td>
        </tr>

    )
}