import { Button, Callout, Dialog } from '@radix-ui/themes'
import PopDialog from './PopDialog'
import './hoverinfo.scss'
const HoverInfo = () => {
  return (
    <div className="user-info-container">
      <div className="infos">
        <div className="infos__upper">
          <div className="upper_left">
            <img src="https://picsum.photos/80" alt="" className="user-avatar" />
          </div>
          <div className="upper_right">
            <h2 className="user-nickname">雲暇</h2>
            <div className="user-id">
              <span>ID:</span>
              <span>1997973689142528</span>
            </div>
          </div>
        </div>
        <div className="infos__bottom">
          <Callout.Root>
            <Callout.Text>
              <p className="user-bio">首先接受一切, 然后做个勇敢的人</p>
            </Callout.Text>
          </Callout.Root>
        </div>
      </div>
      <div className="infos-buttons">
        <Dialog.Root>
          <Dialog.Trigger>
            <Button variant="soft">编辑资料</Button>
          </Dialog.Trigger>
          <Dialog.Content className="edit-dialog">
            <PopDialog />
          </Dialog.Content>
        </Dialog.Root>
      </div>
    </div>
  )
}

export default HoverInfo
