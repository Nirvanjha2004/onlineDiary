import { LuPenSquare } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoSettings } from "react-icons/io5";
import { FaUnlock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Switch from "@mui/joy/Switch";
import Input from "@mui/joy/Input";
import Checkbox from "@mui/joy/Checkbox";

function DiaryBox() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [encryptionLock, setEncryptionLock] = React.useState(false);
  const [rememberPassword, setRememberPassword] = React.useState(true);
  const [autoLockJournal, setAutoLockJournal] = React.useState(true);

  const navigate = useNavigate();

  return (
    <div className="bg-gray-500 border-l-[40px] border-gray-900 m-5 mr-[500px] ml-[400px] h-[500px] w-[500px] rounded-2xl flex items-center justify-center">
      <div className="bg-white rounded-lg p-2 flex flex-col items-center justify-center">
        <div className="font-bold border-b-2 border-gray-500 mb-2">
          Nirvan's Journal
        </div>
        <div className="flex space-x-10 items-center">
          <div className="flex bg-blue-100 pl-1 rounded-lg">
            <LuPenSquare className="size-7 mt-1" />
            <button
              onClick={() => navigate("/")}
              className="px-2 py-2 rounded"
            >
              New Entry
            </button>
          </div>
          <div>
            <TfiMenuAlt
              onClick={() => navigate("/entries")}
              className="size-7 hover:cursor-pointer"
            />
          </div>
          <div>
            <IoSettings
              onClick={() => navigate("/entries")}
              className="size-7 hover:cursor-pointer"
            />
          </div>
          <div>
            <FaUnlock
              onClick={() => {
                setOpen(true);
              }}
              className="size-7 hover:cursor-pointer"
            />
          </div>
          <React.Fragment>
            <Button className="invisible" variant="outlined" onClick={() => setOpen(true)}>
              Open modal
            </Button>
            <Modal
              aria-labelledby="modal-title"
              aria-describedby="modal-desc"
              open={open}
              onClose={() => setOpen(false)}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Sheet
                variant="outlined"
                sx={{
                  maxWidth: 500,
                  borderRadius: "md",
                  p: 3,
                  boxShadow: "lg",
                }}
              >
                <ModalClose variant="plain" sx={{ m: 1 }} />
                <Typography
                  component="h2"
                  id="modal-title"
                  level="h4"
                  textColor="inherit"
                  sx={{ fontWeight: "lg", mb: 1 }}
                >
                  Lock Journal
                </Typography>
                <Input
                  fullWidth
                  placeholder="Journal Password"
                  type="password"
                  sx={{ mb: 2 }}
                />
                <Input
                  fullWidth
                  placeholder="Confirm Password"
                  type="password"
                  sx={{ mb: 2 }}
                />
                <Input
                  fullWidth
                  placeholder="Password Hint"
                  sx={{ mb: 2 }}
                />
                <Typography id="modal-desc" textColor="text.tertiary" mb={2}>
                  Secure your private content with 128-bit encryption.
                </Typography>
                <Switch
                  checked={encryptionLock}
                  onChange={(e) => setEncryptionLock(e.target.checked)}
                  label="Encryption Lock"
                />
                <div style={{ display: "flex", flexDirection: "column", marginTop: 16 }}>
                  <Checkbox
                    checked={rememberPassword}
                    onChange={(e) => setRememberPassword(e.target.checked)}
                    label="Remember Password"
                  />
                  <Checkbox
                    checked={autoLockJournal}
                    onChange={(e) => setAutoLockJournal(e.target.checked)}
                    label="Auto Lock Journal"
                  />
                </div>
                <Button
                  fullWidth
                  variant="solid"
                  color="primary"
                  sx={{ mt: 2 }}
                  disabled={!encryptionLock} // Disable until the encryption is turned on
                >
                  Lock Journal
                </Button>
              </Sheet>
            </Modal>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
}

export default DiaryBox;
