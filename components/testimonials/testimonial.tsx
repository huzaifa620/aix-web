import { Avatar, Card, CardBody, CardHeader, Stack, Heading, Text } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Extend Chakra props with motion for animation
const MotionCard = motion(Card);

export interface TestimonialProps {
  name: string;
  description: React.ReactNode;
  avatar: string;
  href?: string;
  children?: React.ReactNode;
}

export const Testimonial = ({
  name,
  description,
  avatar,
  href,
  children,
}: TestimonialProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers once when the component enters view
    threshold: 0.3,    // Trigger when 30% of the component is in view
  });

  return (
    <MotionCard
      ref={ref} // Ref for visibility tracking
      initial={{ opacity: 0, y: 50 }} // Initial state of the card (invisible and slightly moved down)
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Animate when in view
      transition={{ opacity: { duration: 0.6 }, y: { duration: 0.6 } }} // Smooth transition for opacity and position
      position="relative"
      boxShadow="md"
      borderRadius="md"
      overflow="hidden"
    >
      <CardHeader display="flex" flexDirection="row" alignItems="center">
        <Avatar name={name} src={avatar} size="sm" bg="transparent" />
        <Stack spacing="1" ms="4">
          <Heading size="sm">{name}</Heading>
          <Text color="muted" size="xs">
            {description}
          </Text>
        </Stack>
      </CardHeader>
      <CardBody>
        ⭐⭐⭐⭐⭐<br />
        {children}
        {href && (
          <a href={href} style={{ position: "absolute", top: "4", right: "4" }}>
            <FaTwitter />
          </a>
        )}
      </CardBody>
    </MotionCard>
  );
};
