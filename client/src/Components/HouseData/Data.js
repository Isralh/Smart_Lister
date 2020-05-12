import React, { useState, createContext } from 'react'
import { CABath, CABed, CACouch, CAFront, CAInside, CAKitchen, CAShower } from '../../Public/HouseImages/ColumbiaAvenue/Export'
import { FPHolicoptershot, FPBath, FPFront, FPInside, FPKitchen, FPOutside } from '../../Public/HouseImages/FruitvillePK/Exports'
import { KSBack, KSFront, KSKitchen, KSKitchenSecond, KSOutside, KSOutsideSecond } from '../../Public/HouseImages/KingSt/Exports'
import { LPCouch, LPFront, LPLivingRoom, LPShower } from '../../Public/HouseImages/LititzPk/Export'
import { MDBack, MDchairs, MDFront, MDInside, MDInsideSecond, MDLivingRoom } from '../../Public/HouseImages/MarrietaDrive/Export'
import { OSCouch, OSFirePlace, OSFront, OSInside, OSLivingRoom, OSOutsideSecond } from '../../Public/HouseImages/OrangeSt/Export'
import { RRChairs, RRCouch, RRFront, RROutside, RRSide, RRStairs } from '../../Public/HouseImages/RockhouseRun/Export'
import { SRBack, SRFront, SRFrontSecond, SRInside, SRSide, SRSideSeoncd } from '../../Public/HouseImages/SummitRd/Export'
import { SRDback, SRDbath, SRDfrontSecond, SRDfrontThird, SRDfront, SRDinside, SRDkitchen, SRDoutside, SRDpool } from '../../Public/HouseImages/SwarrRd/Export'
// import { WSFront, WSFrontNight, WSFrontSide, WSKitchen, WSPool, WSStairs } from '../Pictures/DataPictures/WashingtonSt/Export'

export const DataContext = createContext()
const Data = (props) => {
  const [homes, setHomes] = useState([

    { id: 1, image: [CACouch, CAFront, CABed, CABath, CAInside, CAKitchen, CAShower], latlng: [40.07, -75.35], Address: '1346 Columbia Avenue', City: 'King of Prussia, PA', Zip: 19406, Beds: 5, Baths: 3, SqFt: '4,800 SqFt', Garages: 3, Price: 760000, DaysOnMarket: 82, propertyTax: 1.55, Type: 'Residential', Population: '19,936', MedianFamilyIncome: '$42,500', MedianAge: 39.2, LocalTaxRate: 1.5, UnemploymentRate: 3.4, AreaFeel: 'Urban' },
    { id: 2, image: [KSFront, KSBack, KSKitchen, KSOutside], latlng: [40.10384, -75.382324], Address: '187 King Street', City: 'King of Prussia, PA', Zip: 19406, Beds: 4, Baths: 2, SqFt: ' 4,675 SqFt', Garages: 2, Price: 640000, DaysOnMarket: 123, propertyTax: 1.55, Type: 'Residential', Population: '19,936', MedianFamilyIncome: '$42,500', MedianAge: 39.2, LocalTaxRate: 1.5, UnemploymentRate: 3.4, AreaFeel: 'Urban' },
    { id: 3, image: [SRFront, SRBack, SRInside, SRSide], latlng: [40.10, -75.34], Address: '265 Summit Road', City: 'King of Prussia, PA', Zip: 19406, Beds: 3, Baths: 3, SqFt: ' 4,200 SqFt', Garages: 2, Price: 530000, DaysOnMarket: 91, propertyTax: 1.55, Type: 'Residential', Population: '19,936', MedianFamilyIncome: '$42,500', MedianAge: 39.2, LocalTaxRate: 1.5, UnemploymentRate: 3.4, AreaFeel: 'Urban' },
    { id: 4, image: [SRDfront, SRDbath, SRDback, SRDinside, SRDkitchen, SRDoutside], latlng: [40.07, -75.4], Address: '2060 Swarr Run Road', City: 'Malvern, PA', Zip: 19406, Beds: 5, Baths: 3, SqFt: ' 5,100 SqFt', Garages: 3, Price: 820000, DaysOnMarket: 34, propertyTax: 1.53, Type: 'Residential', Population: '10,100', MedianFamilyIncome: '$42,500', MedianAge: 37.5, LocalTaxRate: 1.5, UnemploymentRate: 2.2, AreaFeel: 'rural' },
    { id: 5, image: [FPFront, FPOutside, FPInside, FPBath, FPHolicoptershot, FPKitchen], latlng: [40.05, -75.51], Address: '1051 Fruitville Pike', City: 'Malvern, PA', Zip: 19355, Beds: 5, Baths: 3, SqFt: ' 5,700 SqFt', Garages: 3, Price: 900000, DaysOnMarket: 67, propertyTax: 1.48, Type: 'Residential' },
    { id: 6, image: [LPFront, LPCouch, LPLivingRoom, LPShower], latlng: [40.03, -75.53], Address: '821 Lititz Pike', City: 'Malvern, PA', Zip: 19355, Beds: 4, Baths: 3, SqFt: ' 4,500 SqFt', Garages: 2, Price: 620000, DaysOnMarket: 101, propertyTax: 1.48, Type: 'Residential' },
    { id: 7, image: [MDFront, MDchairs, MDBack, MDInside, MDLivingRoom], latlng: [40.05, -75.53], Address: '122 Marietta Drive', City: 'West Chester, PA', Zip: 19355, Beds: 5, Baths: 4, SqFt: ' 5,900 SqFt', Garages: 2, Price: 930000, DaysOnMarket: 254, propertyTax: 1.48, Type: 'Residential' },
    { id: 8, image: [OSFront, OSFirePlace, OSCouch, OSInside], latlng: [40.02, -75.51], Address: '202 Orange Street', City: 'West Chester, PA', Zip: 19355, Beds: 5, Baths: 3, SqFt: ' 5,500 SqFt', Garages: 2, Price: 850000, DaysOnMarket: 11, propertyTax: 1.48, Type: 'Residential' },
    { id: 9, image: [RRFront, RRChairs, RRCouch, RROutside, RRSide, RRStairs], latlng: [39.96, -75.6055], Address: '145 Rockhouse Run', City: 'West Chester, PA', Zip: 19380, Beds: 4, Baths: 3, SqFt: ' 4,700 SqFt', Garages: 2, Price: 830000, DaysOnMarket: 122, propertyTax: 1.48, Type: 'Residential' }
    // { id: 10, image: [WSFront, WSFrontNight, WSFrontSide, WSKitchen, WSPool, WSStairs], Address: '20 Washington Street', City: 'West Chester, PA', Zip: '19380', beds: '5 Beds', baths: '3 Baths', SqFt: ' 5,500 sqFt', Garages: '2 Garages', Price: '$800,000' }

  ])
  return (
    <DataContext.Provider value={[homes]}>
      {props.children}
    </DataContext.Provider>
  )
}

export default Data
