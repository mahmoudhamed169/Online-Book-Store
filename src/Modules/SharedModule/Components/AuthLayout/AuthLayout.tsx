import { Outlet } from "react-router-dom";
import authImg from "../../../../assets/Picture.png";

export default function AuthLayout() {
  return (
    <div>
      <div className=" container-fluid">
        <div className="row vh-100 ">
          <div className="col-md-5   h-100 p-0">
            <img src={authImg} className="h-100 w-100" alt="" />
          </div>

          <div className="col-md-6 h-100 p-5  m-auto ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
