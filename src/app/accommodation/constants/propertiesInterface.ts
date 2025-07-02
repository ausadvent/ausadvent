export interface simplePropertiesCard {
    id: number;
    houseTitle: string;
    photos: { id: number; picture: any }[];
    address: string;
    bedrooms: number;
    bathrooms: number;
    features: { id: number; featureDescription: string }[];
    localAreaDescription: string;
    perfectForDescription: string;
} 

export interface featuresPropertyCard {
    features: { id: number; featureDescription: string }[];
    localAreaDescription: string;
    perfectForDescription: string;
}