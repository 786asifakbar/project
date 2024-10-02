import CenterExecutiveCommunityMember from "./CenterExecutiveCommunityMember"
import LegalAidCommunityMember from "./LegalAidCommunityMember"
import EducationCommunityMember from './EducationCommunityMember'
import HealthCommunityMember from './HealthCommunityMember'
import FundRaisingCommunityMember from './FundRaisingCommunityMember'
import ITDepartmentMember from './ITDepartmentMember'


function OurMember() {
  return (
    <>
     <div className="relative w-full h-[30vh] md:h-[30vh] bg-cover bg-center" style={{ backgroundImage: `url('/Web-Icon.png')` }}>
        <div className="flex items-center justify-center h-full bg-opacity-60">
          <h1 className="text-black text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center drop-shadow-lg">
           Our Team Members
          </h1>
        </div>
      </div>
    <CenterExecutiveCommunityMember/>
    <LegalAidCommunityMember/>
    <EducationCommunityMember/>
    <HealthCommunityMember />
    <FundRaisingCommunityMember/>
    <ITDepartmentMember/>
    
    </>
  )
}

export default OurMember