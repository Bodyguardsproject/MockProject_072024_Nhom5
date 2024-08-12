import React, { useState } from "react";
import StaffProfile from "./StaffProfile";

export default function Profile() {
  // check role and switch profile
  const [role, setRole] = useState("staff");
  return <div>{role === "staff" && <StaffProfile />}</div>;
}
