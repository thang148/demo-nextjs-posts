import React from "react"

function initDataTable(row, column) {
  const list = []
  for (let i = 0; i < row; i++) {
    let rows = []
    for (let j = 0; j < column; j++) {
      rows.push("")
    }
    list.push(rows)
  }
  return list
}

function renderClass(value) {
  if (value === "Default") return "px-2 py-1"
  return "px-4 py-2"
}

const dfData = {
  setting: { row: 4, column: 4, size: "Default" },
  dataTable: initDataTable(4, 4)
}
const customContentPlugin = {
  // eslint-disable-next-line react/display-name
  Renderer: ({ data }) => {
    const { dataRows, style } = data
    const __dataRows = dataRows ? JSON.parse(dataRows) : dfData
    const { setting, dataTable } = __dataRows
    const __class = renderClass(setting?.size)
    return (
      <div
        style={{
          backgroundColor: style?.backgroundColor,
          color: style?.textColor,
          padding: style?.padding
        }}
      >
        {dataTable.length > 0 && (
          <table className="w-full _table">
            <thead>
              <tr>
                {dataTable[0].map((_item, key) => {
                  return (
                    <th
                      style={{
                        border: `1px solid ${style?.boderColor || "#ccc"}`,
                        backgroundColor: style?.backgroundHeader
                      }}
                      className={`${__class} font-semibold text-left`}
                      key={key}
                    >
                      {_item}
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {dataTable.slice(1, dataTable.length).map((item, k) => {
                return (
                  <tr key={k}>
                    {item.map((_item, key) => {
                      return (
                        <td
                          style={{ border: `1px solid ${style?.boderColor || "#ccc"}` }}
                          className={`${__class}`}
                          key={key}
                        >
                          {_item}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>
    )
  },
  id: "custom-table-plugin",
  title: "Custom table plugin",
  description: "Table custom",
  version: 1
}
export default customContentPlugin
