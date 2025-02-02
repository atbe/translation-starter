import { SubscriptionWithProduct } from '@/types/db';
import { Badge, Box, Flex, Spinner } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  subscription: SubscriptionWithProduct;
}

const PlanDetails: FC<Props> = ({ subscription }) => {
  return (
    <Flex w="full">
      <Flex w="full" fontSize={'lg'} alignItems="center">
        Plan
      </Flex>
      <Box w="full">
        <Badge colorScheme="purple">
          {subscription?.prices?.products?.name || 'free'}
        </Badge>
      </Box>
    </Flex>
  );
};

export default PlanDetails;
