import "../App.css";
import ProfilCard from "../components/ProfilCard";

const ProfilDosen = () => {
  return (
    <div className="w-11/12 mx-auto">
      <ProfilCard isDosen={true} />
      <ProfilCard isDosen={true} />
      <ProfilCard isDosen={true} />
      <ProfilCard isDosen={true} />
    </div>
  );
};

export default ProfilDosen;