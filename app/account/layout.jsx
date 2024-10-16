import SideNavigation from "../_components/SideNavigation";

const AccountLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
};

export default AccountLayout;
