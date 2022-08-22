import cn from "classnames"
import { HeaderBoxLeft } from "components/ui"

const list = []
for (let i = 0; i < 10; i++) {
  list.push(i)
}

export default function BoxLeftRanking() {
  return (
    <article className="space-box">
      <HeaderBoxLeft title="Bảng xếp hạng" href="/detail" background="bg-gray-600" />
      <div className="bg-gray-300 text-title text-lg p-2 pl-4">V - League, 2020 - 2021</div>
      <div className="overflow-y-auto max-h-screen border-primary border bg-white">
        <table className="table-auto w-full">
          <thead>
            <tr className="border-b border-gray-400">
              <th className="py-2">TT</th>
              <th>Đội</th>
              <th>Trận</th>
              <th>HS</th>
              <th>Điểm</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, k) => {
              return (
                <tr key={k} className="border-b border-gray-400">
                  <td className={cn("text-xl px-2 text-center py-2", __class[k], k < 9 && "border-b-4")}>{k + 1}</td>
                  <td className="font-semibold">Than Quảng Ninh</td>
                  <td className="text-center">12</td>
                  <td className="text-center">+14</td>
                  <td className="text-center font-semibold">29</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="border-b border-gray-400 p-2 text-center font-bold text-lg cursor-pointer hover:text-secondary">
          Xem thêm
        </div>
      </div>
    </article>
  )
}

const __class = [
  "border-green-900",
  "border-green-800",
  "border-green-700",
  "border-green-600",
  "border-green-500",
  "border-green-400",
  "border-green-300",
  "border-green-200",
  "border-green-100"
]
