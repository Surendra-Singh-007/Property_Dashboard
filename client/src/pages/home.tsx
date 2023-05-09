import { useList } from '@pankod/refine-core';
import { Typography, Box, Stack } from '@pankod/refine-mui';

import { PieChart, PropertyReferrals, TotalRevenue, PropertyCard } from 'components';

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: 'properties',
    config: {
      pagination: {
        pageSize: 6
      }
    }
  })

  const latestProperties = data?.data ?? [];

  if(isLoading) return <Typography>Loading...</Typography>
  if(isError) return <Typography>Something went wrong!</Typography>

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart 
          title="Properties for Sale"
          value={1148}
          series={[75, 25]}
          colors={['#ed3ed8', '#efc4ea']}
        />
        <PieChart 
          title="Properties for Rent"
          value={1439}
          series={[60, 40]}
          colors={['#ed3ed8', '#efc4ea']}
        />
        <PieChart 
          title="Total customers"
          value={8995}
          series={[75, 25]}
          colors={['#ed3ed8', '#efc4ea']}
        />
        <PieChart 
          title="Properties for Cities"
          value={749}
          series={[75, 25]}
          colors={['#ed3ed8', '#efc4ea']}
        />
      </Box>

      <Stack mt="25px" width="100%" direction={{ xs: 'column', lg: 'row' }} gap={4}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>

      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="#fcfcfc"
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Typography fontSize="18px" fontWeight={600} color="#11142d">Latest Properties</Typography>

        <Box mt={2.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 4}}>
          {latestProperties.map((property) => (
            <PropertyCard 
              key={property._id}
              id={property._id}
              title={property.title}
              location={property.location}
              price={property.price}
              photo={property.photo}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Home