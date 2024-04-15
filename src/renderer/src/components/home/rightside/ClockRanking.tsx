import { SegmentedControl, Table, Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import './clockranking.scss'
import data1 from './demo'
const ClockRanking = () => {
  const data = data1
  return (
    <>
      <div className="rank-list__container">
        <Theme>
          <div className="rank-list_tabs__container">
            <SegmentedControl.Root className="rank-list_tabs" defaultValue="2022">
              <SegmentedControl.Item value="2022">2022 级</SegmentedControl.Item>
              <SegmentedControl.Item value="2023">2023 级</SegmentedControl.Item>
            </SegmentedControl.Root>
          </div>

          <div className="rank-list">
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>头像</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>姓名</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>打卡时长</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {data.map((item, index) => (
                  <Table.Row key={index + item.nickname + item.status}>
                    <Table.RowHeaderCell>
                      <img
                        src={item.avatar}
                        alt=""
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%'
                        }}
                      />
                    </Table.RowHeaderCell>

                    <Table.RowHeaderCell>{item.nickname}</Table.RowHeaderCell>

                    <Table.RowHeaderCell>{item.currentTime}</Table.RowHeaderCell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </div>
        </Theme>
      </div>
    </>
  )
}

export default ClockRanking
