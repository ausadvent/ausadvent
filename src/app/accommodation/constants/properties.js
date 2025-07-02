// First house images
import firstHouseFront from '../../../../assets/accommodation/house-1.webp';
import firstHouseLiving from '../../../../assets/accommodation/house-2.webp';
import firstHouseGarden from '../../../../assets/accommodation/house-3.webp';
import firstHouseDoor from '../../../../assets/accommodation/house-4.webp';
import firstHouseLiv from '../../../../assets/accommodation/house-5.webp';

// Second house images
import secondHouseFront from '../../../../assets/accommodation/secondHouse-front.jpg';
import secondHouseKitchen from '../../../../assets/accommodation/secondHouse-kitchen.webp';
import secondHouseLiving from '../../../../assets/accommodation/secondHouse-living.webp'

export const propertiesArray = [
    {
        id: 1,
        houseTitle: "Logan Central Cozy Apartment",
        photos: [
            {
                id: 1,
                picture:firstHouseFront,
            },
            {
                id: 2,
                picture: firstHouseLiving
            },
            {
                id: 3,
                picture: firstHouseGarden
            },
            {
                id: 4,
                picture: firstHouseDoor
            },
            {
                id: 5,
                picture: firstHouseLiv
            }
        ],
        address: "Garfield Road, Logan Central QLD 4300",
        bedrooms: 1,
        bathrooms: 1, 
        features: [
            {
                id: 1,
                featureDescription: 'Sleek and beautiful 1-bedroom apartment'
            },
            {
                id: 2,
                featureDescription: '1 modern bathroom'
            },
            {
                id: 3,
                featureDescription: 'Ceiling fans for comfort'
            },
            {
                id: 4,
                featureDescription: 'ILO Accommodation available'
            },
            {
                id: 5,
                featureDescription: 'Easy access to public transport'
            },
            {
                id: 6,
                featureDescription: 'Close proximity to medical facilities'
            },
            {
                id: 7,
                featureDescription: 'Near Logan Central for shopping convenience'
            },
            {
                id: 8,
                featureDescription: 'Quiet, residential location'
            }
        ],
        localAreaDescription: "Logan Central offers a perfect blend of urban convenience and community charm. With shops, cafes, and services nearby, you'll have everything you need at your fingertips. The proximity to public transport and medical facilities ensures that all your needs are easily met.",
        perfectForDescription: "Individual Living Option (ILO), Individuals looking for a compact, low-maintenance living space with great local amenities and support options."
    },
    {
        id: 2,
        houseTitle: "Redbank Plain Road Cozy House",
        photos: [
            {
                id: 1,
                picture:secondHouseFront,
            },
            {
                id: 2,
                picture: secondHouseKitchen
            },
            {
                id: 3,
                picture: secondHouseLiving
            },
            // {
            //     id: 4,
            //     picture: firstHouseDoor
            // },
            // {
            //     id: 5,
            //     picture: firstHouseLiv
            // }
        ],
        address: "Redbank Plain Road, Bellbird Park QLD 4300",
        bedrooms: 2,
        bathrooms: 1, 
        features: [
            {
                id: 1,
                featureDescription: 'Modern New Home'
            },
            {
                id: 2,
                featureDescription: 'Ceiling Fans / Air-conditioning'
            },
            {
                id: 3,
                featureDescription: 'Easy Access to public transport'
            },
            {
                id: 4,
                featureDescription: 'Close Proximity to Doctors'
            },
            {
                id: 5,
                featureDescription: 'SIL/STA/ILO Accommodation'
            },
            {
                id: 6,
                featureDescription: 'Proximity to Redbank Plaza'
            },
            {
                id: 8,
                featureDescription: 'Quiet, residential location'
            }
        ],
        localAreaDescription: "Logan Central offers a perfect blend of urban convenience and community charm. With shops, cafes, and services nearby, you'll have everything you need at your fingertips. The proximity to public transport and medical facilities ensures that all your needs are easily met.",
        perfectForDescription: "Individual Living Option (ILO), Individuals looking for a compact, low-maintenance living space with great local amenities and support options."
    },
]