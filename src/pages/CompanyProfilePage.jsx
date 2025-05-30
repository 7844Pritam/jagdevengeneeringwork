import React from 'react'
import CompanyProfile from './company_profile/CompanyProfile'
import QualityFeatures from './company_profile/QualityFeatures'
import PreEngineeringBuilding from './company_profile/PreEngineeringBuilding'
import RoofingFeatures from './company_profile/RoofingFeatures'

const CompanyProfilePage = () => {
    return (
        <div>
            <CompanyProfile />

            <QualityFeatures />
            <PreEngineeringBuilding/>
            <RoofingFeatures/>

        </div>
    )
}

export default CompanyProfilePage