import { Flex, Heading, HStack, Image, Link } from "@chakra-ui/react";
import { Download } from "lucide-react";
import { Button } from "../../components/ui/button";

const Header = () => {
  const headerItems = [
    { label: "Skills" },
    { label: "Experience" },
    { label: "About Me" },
    { label: "Projects" },
    { label: "Contact" },
  ];
  return (
    <Flex px={"80px"} py={6}>
      <HStack w={"100%"} px={8} justify={"space-between"}>
        <HStack>
          <Image src="" />
          <Heading
            fontSize={"20px"}
            fontWeight={700}
            lineHeight={"24px"}
            letterSpacing={"-0.4px"}
          >
            Roshan
          </Heading>
        </HStack>
        <HStack gap={8}>
          {headerItems.map((item) => {
            return (
              <Link
                fontSize={"20px"}
                fontWeight={600}
                lineHeight={"24px"}
                letterSpacing={"-0.4px"}
              >
                {item.label}
              </Link>
            );
          })}
        </HStack>

        <Button>
          Resume
          <Download />
        </Button>
      </HStack>
    </Flex>
  );
};

export default Header;
