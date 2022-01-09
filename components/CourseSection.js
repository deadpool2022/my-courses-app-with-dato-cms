import React from 'react'
import CalloutRecord from './CalloutRecord'
import CourseHeaderRecord from './CourseHeaderRecord'
import LearnSectionRecord from './LearnSectionRecord';
import PricingCard from './PricingCard';
import PricingSectionRecord from './PricingSectionRecord';

export default function CourseSection({details}) {
    console.log("🚀 ~ file: CourseSection.js ~ line 4 ~ CourseSection ~ details", details)

    if (details.__typename === "CourseHeaderRecord") {
      return <CourseHeaderRecord details={details}></CourseHeaderRecord>;
    } else if (details.__typename === "CalloutRecord") {
      return <CalloutRecord details={details}></CalloutRecord>;
    } else if (details.__typename === "LearnSectionRecord") {
      return <LearnSectionRecord details={details}></LearnSectionRecord>;
    } else if (details.__typename === "PricingSectionRecord") {
      return <PricingSectionRecord details={details}></PricingSectionRecord>;
    } else if (details.__typename === "PricingCard") {
      return <PricingCard details={details}></PricingCard>;
    }
    return (
        <div>
            <h1>Course Section</h1>
        </div>
    )
}
