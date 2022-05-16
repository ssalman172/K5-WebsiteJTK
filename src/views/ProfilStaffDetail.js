import "../App.css";
import ProfilDetailCard from "../components/ProfilDetailCard";
import ProfilDetailSidebar from "../components/ProfilDetailSidebar";

const ProfilStaffDetail = () => {
  return (
    <div className="w-11/12 ml-auto mr-auto mb3 mt3 flex">
      <ProfilDetailSidebar />
      <ProfilDetailCard isDosen={false} />
    </div>
  );
};

export default ProfilStaffDetail;
