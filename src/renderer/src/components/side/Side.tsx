import { Menu } from '@arco-design/web-react'
import { HoverCard, Theme } from '@radix-ui/themes'
import { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import HoverInfo from './HoverInfo'
import { menuColors, navs } from './navs'
import './side.scss'
const Side = () => {
  const navigator = useNavigate()
  return (
    <div className="side-bar on-drag">
      <div className="side-bar__upper">
        <div className="side-bar__avatar no-drag">
          <Theme style={{ background: 'transparent' }}>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <img src="https://picsum.photos/80" alt="" className="user-avatar" />
              </HoverCard.Trigger>
              <HoverCard.Content
                style={{ padding: 0, backgroundColor: 'transparent' }}
                className="hover-card"
              >
                <HoverInfo />
              </HoverCard.Content>
            </HoverCard.Root>
          </Theme>
        </div>

        <div className="side-nav__container no-drag">
          <Menu defaultSelectedKeys={['/home0']} className={'nav-menu'}>
            {navs.map((nav, index) => {
              return (
                <Menu.Item
                  className={'nav-item'}
                  key={nav.path + index}
                  onClick={() => {
                    navigator(nav.path)
                  }}
                  style={
                    {
                      '--bg-color': `${menuColors[index]}`
                    } as CSSProperties
                  }
                >
                  <div className="item-icon">{nav.icon}</div>
                </Menu.Item>
              )
            })}
          </Menu>
        </div>
      </div>
      <div className="side-bar__lower"></div>
    </div>
  )
}

export default Side
