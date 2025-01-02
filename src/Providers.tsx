import { HStack, Text } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";

import { Button } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "./components/ui/provider";

const ErrorFallback = () => {
  return (
    <HStack alignItems="center" justifyContent="center" role="alert">
      <Text>Ooops, something went wrong :( </Text>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </HStack>
  );
};

const Providers = ({ children }: IProviders) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider>
        <HelmetProvider>{children}</HelmetProvider>
        {/* {globalStyles()} */}
      </Provider>
    </ErrorBoundary>
  );
};

interface IProviders {
  children: React.ReactNode;
}

export default Providers;
