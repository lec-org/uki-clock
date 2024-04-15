import ClockBtn from '@renderer/components/home/ClockBtn'
import ClockChart from '@renderer/components/home/ClockChart'
import ClockRanking from '@renderer/components/home/rightside/ClockRanking'
import './home.scss'
const Home = () => {
  return (
    <>
      <div className="home-page__container">
        <div className="container__left">
          <div className="left__upper">
            <div className="clock-btn__container">
              <ClockBtn />
            </div>
            <div className="clock-status">
              <ClockChart />
            </div>
          </div>
          <div className="left__lower"></div>
        </div>
        <div className="container__right">
          <div className="clock-raking-list">
            <ClockRanking />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
