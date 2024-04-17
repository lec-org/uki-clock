import { Button, Dialog } from '@radix-ui/themes'
import { message } from 'antd'
import './popdialog.scss'
const PopDialog = () => {
  const [messageApi, contextHolder] = message.useMessage()
  return (
    <div className="pop-dialog">
      {contextHolder}
      <div className="closed">
        <Dialog.Close>
          <div className="closed-icon"></div>
        </Dialog.Close>
      </div>
      <div className="content">
        <div className="pop-avatar">
          <img src="https://picsum.photos/80" alt="" />
          <input type="file" name="" id="" />
        </div>
        <div className="ipt">
          <span>昵称 :</span>
          <input type="text" />
        </div>
        <div className="ipt">
          <span>个签 :</span>
          <input type="text" />
        </div>
      </div>

      <div className="footer">
        <Dialog.Close>
          <Button className="confirm" variant="soft">
            保存
          </Button>
        </Dialog.Close>

        <Dialog.Close>
          <Button className="cancel" variant="outline">
            取消
          </Button>
        </Dialog.Close>
      </div>
    </div>
  )
}

export default PopDialog
