import { HeaderBoxLeft } from "components/ui"

const list = []
for (let i = 0; i < 10; i++) {
  list.push(i)
}

export default function BoxLeftCalendar() {
  return (
    <article className="space-box">
      <HeaderBoxLeft title="Lịch thi đấu" href="/detail" background="bg-gray-600" />
      <div className="bg-gray-300 text-title text-lg p-2 pl-4">V - League, Thứ 4 - 01/05</div>
      <div className="overflow-y-auto max-h-screen border-primary border bg-white">
        {list.map((item, k) => {
          return (
            <div key={k} className="flex justify-center items-center space-x-2 border-primary p-3 border-b">
              <div>Hà Nội</div>
              <img className="h-8" src="/1200px-Hà_Nội_FC_2020 1.png" alt="x" />
              <div className="py-0.5 px-2 bg-gray-300 rounded-sm font-semibold">14:00</div>
              <img className="h-8" src="/1200px-Hoang_Anh_Gia_Lai_FC_logo 1.png" alt="x" />
              <div>HAGL</div>
            </div>
          )
        })}
        <div className="p-2 text-center font-bold text-lg cursor-pointer hover:text-secondary">Xem thêm</div>
      </div>
    </article>
  )
}
