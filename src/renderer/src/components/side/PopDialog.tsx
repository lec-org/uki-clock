import { Button, Dialog, TextField } from '@radix-ui/themes'
import './popdialog.scss'
const PopDialog = () => {
  return (
    <div className="pop-dialog">
      <div className="pop-dialog-closed-controller">
        <Dialog.Close>
          <div className="closed-icon"></div>
        </Dialog.Close>
      </div>
      <div className="edit-content">
        <div className="pop-dialog__header">
          <div className="edit-img">
            <input type="file" multiple accept=".jpg,.jpeg,.png,.gif" />
            <img src="https://picsum.photos/80" alt="" />
          </div>
        </div>
        <div className="pop-dialog__content">
          <div className="nick-name-ipt ">
            <span>昵称:</span>
            <TextField.Root size="1" placeholder="请输入昵称" />
          </div>
          <div className="bio-ipt">
            <span>简介:</span>
            <TextField.Root size="1" placeholder="请输入简介" />
          </div>
        </div>
      </div>

      <div className="pop-dialog__footer">
        <Button>保存</Button>
        <Dialog.Close>
          <Button>取消</Button>
        </Dialog.Close>
      </div>
    </div>
  )
}

export default PopDialog
