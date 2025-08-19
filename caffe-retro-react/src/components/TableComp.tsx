import type { TableData } from "../assets/TableData"; // <- wherever you keep the data

interface TableProps {
  data?: TableData;
}

export default function TableComp({ data = [] }: TableProps) {
  return (
    <article className="text-box black">
      <table className="table">
        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr key={index}>
                <td>{row.label}</td>
                <td>{row.value}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} style={{ textAlign: "center", padding: "8px" }}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </article>
  );
}
