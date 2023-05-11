import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import { Hits } from '@/types';

const Property = ({ property }: {property: Hits}) => (
    <Link href={`/property/${property.externalID}`} passHref>
        <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
            <Box>
                <Image src={property.coverPhoto.url} width={400} height={260} alt={property.title}/>
            </Box>
            <Box w='full'>
                <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                        <Box paddingRight='3' color='green.400'>{property.isVerified && <GoVerified />}</Box>
                        <Text fontWeight='bold' fontSize='lg'>AED {property.price}{property.rentFrequency && `/${property.rentFrequency}`}</Text>
                    </Flex>
                    <Box>
                        <Avatar size='sm' src={property.agency.logo.url}></Avatar>
                    </Box>
                </Flex>
                <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
                    {property.rooms}
                    <FaBed /> | {property.baths} <FaBath /> | {millify(property.area)} sqft <BsGridFill />
                </Flex>
                <Text fontSize='lg'>
                    {property.title.length > 30 ? property.title.substring(0, 30) + '...' : property.title}
                </Text>
            </Box>
        </Flex>
    </Link>
);

export default Property;