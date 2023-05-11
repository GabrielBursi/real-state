import React from "react"

export type Children = {
    children: React.ReactNode
}

export interface BannerProps {
    purpose: string;
    title1: string;
    title2: string;
    desc1: string;
    desc2: string;
    buttonText: string;
    linkName: string;
    imageUrl: string;
}

export interface IFilterValues {
    name: string;
    purpose: string;
    rentFrequency?: string;
    categoryExternalID: string;
    minPrice?: number;
    maxPrice?: number;
    areaMax?: number;
    roomsMin?: number;
    bathsMin?: number;
    sort?: string;
    locationExternalIDs?: string;
    [key: string]: any;
}

export interface IFilterData {
    items: {
        name: string;
        value: string;
    }[];
    placeholder: string;
    queryName: string;
}

export interface ApiData {
    hits: Hits[]
}

export type Hits = {
    id: number,
    name: string,
    coverPhoto: {
        url: string
    },
    price: number,
    rentFrequency: string | null,
    rooms: number,
    title: string,
    baths: number,
    area: number,
    agency: {
        logo:{
            url: string
        }
    },
    isVerified: boolean,
    externalID: string,
}

export type Values = {
    name: string;
    value: string | number | undefined;
}

export interface IPropertyDetails {
    price: number,
    rentFrequency: string | null,
    rooms: number,
    title: string,
    baths: number,
    area: number,
    agency: {
        logo: {
            url: string
        }
    },
    isVerified: boolean,
    description: string,
    type: string,
    purpose: string,
    furnishingStatus: string | null,
    amenities: amenities[],
    photos: {
        id: number,
        url: string
    }[],
}

type amenities = {
    amenities: {
        text: string
    }[]
}