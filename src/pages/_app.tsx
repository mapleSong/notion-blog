import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { RootLayout } from "src/layouts";
import { queryClient } from "src/libs/react-query";

import { AppPropsWithLayout } from "../types";

import "src/assets/styles.css";

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
