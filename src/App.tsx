import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function App() {
  const handleDownload = () => {
    const data = [
      { Name: "John", Hours: 8 },
      { Name: "Alice", Hours: 7 },
      { Name: "Bob", Hours: 9 },
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Attendance");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(blob, "attendanceLogs.xlsx");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>App A - Download Attendance Logs</h1>
      <button
        id="downloadExcelButton"
        onClick={handleDownload}
        style={{
          background: "#1976d2",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Download Excel
      </button>
    </div>
  );
}

export default App;
